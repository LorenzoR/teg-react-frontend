import React from "react";
import PropTypes from "prop-types";

import { Card, Avatar, Tooltip } from "antd";

import { UserOutlined, DisconnectOutlined } from "@ant-design/icons";

const players = (props: any) => {
    const players = props.players.map((player: any, index: number) => {
        const playerName = props.currentPlayerIndex === index ? <strong>{player.name}</strong> : player.name;
        const playerStatus = player.playerStatus === 'offline' ? <Tooltip title="Offline"><DisconnectOutlined /></Tooltip> : 'OK';

        return (
            <p key={player.name}>
                <Avatar style={{ backgroundColor: player.color }} icon={<UserOutlined />} />
                &nbsp; {playerName}
                &nbsp; {playerStatus}
            </p>
        );
    });

    return (
        <Card size="small" title="Players" headStyle={props.headStyle}>
            {players}
        </Card>
    );
};

players.propTypes = {
    players: PropTypes.array,
    headStyle: PropTypes.object,
    currentPlayerIndex: PropTypes.number,
};

export default players;
