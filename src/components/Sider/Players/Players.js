import React from "react";
import PropTypes from "prop-types";

import { Card, Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";

const players = (props) => {
  const players = props.players.map((player, index) => {
    const playerName = props.currentPlayerIndex === index ? <strong>{player.name}</strong> : player.name;

    return (
      <p>
        <Avatar style={{ backgroundColor: player.color }} icon={<UserOutlined />} />
        &nbsp; {playerName}
      </p>
    );
  });

  return (
    <Card size="small" title="Players" headStyle={props.headStyle}>
      {players}
    </Card>
  );
};

players.propTypes = {};

export default players;
