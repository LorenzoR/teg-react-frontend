import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, CreditCardOutlined } from '@ant-design/icons';

import Country from '../../../models/Country';
import RoundType from '../../../models/Round';

const MoveTroopsRoundButtons = (props) => {
    if (!props.players || props.players.length === 0 || !props.round) {
        return <div></div>;
    }
    
    let canAddTroops = false;

    const source = _.find(props.countries, { countryKey: props.countrySelection.source});
    // const target = _.find(props.countries, { countryKey: props.countrySelection.target});
    const currentPlayer = _.find(
        props.players,
        (obj) => obj.id === props.currentPlayerId,
    );

    if (props.countrySelection.source) {
        const continent = Country.getCountryContinent(props.countrySelection.source);
        canAddTroops = currentPlayer.troopsToAdd
        && (currentPlayer.troopsToAdd.free || currentPlayer.troopsToAdd[continent]);
    }
    const canRemoveTroops = props.countrySelection.source && source.state.newTroops;

    return (
        <>
            <Tooltip title="Add Troops">
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusCircleOutlined />}
                    style={{ marginRight: '4px'}}
                    disabled={!canAddTroops}
                    onClick={() => props.addTroopsHandler(props.countrySelection.source)}
                >
                    Add Troops
                </Button>
            </Tooltip>
            <Tooltip title="Remove Troops">
                <Button
                    type="primary"
                    shape="round"
                    icon={<MinusCircleOutlined />}
                    style={{ marginRight: '4px'}}
                    disabled={!canRemoveTroops}
                    onClick={() => props.removeTroopsHandler(props.countrySelection.source)}
                >
                    Remove Troops
                </Button>
            </Tooltip>
            <Tooltip title="Get Card">
            <Button
                type="primary"
                shape="round"
                icon={<CreditCardOutlined />}
                onClick={() => props.getCountryCardHandler()}
                disabled={
                    !props.round
                    || props.round.type === RoundType.ADD_TROOPS
                    || !props.players[props.round.playerIndex].canGetCard
                }
            >
                Get Card
            </Button>
            </Tooltip>
        </>
    )
};

MoveTroopsRoundButtons.propTypes = {
    addTroopsHandler: PropTypes.func,
    removeTroopsHandler: PropTypes.func,
    round: PropTypes.object,
    currentPlayerId: PropTypes.string,
    players: PropTypes.array,
    countrySelection: PropTypes.object,
    countries: PropTypes.array,
};

export default MoveTroopsRoundButtons;
