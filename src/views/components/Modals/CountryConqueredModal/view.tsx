import React from 'react';

import { Modal, Button } from 'antd';
import { RequestMoveTroops } from 'src/ops/game/actions';

export interface Props {
    title: string;
    troops: number;
    countryConqueredModalVisible: boolean;

    moveTroopsHandler: (payload: RequestMoveTroops['payload']) => void;
}

const countryConqueredModal = (props: Props) => {
    return (
        <Modal
            visible={props.countryConqueredModalVisible}
            maskClosable={false}
            closable={false}
            title={props.title}
            footer={[
                <Button
                    key="move_1"
                    type="primary"
                    onClick={() => props.moveTroopsHandler({ count: 0, countryConquered: true })}
                >
                    1
                </Button>,
                <Button
                    key="move_2"
                    type="primary"
                    onClick={() => props.moveTroopsHandler({ count: 1, countryConquered: true })}
                    disabled={props.troops < 2}
                >
                    2
                </Button>,
                <Button
                    key="move_3"
                    type="primary"
                    onClick={() => props.moveTroopsHandler({ count: 2, countryConquered: true })}
                    disabled={props.troops < 3}
                >
                    3
                </Button>,
            ]}
        >
            <p>How many troops would you like to move?</p>
        </Modal>
    );
};

export default countryConqueredModal;
