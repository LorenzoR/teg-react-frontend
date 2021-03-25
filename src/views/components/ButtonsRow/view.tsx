import React from 'react';
import { Row, Col, Spin } from 'antd';
import AttackRoundButtons from './AttackRoundButtons';
import MoveTroopsRoundButtons from './MoveTroopsRoundButtons';
import RoundType, { Round } from 'src/models/Round';
import Player from 'src/models/Player';
import Country from 'src/models/Country';

export interface Props {
    round: Round;
    currentPlayerId: string;
    players: Player[];
    countrySelection: {};
    countries: Country[];
    spinnerVisible: boolean;
    attackHandler: () => void;
    moveTroopsHandler: () => void;
    getCountryCardHandler: () => void;
}

const ButtonsRow = (props: Props) => {
    if (!props.round) {
        return null;
    }

    let buttons;

    if ([
        RoundType.ATTACK,
        RoundType.MOVE_TROOPS,
        RoundType.GET_CARD,
    ].includes(props.round.type)) {
        buttons = (
            <AttackRoundButtons />
        );
    } else {
        buttons = (
            <MoveTroopsRoundButtons />
        );
    }

    return (
        <Row>
            <Col span={24}>
                <div style={{ textAlign: 'left', padding: '5px', position: 'fixed', zIndex: 1, width: '100%' , background: '#f0f2f5'}}>
                    <Spin spinning={props.spinnerVisible}>
                        {buttons}
                    </Spin>
                </div>
            </Col>
        </Row>
    )
}

export default ButtonsRow;
