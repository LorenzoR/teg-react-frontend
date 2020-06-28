import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import { Button, Checkbox } from "antd";

const PlayerCardsTab = (props) => {
  const [checkedCards, setCheckedCards] = useState([]);

  const clickCard = (country) => {
    const cards = [...checkedCards];

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
          {props.currentPlayer.cards.map((card) => {
            const country = _.find(props.countries, { countryKey: card.country });
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

PlayerCardsTab.propTypes = {
  // cards: PropTypes.array,
  currentPlayer: PropTypes.object,
  changeCardHandler: PropTypes.func,
  changeCardsHandler: PropTypes.func,
  countries: PropTypes.array,
};

export default PlayerCardsTab;
