import React, { useState } from 'react';
import _ from 'lodash';

import { Modal, Button, Checkbox, Alert } from 'antd';
import Player from 'src/models/Player';
import Country from 'src/models/Country';
import { RequestExchangeCard, RequestExchangeCards } from 'src/ops/game/actions';
import { SetCardsModalOpen } from 'src/state/modals/actions';

export interface Props {
    currentPlayer: Player;
    countries: Country[];
    countryCardsVisible: boolean;

    changeCardHandler: (payload: RequestExchangeCard['payload']) => void;
    changeCardsHandler: (payload: RequestExchangeCards['payload']) => void;
    setCardsModalOpen: (payload: SetCardsModalOpen['payload']) => void;
}

const CountryCardsModal = (props: Props) => {
    debugger;
    const initialState: string[] = [];
    const [checkedCards, setCheckedCards] = useState(initialState);

    if (!props.currentPlayer || !props.currentPlayer.cards) {
        return null;
    }

    const clickCard = (country: string) => {
        const cards: string[] = [...checkedCards];

        if (!_.find(cards, (obj) => obj === country)) {
            // Add card
            console.log('add card', country);
            cards.push(country);
        } else {
            // Remove card
            console.log('remove card', country);
            _.remove(cards, (obj) => obj === country);
        }

        setCheckedCards(cards);
        console.log('CARDS', cards);
    }

    let playerCards;

    if (props.currentPlayer.cards.length > 0) {
        // playerCards = <ul>;
        playerCards = (
            <div>
                <ul>
                    {props.currentPlayer.cards.map((card: any) => {
                        const country = _.find(props.countries, { countryKey: card.country });

                        if (!country) {
                            throw new Error(`No country found with key ${card.country}`);
                        }

                        if (!country.state.player) {
                            throw new Error(`No player found for country ${card.country}`);
                        }

                        const countryBelongsToPlayer = country.state.player.color === props.currentPlayer.color;

                        let button = <span></span>;

                        if (countryBelongsToPlayer) {
                            button = (
                                <Button
                                    onClick={() => props.changeCardHandler({ card: card.country })}
                                    disabled={card.exchanged}

                                >
                                    Change
                                </Button>
                            );
                        }

                        return (
                            <li key={card.country}>
                                <Checkbox onClick={() => clickCard(card.country)}>
                                    {card.country} ({card.type}) &nbsp;
                </Checkbox>
                                {button}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
        // playerCards = </ul>;
    } else {
        playerCards = <div>No cards</div>;
    }

    return (
        <Modal
            visible={props.countryCardsVisible}
            maskClosable={true}
            closable={true}
            title="Cards"
            onCancel={() => props.setCardsModalOpen({ isOpen: !props.countryCardsVisible })}
            footer={[
                <Button key="submit" type="primary" onClick={() => props.setCardsModalOpen({ isOpen: !props.countryCardsVisible })}>
                    OK
                </Button>,
            ]}
        >
            <div>
                {playerCards}
            </div>
            <Button
                onClick={() => props.changeCardsHandler({ cards: checkedCards })}
                disabled={props.currentPlayer.cards.length < 3}
            >
                Change 3 cards
            </Button>
            <div style={{ paddingTop: '5px' }}>
                <Alert message="You can change 3 cards if they are all the same type or all different types for 4 troops" type="info" showIcon />
            </div>
        </Modal>
    );
};

export default CountryCardsModal;
