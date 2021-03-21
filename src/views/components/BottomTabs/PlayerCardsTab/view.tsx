import React, { useState } from "react";
import _ from 'lodash';

import { Button, Checkbox } from "antd";
import Player from "src/models/Player";
import Country from "src/models/Country";
import { RequestExchangeCard, RequestExchangeCards } from "src/ops/game/actions";

export interface Props {
    currentPlayer: Player;
    countries: Country[];

    changeCardHandler: (payload: RequestExchangeCard["payload"]) => void;
    changeCardsHandler: (payload: RequestExchangeCards["payload"]) => void;
}

const PlayerCardsTab = (props: Props) => {
    const [checkedCards, setCheckedCards] = useState<any>([]);

    const clickCard = (country: any) => {
        const cards: any[] = [...checkedCards];

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

    if (props.currentPlayer.cards?.length > 0) {
        // playerCards = <ul>;
        playerCards = (
            <div>
                <ul>
                    {props.currentPlayer.cards.map((card: any) => {
                        const country = _.find(props.countries, { countryKey: card.country });

                        if (!country) {
                            throw new Error(`No country found with id ${card.country}`);
                        }

                        if (!country?.state.player) {
                            throw new Error(`No player for country ${card.country}`);
                        }
                        
                        const countryBelongsToPlayer = country.state.player.color === props.currentPlayer.color;

                        let button = <span></span>;

                        if (countryBelongsToPlayer) {
                            button = (
                                <Button
                                    onClick={() => props.changeCardHandler(card.country)}
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
                <Button
                    onClick={() => props.changeCardsHandler(checkedCards)}
                    disabled={props.currentPlayer.cards.length < 3}
                >
                    Change 3 cards
        </Button>
            </div>
        );
        // playerCards = </ul>;
    } else {
        playerCards = <div>No cards</div>;
    }

    return playerCards;
};

export default PlayerCardsTab;
