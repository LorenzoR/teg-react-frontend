import React from 'react';
import _ from 'lodash';

import { Tabs } from 'antd';
import { Alert } from 'antd';
import { Badge } from 'antd';

import Player from 'src/models/Player';

import PlayerCardsTab from './PlayerCardsTab/PlayerCardsTab';
import ActivityTab from './ActivityTab/ActivityTab';
import ChatMessagesTab from './ChatMessagesTab/ChatMessagesTab';

const { TabPane } = Tabs;

interface ChatMessage {
  messages: [];
  unreadCount: number;
}

interface Props {
  players: Player[];
  currentPlayerId: string;
  eventsLog: [];
  chatMessages: ChatMessage;
  countries: [];
  changeCardHandler: () => void;
  changeCardsHandler: () => void;
  sendChatMessageHandler: () => void;
  markChatMessagesAsReadHandler: () => void;
}

const bottomTabs = (props: Props) => {
  if (!props.players || props.players.length === 0) {
    return <div></div>;
  }

  const countryList = <div>Countries...</div>;

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
          <PlayerCardsTab
            currentPlayer={currentPlayer}
            changeCardHandler={props.changeCardHandler}
            changeCardsHandler={props.changeCardsHandler}
            countries={props.countries}
          />
        </TabPane>
        <TabPane tab="Countries" key="3">
          {countryList}
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
          key="5" >
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
