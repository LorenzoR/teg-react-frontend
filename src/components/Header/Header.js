import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { Statistic } from 'antd';

import {
  UserOutlined,
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
      <Col span={12}>
        <h1 style={{ color: 'white' }}>Teg Online</h1>
      </Col>
      <Col span={12}>
        <Row>
          <Col span={8}>
            Current round: {props.round.type} (#
            {props.round.count})
          </Col>
          <Col span={8}>
            Current player: &nbsp;
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
          <Col span={8}>
            <Countdown
              title={countDownTitle}
              value={deadline}
              onFinish={props.onCounterFinish}
              valueStyle={{ color: 'white' }}
            />
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
};

export default Header;
