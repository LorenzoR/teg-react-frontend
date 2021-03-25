import React from 'react';
import PropTypes from 'prop-types';

import { Card, Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import { ContinentTypes } from 'src/models/Continent';

const userInfo = (props: any) => {
    if (!props.player) {
        return <div></div>;
    }

    const title = (
        <span>
            <Avatar
                style={{ backgroundColor: props.player.color }}
                icon={<UserOutlined />}
            />
            &nbsp; {props.player.name}
        </span>
    );

    const troopsToAdd = [];

    troopsToAdd.push(<p key={'troops_to_add'}><strong>Troops to add: </strong>{props.player.troopsToAdd.free}</p>);

    if (props.player.troopsToAdd.ASIA > 0) {
        troopsToAdd.push(<p key={ContinentTypes.ASIA}><strong>Asia: </strong>{props.player.troopsToAdd.ASIA}</p>);
    }

    if (props.player.troopsToAdd.AFRICA > 0) {
        troopsToAdd.push(<p key={ContinentTypes.AFRICA}><strong>Africa: </strong>{props.player.troopsToAdd.AFRICA}</p>);
    }

    if (props.player.troopsToAdd.EUROPE > 0) {
        troopsToAdd.push(<p key={ContinentTypes.EUROPE}><strong>Europe: </strong>{props.player.troopsToAdd.EUROPE}</p>);
    }

    if (props.player.troopsToAdd.NORTH_AMERICA > 0) {
        troopsToAdd.push(<p key={ContinentTypes.NORTH_AMERICA}><strong>North America: </strong>{props.player.troopsToAdd.NORTH_AMERICA}</p>);
    }

    if (props.player.troopsToAdd.OCEANIA > 0) {
        troopsToAdd.push(<p key={ContinentTypes.OCEANIA}><strong>Oceania: </strong>{props.player.troopsToAdd.OCEANIA}</p>);
    }

    if (props.player.troopsToAdd.SOUTH_AMERICA > 0) {
        troopsToAdd.push(<p key={ContinentTypes.SOUTH_AMERICA}><strong>South America: </strong>{props.player.troopsToAdd.SOUTH_AMERICA}</p>);
    }

    return (
        <Card size="small" title={title} headStyle={props.headStyle}>
            <p>
                <strong>Countries: </strong> {props.countriesCount}
            </p>
            <div>
                {troopsToAdd.map((elem) => {
                    return elem;
                })}
            </div>
        </Card>
    );
};

userInfo.propTypes = {
    player: PropTypes.object,
    headStyle: PropTypes.object,
    countriesCount: PropTypes.number,
};

export default userInfo;
