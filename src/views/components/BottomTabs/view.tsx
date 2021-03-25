import React from 'react';
import _ from 'lodash';

import { Tabs } from 'antd';
import { Alert } from 'antd';
import { Badge } from 'antd';

import Player from 'src/models/Player';

import PlayerCardsTab from './PlayerCardsTab';
import ActivityTab from './ActivityTab/ActivityTab';
import ChatMessagesTab from './ChatMessagesTab/ChatMessagesTab';
import Country from 'src/models/Country';
import { RequestSendChatMessage } from 'src/ops/game/actions';
import { EventLog } from 'src/models/EventLog';

const { TabPane } = Tabs;

interface ChatMessage {
    messages: { title: string, color: string, text: string }[];
    unreadCount: number;
}

export interface Props {
    players: Player[];
    currentPlayerId: string;
    eventsLog: EventLog[];
    chatMessages: ChatMessage;
    countries: Country[];

    sendChatMessageHandler: (payload: RequestSendChatMessage["payload"]) => void;
    markChatMessagesAsReadHandler: () => void;
}

const bottomTabs = (props: Props) => {
    if (!props.players || props.players.length === 0) {
        return <div></div>;
    }

    const countryList = !props.countries ? "Loading" : <ul>{props.countries.map(o => {
        return <li>{o.name} ({o.state?.player?.color} - {o.state?.troops})</li>
    })}</ul>;

    const currentPlayer = _.find(
        props.players,
        (obj) => obj.id === props.currentPlayerId,
    );

    if (!currentPlayer) {
        return <div></div>;
    }

    const missionText = currentPlayer.mission ? currentPlayer.mission.text : 'Loading...';

    return (
        <div className="card-container" style={{ marginLeft: '5px' }}>
            <Tabs type="card">
                <TabPane tab="Mission" key="1">
                    <Alert message={missionText} type="info" style={{ width: '50%' }} />
                </TabPane>
                <TabPane tab="Cards" key="2">
                    <PlayerCardsTab />
                </TabPane>
                <TabPane tab="Countries" key="3">
                    <div>{countryList}</div>
                </TabPane>
                <TabPane
                    tab="Activity"
                    key="4"
                    style={{ maxHeight: '200px', overflowY: 'scroll', paddingTop: '5px' }}
                >
                    <ActivityTab eventsLog={props.eventsLog} />
                </TabPane>
                <TabPane
                    tab={<Badge count={props.chatMessages.unreadCount} offset={[15, -3]}>Chat</Badge>}
                    key="5"
                >
                    <ChatMessagesTab
                        messages={props.chatMessages.messages}
                        sendChatMessageHandler={props.sendChatMessageHandler}
                        markChatMessagesAsReadHandler={props.markChatMessagesAsReadHandler} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default bottomTabs;
