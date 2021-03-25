import React from 'react';
import _ from 'lodash';

import { Layout } from 'antd';
import { Card, Spin } from 'antd';

import DicesRow from '../../DicesRow/DicesRow';

import UserInfo from '../../UserInfo/UserInfo';
import Players from '../Players/Players';
import { Dices } from 'src/models/Dices';
import Player from 'src/models/Player';
import { Round } from 'src/models/Round';
import Country from 'src/models/Country';

const { Sider } = Layout;

export interface Props {
    dices: Dices;
    currentPlayer?: Player;
    players: Player[];
    round: Round;
    countrySelection: {
        source: string,
        target: string,
    };
    countries: Country[];
    spinnerVisible: boolean;
    isAttacking: boolean;
    gameStatus: string;
    currentPlayerId: string;
}

const GameSider = (props: Props) => {
    if (!props.players || props.players.length === 0 || !props.round || props.gameStatus !== 'started') {
        return <div></div>;
    }

    // Card Head style
    const cardHeadStyle: React.CSSProperties = {
        fontWeight: 'bold',
        backgroundColor: 'lightblue'
    };

    const currentPlayer = _.find(
        props.players,
        (obj) => obj.id === props.currentPlayerId,
    );

    if (!currentPlayer?.color) {
        return <div>Loading...</div>;
    }

    // Count player countries
    let playerCountries = 0;

    if (props.countries && currentPlayer) {
        props.countries.forEach((country) => {
            if (country?.state?.player?.color === currentPlayer?.color) {
                playerCountries += 1;
            }
        });
    }

    return (
        <Sider style={{ color: 'white', marginTop: '104px' }}>
            <Card size="small" title="Country Selection" headStyle={cardHeadStyle}>
                <Spin spinning={props.spinnerVisible}>
                    <p>From: {props.countrySelection.source}</p>
                    <p>To: {props.countrySelection.target}</p>
                </Spin>
                <DicesRow dices={props.dices} attacking={props.isAttacking} />
            </Card>
            <Players
                players={props.players}
                headStyle={cardHeadStyle}
                currentPlayerIndex={props.round.playerIndex}
            />
            <UserInfo
                player={currentPlayer}
                headStyle={cardHeadStyle}
                countriesCount={playerCountries}
            />
        </Sider>
    );
};

export default GameSider;
