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

const deadline = Date.now() + 1000 * 60 * 3; // 3 minutes (Moment is also OK)
const countDownTitle = <span style={{ color: 'white' }}>Tiempo</span>;

const Header = (props) => {
  if (!props.players || !props.round) {
    return <div></div>;
  }

  return (
    <Row style={{ color: 'white' }}>
      {/* Title */}
      <Col span={12}>
        <h1 style={{ color: 'white' }}>Teg Online</h1>
      </Col>
      <Col span={12}>
        <Row>
          {/* Current round */}
          <Col span={8}>
            Current round: {props.round.type} (#
            {props.round.count})
          </Col>
          {/* Current player */}
          <Col span={8}>
            Current Turn: &nbsp;
            <Avatar
              style={{
                backgroundColor: props.players[
                  props.round.playerIndex
                ].color,
              }}
              icon={<UserOutlined />}
            />
            &nbsp;
            {props.players[props.round.playerIndex].name}
          </Col>
          {/* Countdown */}
          <Col span={4}>
            <Countdown
              title={countDownTitle}
              value={deadline}
              onFinish={props.onCounterFinish}
              valueStyle={{ color: 'white' }}
            />
          </Col>
          {/* Finish round */}
          <Col span={4}>
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
