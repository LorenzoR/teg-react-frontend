import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Layout } from 'antd';
import { Button, Tooltip } from 'antd';
import { Card } from 'antd';

import {
  UserAddOutlined,
  LoginOutlined,
  FireOutlined,
  ThunderboltOutlined,
  UserDeleteOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

import UserInfo from '../UserInfo/UserInfo';
import Players from './Players/Players';

import Country from '../../models/Country';

import RoundType from '../../models/Round';

const { Sider } = Layout;

const GameSider = (props) => {
  if (!props.players || props.players.length === 0 || !props.round) {
    return <div></div>;
  }

  // Card Head style
  const cardHeadStyle = { fontWeight: 'bold', backgroundColor: 'lightblue' };

  const currentPlayer = _.find(
    props.players,
    (obj) => obj.id === props.currentPlayerId,
  );

  if (!currentPlayer) {
    return <div>Loading...</div>;
  }

  let canAddTroops = false;

  if (props.countrySelection.source) {
    const continent = Country.getCountryContinent(props.countrySelection.source);
    canAddTroops = currentPlayer.troopsToAdd
      && (currentPlayer.troopsToAdd.free || currentPlayer.troopsToAdd[continent]);
  }

  const source = _.find(props.countries, { countryKey: props.countrySelection.source});
  const target = _.find(props.countries, { countryKey: props.countrySelection.target});

  const canRemoveTroops = props.countrySelection.source && source.state.newTroops;

  // Check countries are selected, they belong to the same player and source has at least 2 troops
  const canMoveTroops = props.countrySelection.source && props.countrySelection.target
      && source.state.troops > 1
      && source.state.player.color === target.state.player.color;

  const attackActionButtons = [
    <Tooltip title="Attack">
      <Button
        type="primary"
        shape="circle"
        icon={<ThunderboltOutlined />}
        style={{ marginRight: '4px'}}
        onClick={() => props.attackHandler()}
        disabled={
          props.round.type !== RoundType.ATTACK ||
          !props.countrySelection.source ||
          !props.countrySelection.target
        }
      />
    </Tooltip>,
    <Tooltip title="Move Troops">
      <Button
        type="primary"
        shape="circle"
        icon={<LoginOutlined />}
        style={{ marginRight: '4px' }}
        onClick={() => props.moveTroopsHandler(1)}
        disabled={!canMoveTroops}
      />
    </Tooltip>,
    <Tooltip title="Get Card">
      <Button
        type="primary"
        shape="circle"
        icon={<CreditCardOutlined />}
        onClick={() => props.getCountryCardHandler()}
        disabled={
          props.round.type === RoundType.ADD_TROOPS ||
          !props.players[props.round.playerIndex].canGetCard
        }
      />
    </Tooltip>,
  ];

  const addTroopsActionButtons = [
    <Tooltip title="Add Troops">
      <Button
        type="primary"
        shape="circle"
        icon={<PlusCircleOutlined />}
        style={{ marginRight: '4px'}}
        disabled={!canAddTroops}
        onClick={() => props.addTroopsHandler(props.countrySelection.source)}
      />
    </Tooltip>,
    <Tooltip title="Remove Troops">
      <Button
        type="primary"
        shape="circle"
        icon={<MinusCircleOutlined />}
        style={{ marginRight: '4px'}}
        disabled={!canRemoveTroops}
        onClick={() => props.removeTroopsHandler(props.countrySelection.source)}
      />
    </Tooltip>,
  ];

  let actionButtons;

  if (props.round) {
    if (
      [RoundType.ATTACK, RoundType.GET_CARD, RoundType.MOVE_TROOPS].includes(
        props.round.type,
      )
    ) {
      actionButtons = attackActionButtons;
    } else {
      actionButtons = addTroopsActionButtons;
    }
  } else {
    actionButtons = <div></div>;
  }

  return (
    <Sider style={{ color: 'white' }}>
      <Card size="small" title="Last Attack" headStyle={cardHeadStyle}>
        <p>Attacker dices: {props.dices.attacker.join(', ')}</p>
        <p>Defender dices: {props.dices.defender.join(', ')}</p>
      </Card>
      <Card size="small" title="Country" headStyle={cardHeadStyle}>
        <p>Source: {props.countrySelection.source}</p>
        <p>Target: {props.countrySelection.target}</p>
        {actionButtons}
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
  countries: PropTypes.object,
};

export default GameSider;
