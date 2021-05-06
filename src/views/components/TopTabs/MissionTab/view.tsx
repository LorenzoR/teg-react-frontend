import React from 'react';
import _ from 'lodash';
import { Alert } from 'antd';
import Player from 'src/models/Player';

export interface Props {
    players: Player[];
    currentPlayerId: string;
}

const MissionTab = (props: Props) => {
    const currentPlayer = _.find(
        props.players,
        (obj) => obj.id === props.currentPlayerId,
    );

    if (!currentPlayer) {
        return <div></div>;
    }

    const missionText = currentPlayer.mission ? currentPlayer.mission.text : 'Loading...';

    return (
        <>
            <h3>Your mission</h3>
            <Alert message={missionText} type="info" style={{ width: '50%' }} />
            <h3>List of Missions</h3>
        </>
    );
};

export default MissionTab;
