import React from 'react';
import _ from 'lodash';
import { Button, Tooltip } from 'antd';
import { ThunderboltOutlined, CreditCardOutlined, LoginOutlined } from '@ant-design/icons';

import RoundType, { Round } from 'src/models/Round';
import { RequestMoveTroops } from 'src/ops/game/actions';
import Player from 'src/models/Player';
import Country from 'src/models/Country';

export interface Props {
    round: Round;
    currentPlayerId: string;
    players: Player[];
    countrySelection: { source: string; target: string; };
    countries: Country[];

    attackHandler: () => void;
    moveTroopsHandler: (payload: RequestMoveTroops['payload']) => void;
    requestGetCountryCard: () => void;
    countryCardsModalHandler: () => void;
}

const AttackRoundButtons = (props: Props) => {
    if (!props.players || props.players.length === 0 || !props.round) {
        return <div></div>;
    }

    const source = _.find(props.countries, { countryKey: props.countrySelection.source });
    const target = _.find(props.countries, { countryKey: props.countrySelection.target });

    // Check countries are selected, they belong to the same player and source has at least 2 troops
    const canMoveTroops = props.countrySelection.source && props.countrySelection.target && source && target
        && source.state.troops > 1
        && source.state.player?.color === target.state.player?.color;

    // Check countries are selected, they belong to different players and source has at least 2 troops
    const canAttack = props.round.type === RoundType.ATTACK && source && target
        && source.state.troops > 1
        && source.state.player?.color !== target.state.player?.color;

    const myCardsButton = (
        <Button
            type="primary"
            shape="round"
            icon={<CreditCardOutlined />}
            onClick={() => props.countryCardsModalHandler()}
        >
            My Cards
        </Button>
    );

    const getCardButton = (
        <Button
            type="primary"
            shape="round"
            icon={<CreditCardOutlined />}
            onClick={() => props.requestGetCountryCard()}
            disabled={
                props.round.type === RoundType.ADD_TROOPS ||
                !props.players[props.round.playerIndex].canGetCard
            }
        >
            Get Card
        </Button>
    );

    const cardButton = props.round.type === RoundType.GET_CARD ? myCardsButton : getCardButton;

    return (
        <>
            <Tooltip title="Attack">
                <Button
                    type="primary"
                    shape="round"
                    icon={<ThunderboltOutlined />}
                    style={{ marginRight: '4px' }}
                    onClick={() => props.attackHandler()}
                    disabled={!canAttack}
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
                    onClick={() => props.moveTroopsHandler({ count: 1, countryConquered: false })}
                    disabled={!canMoveTroops}
                >
                    Move Troops
                    </Button>
            </Tooltip>
            <Tooltip title="Cards">
                {cardButton}
            </Tooltip>
        </>
    )
};

export default AttackRoundButtons;
