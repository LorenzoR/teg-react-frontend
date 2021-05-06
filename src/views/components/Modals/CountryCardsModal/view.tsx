import React, { useState } from 'react';
import _ from 'lodash';

import { Modal, Button, Checkbox, Alert, Card } from 'antd';
import Player, { CountryCard } from 'src/models/Player';
import Country from 'src/models/Country';
import { RequestExchangeCard, RequestExchangeCards } from 'src/ops/game/actions';
import { SetCardsModalOpen } from 'src/state/modals/actions';

import { ReactComponent as BallonCardImg } from 'src/assets/cards/balloon.svg';
import { ReactComponent as CannonCardImg } from 'src/assets/cards/cannon.svg';
import { ReactComponent as ShipCardImg } from 'src/assets/cards/ship.svg';
import { ReactComponent as WildCardCardImg } from 'src/assets/cards/wildCard.svg';

import { TextAlignProperty } from 'csstype';

export interface Props {
    currentPlayer: Player;
    countries: Country[];
    countryCardsVisible: boolean;

    changeCardHandler: (payload: RequestExchangeCard['payload']) => void;
    changeCardsHandler: (payload: RequestExchangeCards['payload']) => void;
    setCardsModalOpen: (payload: SetCardsModalOpen['payload']) => void;
}

const getCardImage = (type: string) => {
    switch (type) {
        case 'balloon':
            return <BallonCardImg />;
        case 'ship':
            return <ShipCardImg />;
        case 'cannon':
            return <CannonCardImg />;
        case 'wildcard':
            return <WildCardCardImg />;
        default:
            return null;
    }
}

const CountryCardsModal = (props: Props) => {
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

        const gridStyle = {
            width: '20%',
            textAlign: 'center' as TextAlignProperty,
            height: '233px',
            padding: '15px 0 0 0',
            margin: '0',
        };

        // playerCards = <ul>;
        playerCards = (
            <div>
                <Card>
                    {Array.from({...props.currentPlayer.cards, length: 5}).map((card: CountryCard | undefined) => {
                    // {props.currentPlayer.cards.map((card: any) => {
                        if (!card) {
                            return (
                                <Card.Grid style={gridStyle}>
                                    &nbsp;
                                </Card.Grid>
                            );
                        }

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
                            <Card.Grid style={gridStyle}>
                                <div onClick={() => clickCard(card.country)}>
                                    {getCardImage(card.type)}
                                    <h4>{card.country}</h4>
                                    {button}
                                </div>
                            </Card.Grid>
                        );
                    })}
                </Card>
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
            width={850}
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
