import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'antd';
import { Row, Col, Divider } from 'antd';

import {
  TrophyOutlined,
} from '@ant-design/icons';

const GameFinishedModal = (props: any) => {
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
};

export default GameFinishedModal;
