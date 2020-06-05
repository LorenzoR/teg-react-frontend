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

  return (
    <Sider style={{ color: 'white' }}>
      <Card size="small" title="Last Attack" headStyle={cardHeadStyle}>
        <p>Attacker dices: {props.dices.attacker.join(', ')}</p>
        <p>Defender dices: {props.dices.defender.join(', ')}</p>
      </Card>
      <Card size="small" title="Actions" headStyle={cardHeadStyle}>
        <Tooltip title="Finish Round">
          <Button
            type="primary"
            shape="circle"
            icon={<CheckCircleOutlined twoToneColor="#52c41a" />}
            style={{ marginRight: '4px' }}
            onClick={() => props.finishRoundHandler()}
            disabled={
              props.currentPlayer.color !==
              props.players[props.round.playerIndex].color
            }
          />
        </Tooltip>
        <Tooltip title="Get Card">
          <Button
            type="primary"
            shape="circle"
            icon={<CreditCardOutlined />}
            style={{ marginRight: '4px' }}
            onClick={() => props.getCountryCardHandler()}
            disabled={
              props.round.type === RoundType.ADD_TROOPS ||
              !props.players[props.round.playerIndex].canGetCard
            }
          />
        </Tooltip>
        <Tooltip title="Exchange Cards">
          <Button
            type="primary"
            shape="circle"
            icon={<UserAddOutlined />}
            style={{ marginRight: '4px' }}
            onClick={() => props.exchangeCardsHandler()}
            disabled={
              props.round.type === RoundType.ADD_TROOPS ||
              !props.players[props.round.playerIndex].canGetCard
            }
          />
        </Tooltip>
      </Card>
      <Card size="small" title="Country" headStyle={cardHeadStyle}>
        <p>Source: {props.countrySelection.source}</p>
        <p>Target: {props.countrySelection.target}</p>
        <Tooltip title="Add Troops">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            style={{ marginRight: '4px' }}
            disabled={!props.countrySelection.source}
            onClick={() => props.addTroopsHandler(props.countrySelection.source)}
          />
        </Tooltip>
        <Tooltip title="Remove Troops">
          <Button
            type="primary"
            shape="circle"
            icon={<MinusCircleOutlined />}
            style={{ marginRight: '4px' }}
            disabled={!props.countrySelection.source}
            onClick={() =>
              props.removeTroopsHandler(props.countrySelection.source)
            }
          />
        </Tooltip>
        <Tooltip title="Move Troops">
          <Button
            type="primary"
            shape="circle"
            icon={<LoginOutlined />}
            style={{ marginRight: '4px' }}
            onClick={() => props.moveTroopsHandler(1)}
            disabled={
              props.round.type === RoundType.ADD_TROOPS ||
              !props.countrySelection.source ||
              !props.countrySelection.target
            }
          />
        </Tooltip>
        <Tooltip title="Attack">
          <Button
            type="primary"
            shape="circle"
            icon={<ThunderboltOutlined />}
            onClick={() => props.attackHandler()}
            disabled={
              props.round.type !== RoundType.ATTACK ||
              !props.countrySelection.source ||
              !props.countrySelection.target
            }
          />
        </Tooltip>
      </Card>
      <Players
        players={props.players}
        headStyle={cardHeadStyle}
        currentPlayerIndex={props.round.playerIndex}
      />
      <UserInfo
        player={currentPlayer}
        headStyle={cardHeadStyle}
        countriesCount={props.countriesCount} />
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
  finishRoundHandler: PropTypes.func,
  countriesCount: PropTypes.number,
};

export default GameSider;
