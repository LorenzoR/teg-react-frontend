import React from 'react';

import { Tabs } from 'antd';
import { Badge } from 'antd';

import Player from 'src/models/Player';

import MapTab from './MapTab';
import PlayerCardsTab from './PlayerCardsTab';
import ActivityTab from './ActivityTab';
import ChatMessagesTab from './ChatMessagesTab';
import MissionTab from './MissionTab';
import Country from 'src/models/Country';

const { TabPane } = Tabs;

export interface Props {
    players: Player[];
    chatMessagesUnreadCount: number;
    countries: Country[];
}

const TopTabs = (props: Props) => {
    if (!props.players || props.players.length === 0) {
        return <div></div>;
    }

    const countryList = !props.countries ? "Loading" : <ul>{props.countries.map(o => {
        return <li>{o.name} ({o.state?.player?.color} - {o.state?.troops})</li>
    })}</ul>;

    // const activityStyle = style={{ maxHeight: '200px', overflowY: 'scroll', paddingTop: '5px' }}

    return (
        <div className="card-container" style={{ marginLeft: '5px' }}>
            <Tabs type="card">
                <TabPane tab="Map" key="1">
                    <MapTab />
                </TabPane>
                <TabPane tab="Mission" key="2">
                    <MissionTab />
                </TabPane>
                <TabPane tab="Cards" key="3">
                    <PlayerCardsTab />
                </TabPane>
                <TabPane tab="Countries" key="4">
                    <div>{countryList}</div>
                </TabPane>
                <TabPane
                    tab="Activity"
                    key="5"
                >
                    <ActivityTab />
                </TabPane>
                <TabPane
                    tab={<Badge count={props.chatMessagesUnreadCount} offset={[15, -3]}>Chat</Badge>}
                    key="6"
                >
                    <ChatMessagesTab />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default TopTabs;
