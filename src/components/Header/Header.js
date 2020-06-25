import React from 'react';
import PropTypes from 'prop-types';

import { Button, Tooltip } from 'antd';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { Statistic } from 'antd';

import {
  UserOutlined, CheckCircleOutlined,
} from '@ant-design/icons';

const { Countdown } = Statistic;

const getRoundName = (roundType) => {
  switch (roundType) {
    case 'firstAddTroops':
    case 'secondAddTroops':
    case 'addTroops':
      return 'Add Troops';
    default:
      return 'Attack';
  }
}

const Header = (props) => {
  if (!props.players || !props.round) {
    return <div></div>;
  }

  const deadline = Date.now() + 1000 * 60 * 3; // 3 minutes (Moment is also OK)
  const countDownTitle = <span style={{ color: 'white' }}>Time</span>;

  const playerColor = props.players[props.round.playerIndex].color;

  return (
    <Row style={{ color: 'white' }}>
      {/* Title */}
      <Col md={12} sm={0}>
        <h1 style={{ color: 'white' }}>Teg Online</h1>
      </Col>
      <Col md={12} sm={24}>
        <Row>
          {/* Current player and round */}
          <Col md={16} sm={14}>
            <strong>Current Turn:</strong> &nbsp;
            <Avatar
              style={{
                backgroundColor: playerColor,
              }}
              icon={<UserOutlined />}
            />
            &nbsp;
            {props.players[props.round.playerIndex].name} - {getRoundName(props.round.type)} (#{props.round.count})
          </Col>
          {/* Countdown */}
          <Col md={4} sm={6}>
            <Countdown
              title={countDownTitle}
              value={deadline}
              onFinish={props.onCounterFinish}
              valueStyle={{ color: 'white' }}
            />
          </Col>
          {/* Finish round */}
          <Col md={4} sm={4}>
          <Tooltip title="Finish Turn">
            <Button type="danger" shape="round"
                icon={<CheckCircleOutlined twoToneColor="#52c41a" />} size={'large'}
                onClick={() => props.finishRoundHandler()}
                disabled={!props.currentPlayer || props.currentPlayer.color !== props.players[props.round.playerIndex].color} >
              Finish Turn
            </Button>
            </Tooltip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Header.propTypes = {
  round: PropTypes.object,
  players: PropTypes.array,
  onCounterFinish: PropTypes.func,
  currentPlayer: PropTypes.object,
  finishRoundHandler: PropTypes.func,
};

export default Header;
