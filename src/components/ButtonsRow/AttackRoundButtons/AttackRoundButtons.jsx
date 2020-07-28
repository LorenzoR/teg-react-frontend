import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Tooltip } from 'antd';
import { ThunderboltOutlined, CreditCardOutlined, LoginOutlined } from '@ant-design/icons';

import RoundType from '../../../models/Round';

const AttackRoundButtons = (props) => {
    if (!props.players || props.players.length === 0 || !props.round) {
        return <div></div>;
    }

    const source = _.find(props.countries, { countryKey: props.countrySelection.source});
    const target = _.find(props.countries, { countryKey: props.countrySelection.target});

    // Check countries are selected, they belong to the same player and source has at least 2 troops
    const canMoveTroops = props.countrySelection.source && props.countrySelection.target
        && source.state.troops > 1
        && source.state.player.color === target.state.player.color;

    return (
        <>
            <Tooltip title="Attack">
                <Button
                    type="primary"
                    shape="round"
                    icon={<ThunderboltOutlined />}
                    style={{ marginRight: '4px'}}
                    onClick={() => props.attackHandler()}
                    disabled={
                        props.round.type !== RoundType.ATTACK ||
                        !props.countrySelection.source ||
                        !props.countrySelection.target
                    }
                >
                    Attack
                </Button>
                </Tooltip>
                <Tooltip title="Move Troops">
                    <Button
                        type="primary"
                        shape="round"
                        icon={<LoginOutlined />}
                        style={{ marginRight: '4px' }}
                        onClick={() => props.moveTroopsHandler(1)}
                        disabled={!canMoveTroops}
                    >
                        Move Troops
                    </Button>
                </Tooltip>
                <Tooltip title="Cards">
                    <Button
                        type="primary"
                        shape="round"
                        icon={<CreditCardOutlined />}
                        onClick={() => props.getCountryCardHandler()}
                        disabled={
                            props.round.type === RoundType.ADD_TROOPS ||
                            !props.players[props.round.playerIndex].canGetCard
                        }
                    >
                        Get Card
                    </Button>
                </Tooltip>
        </>
    )
};

AttackRoundButtons.propTypes = {
    attackHandler: PropTypes.func,
    moveTroopsHandler: PropTypes.func,
    round: PropTypes.object,
    currentPlayerId: PropTypes.string,
    players: PropTypes.array,
    countrySelection: PropTypes.object,
    countries: PropTypes.array,
    getCountryCardHandler: PropTypes.func,
};

export default AttackRoundButtons;
