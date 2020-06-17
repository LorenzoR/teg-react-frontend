import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import { Tabs, Button, Checkbox } from "antd";

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

  if (props.cards.length > 0) {
    // playerCards = <ul>;
    playerCards = (
      <div>
        <ul>
          {props.cards.map((card) => {
            return (
              <li key={card.country}>
                <Checkbox onClick={() => clickCard(card.country)}>
                  {card.country} ({card.type}) &nbsp;
                </Checkbox>
                <Button
                  onClick={() => props.changeCardHandler(card.country)}
                  disabled={card.exchanged}
                >
                  Change
                </Button>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => props.changeCardsHandler(checkedCards)}
          disabled={props.cards.length < 3}
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
  cards: PropTypes.array,
  changeCardHandler: PropTypes.func,
  changeCardsHandler: PropTypes.func,
};

export default PlayerCardsTab;
