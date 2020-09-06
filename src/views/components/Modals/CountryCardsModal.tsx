import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Modal, Button, Checkbox, Alert } from 'antd';

export interface Props {
  currentPlayer: any;
  countries: any;
  visible: boolean;
  changeCardHandler: (cardCountry: string) => void;
  changeCardsHandler: (cards: string[]) => void;
  countryCardsModalHandler: () => void;
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
    // playerCards = <ul>;
    playerCards = (
      <div>
        <ul>
          {props.currentPlayer.cards.map((card: any) => {
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
      </div>
    );
    // playerCards = </ul>;
  } else {
    playerCards = <div>No cards</div>;
  }

  return (
    <Modal
      visible={props.visible}
      maskClosable={true}
      closable={true}
      title="Cards"
      onCancel={props.countryCardsModalHandler}
      footer={[
        <Button key="submit" type="primary" onClick={props.countryCardsModalHandler}>
          OK
        </Button>,
      ]}
    >
      <div>
          {playerCards}
      </div>
      <Button
          onClick={() => props.changeCardsHandler(checkedCards)}
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

CountryCardsModal.propTypes = {
  visible: PropTypes.bool,
  currentPlayer: PropTypes.object,
  countries: PropTypes.array,
  countryCardsModalHandler: PropTypes.func,
};

export default CountryCardsModal;
