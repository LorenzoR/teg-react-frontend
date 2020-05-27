import React from "react";
import PropTypes from "prop-types";

import { Tabs, Button, Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const PlayerCardsTab = (props) => {
  let playerCards;

  if (props.cards.length > 0) {
    // playerCards = <ul>;
    playerCards = (
      <div>
        <ul>
          {props.cards.map((card) => {
            return (
              <li key={card.country}>
                <Checkbox onChange={onChange}>
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
          onClick={() => props.changeCardsHandler("INDIA")}
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

PlayerCardsTab.propTypes = {};

export default PlayerCardsTab;
