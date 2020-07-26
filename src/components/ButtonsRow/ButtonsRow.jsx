import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Spin } from 'antd';
import AttackRoundButtons from './AttackRoundButtons/AttackRoundButtons';
import MoveTroopsRoundButtons from './MoveTroopsRoundButtons/MoveTroopsRoundButtons';
import RoundType from '../../models/Round';

const ButtonsRow = (props) => {
    if (!props.round) {
        return null;
    }

    let buttons;

    if (props.round.type === RoundType.ATTACK) {
        buttons = (
            <AttackRoundButtons
                attackHandler={props.attackHandler}
                moveTroopsHandler={props.moveTroopsHandler}
                round={props.round}
                currentPlayerId={props.currentPlayerId}
                players={props.players}
                countrySelection={props.countrySelection}
                countries={props.countries}
                getCountryCardHandler={props.getCountryCardHandler}
            />
        );
    } else {
        buttons = (
            <MoveTroopsRoundButtons
                addTroopsHandler={props.addTroopsHandler}
                removeTroopsHandler={props.removeTroopsHandler}
                round={props.round}
                currentPlayerId={props.currentPlayerId}
                players={props.players}
                countrySelection={props.countrySelection}
                countries={props.countries}
            />
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

ButtonsRow.propTypes = {
    attackHandler: PropTypes.func,
    moveTroopsHandler: PropTypes.func,
    addTroopsHandler: PropTypes.func,
    removeTroopsHandler: PropTypes.func,
    round: PropTypes.object,
    currentPlayerId: PropTypes.string,
    players: PropTypes.array,
    countrySelection: PropTypes.object,
    countries: PropTypes.array,
    spinnerVisible: PropTypes.bool,
    getCountryCardHandler: PropTypes.func,
};

export default ButtonsRow;
