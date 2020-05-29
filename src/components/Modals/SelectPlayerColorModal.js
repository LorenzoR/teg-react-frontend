import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Modal, Button, Popconfirm } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Radio } from 'antd';
import { Input } from 'antd';

const AVAILABLE = 'Available';

const SelectPlayerColorModal = (props) => {
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
  }

  const players = [ ...props.players ];

  const black = _.find(players, (o) => o.color === 'black');
  const red = _.find(players, (o) => o.color === 'red');
  const blue = _.find(players, (o) => o.color === 'blue');
  const yellow = _.find(players, (o) => o.color === 'yellow');
  const green = _.find(players, (o) => o.color === 'green');
  const pink = _.find(players, (o) => o.color === 'pink');

  return (
    <Modal
      title="Choose color"
      visible={props.visible}
      onOk={() => props.okHandler(username, color)}
      onCancel={handleCancel}
      closable={false}
      maskClosable={false}
      okButtonProps={{ disabled: !username || username === '' || !color }}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={pickColor}
          disabled={userSubmitted}
        >
          Pick color
        </Button>,
        <Popconfirm
          placement="bottom"
          title={`Are you sure you want to start the game with ${props.players.length} players?`}
          onConfirm={() => props.startGameHander()}
          okText="Yes"
          cancelText="No"
        >
          <Button
            key="submit"
            type="primary"
            disabled={!username || username === '' || !color || props.players.length < 2}
          >
            Start game
          </Button>
        </Popconfirm>,
      ]}
    >
      <Row>
        <Col className="gutter-row" span={12}>
          Black <Radio.Button
              onClick={() => setColor('BLACK')} disabled={black || userSubmitted} checked={color === 'BLACK'}
              style={{ background: 'black' }}>
            {black ? black.name : AVAILABLE}
          </Radio.Button>
          <br />
          Pink <Radio.Button onClick={() => setColor('PINK')} disabled={pink || userSubmitted} checked={color === 'PINK'}
          style={{ background: 'pink' }}>
            {pink ? pink.name : AVAILABLE}
            </Radio.Button>
          <br />
          Red <Radio onClick={() => setColor('RED')} disabled={red || userSubmitted} checked={color === 'RED'}>
            {red ? red.name : AVAILABLE}
            </Radio>
        </Col>
        <Col className="gutter-row" span={12}>
          Blue <Radio onClick={() => setColor('BLUE')} disabled={blue || userSubmitted} checked={color === 'BLUE'}>
            {blue ? blue.name : AVAILABLE}
            </Radio>
          <br />
          Yellow <Radio onClick={() => setColor('YELLOW')} disabled={yellow || userSubmitted} checked={color === 'YELLOW'}>
            {yellow ? yellow.name : AVAILABLE}
            </Radio>
          <br />
          Green <Radio onClick={() => setColor('GREEN')} disabled={green || userSubmitted} checked={color === 'GREEN'}>
            {green ? green.name : AVAILABLE}
            </Radio>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Input
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
            disabled={userSubmitted}
          />
        </Col>
      </Row>
    </Modal>
  );
};

SelectPlayerColorModal.propTypes = {};

export default SelectPlayerColorModal;
