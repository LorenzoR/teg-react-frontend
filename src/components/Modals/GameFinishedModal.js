import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Modal, Button, Popconfirm } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';

import {
  TrophyOutlined,
} from '@ant-design/icons';

const AVAILABLE = 'Available';

const GameFinishedModal = (props) => {
  /*
  const [username, setUsername] = useState('');
  const [color, setColor] = useState(null);
  const [userSubmitted, setUserSubmitted] = useState(false);

  const handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  const handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  const pickColor = () => {
    setUserSubmitted(true);
    props.okHandler(username, color);
  };

  const joinGame = () => {
    console.log('join!');
    props.reConnectHandler(color);
  }

  const players = [...props.players];

  const black = _.find(players, (o) => o.color === 'black');
  const red = _.find(players, (o) => o.color === 'red');
  const blue = _.find(players, (o) => o.color === 'blue');
  const yellow = _.find(players, (o) => o.color === 'yellow');
  const green = _.find(players, (o) => o.color === 'green');
  const pink = _.find(players, (o) => o.color === 'pink');
  */

  return (
    <Modal
      title="Game finished!"
      visible={props.visible}
      onOk={() => props.okHandler()}
      closable={false}
      maskClosable={false}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={() => props.okHandler()}
        >
          OK
        </Button>,
      ]}
    >
      <Row>
        <Col className="gutter-row" span={24}>
        <TrophyOutlined /> Player {props.winner} won!
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>&nbsp;
        </Col>
      </Row>
    </Modal>
  );
};

GameFinishedModal.propTypes = {
  okHandler: PropTypes.func,
  visible: PropTypes.bool,
  winner: PropTypes.string,
  /*
  players: PropTypes.array,
  startGameHander: PropTypes.func,
  okHandler: PropTypes.func,
  reConnectHandler: PropTypes.func,*/
};

export default GameFinishedModal;
