import React from 'react';
import _ from 'lodash';
import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, CreditCardOutlined } from '@ant-design/icons';

import { RemoveCountryTroops } from 'src/state/game/actions';
import { RequestAddTroops } from 'src/ops/game/actions';
import CountryService from 'src/services/game/countryService';

export interface Props {
    round: any;
    currentPlayerId: string;
    players: any[];
    countrySelection: any;
    countries: any[];

    addTroopsHandler: (payload: RequestAddTroops['payload']) => void;
    removeTroopsHandler: (payload: RemoveCountryTroops['payload']) => void;
    countryCardsModalHandler: () => void;
}

const MoveTroopsRoundButtons = (props: Props) => {
    debugger;
    if (!props.players || props.players.length === 0 || !props.round) {
        return <div></div>;
    }

    if (!props.currentPlayerId) {
        return <div></div>;
    }
    
    let canAddTroops = false;

    const source = _.find(props.countries, { countryKey: props.countrySelection.source});
    const currentPlayer = _.find(
        props.players,
        (obj) => obj.id === props.currentPlayerId,
    );

    if (props.countrySelection.source) {
        const continent = CountryService.getCountryContinent(props.countrySelection.source);
        canAddTroops = currentPlayer?.troopsToAdd
        && (currentPlayer?.troopsToAdd.free || (continent && currentPlayer?.troopsToAdd[continent]));
    }
    const canRemoveTroops = props.countrySelection.source && source?.state.newTroops;

    const addTroops = () => {
        props.addTroopsHandler({
            countryKey: props.countrySelection.source,
            troops: 1,
            playerColor: currentPlayer.color,
        });
    }

    const removeTroops = () => {
        props.removeTroopsHandler({ countryKey: props.countrySelection.source, troops: 1 })
    }

    return (
        <>
            <Tooltip title="Add Troops">
                <Button
                    type="primary"
                    shape="round"
                    icon={<PlusCircleOutlined />}
                    style={{ marginRight: '4px'}}
                    disabled={!canAddTroops}
                    onClick={() => addTroops()}
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
                    onClick={() => removeTroops()}
                >
                    Remove Troops
                </Button>
            </Tooltip>
            <Tooltip title="Cards">
            <Button
                type="primary"
                shape="round"
                icon={<CreditCardOutlined />}
                onClick={() => props.countryCardsModalHandler()}
            >
                My Cards
            </Button>
            </Tooltip>
        </>
    )
};

/*
MoveTroopsRoundButtons.propTypes = {
    addTroopsHandler: PropTypes.func,
    removeTroopsHandler: PropTypes.func,
    round: PropTypes.object,
    currentPlayerId: PropTypes.string,
    players: PropTypes.array,
    countrySelection: PropTypes.object,
    countries: PropTypes.array,
    countryCardsModalHandler: PropTypes.func,
};
*/

export default MoveTroopsRoundButtons;
