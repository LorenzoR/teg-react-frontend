import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Layout } from 'antd';
import { Card, Spin } from 'antd';

import DicesRow from '../DicesRow/DicesRow';

import UserInfo from '../UserInfo/UserInfo';
import Players from './Players/Players';

const { Sider } = Layout;

const GameSider = (props: any) => {
  if (!props.players || props.players.length === 0 || !props.round) {
    return <div></div>;
  }

  // Card Head style
  const cardHeadStyle: React.CSSProperties = {
    fontWeight: 'bold',
    backgroundColor: 'lightblue'
  };

  const currentPlayer = _.find(
    props.players,
    (obj) => obj.id === props.currentPlayerId,
  );

  if (!currentPlayer) {
    return <div>Loading...</div>;
  }

  return (
    <Sider style={{ color: 'white', marginTop: '104px' }}>
      <Card size="small" title="Country Selection" headStyle={cardHeadStyle}>
        <Spin spinning={props.spinnerVisible}>
          <p>From: {props.countrySelection.source}</p>
          <p>To: {props.countrySelection.target}</p>
        </Spin>
        <DicesRow dices={props.dices} attacking={props.attacking} />
      </Card>
      <Players
        players={props.players}
        headStyle={cardHeadStyle}
        currentPlayerIndex={props.round.playerIndex}
      />
      <UserInfo
        player={currentPlayer}
        headStyle={cardHeadStyle}
        countriesCount={props.countriesCount}
      />
    </Sider>
  );
};

GameSider.propTypes = {
  dices: PropTypes.object,
  currentPlayer: PropTypes.object,
  players: PropTypes.array,
  round: PropTypes.object,
  countrySelection: PropTypes.object,
  currentPlayerId: PropTypes.string,
  addTroopsHandler: PropTypes.func,
  attackHandler: PropTypes.func,
  moveTroopsHandler: PropTypes.func,
  removeTroopsHandler: PropTypes.func,
  exchangeCardsHandler: PropTypes.func,
  getCountryCardHandler: PropTypes.func,
  countriesCount: PropTypes.number,
  countries: PropTypes.array,
  spinnerVisible: PropTypes.bool,
  attacking: PropTypes.bool,
};

export default GameSider;
