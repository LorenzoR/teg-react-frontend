import React from 'react';

import { Modal, Button } from 'antd';
import { Row, Col, Divider } from 'antd';

import { TrophyOutlined } from '@ant-design/icons';

export interface Props {
    visible: boolean;
    winner: string;

    // okHandler: () => void;
}

const GameFinishedModal = (props: Props) => {
    return (
        <Modal
            title="Game finished!"
            visible={props.visible}
            onOk={() => console.log('OK')}
            closable={false}
            maskClosable={false}
            footer={[
                <Button
                    key="ok"
                    type="primary"
                    onClick={() => console.log('OK')}
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
                <Col span={24}>&nbsp;</Col>
            </Row>
        </Modal>
    );
};

export default GameFinishedModal;
