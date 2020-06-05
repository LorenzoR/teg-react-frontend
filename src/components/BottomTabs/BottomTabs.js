import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Tabs } from 'antd';

import PlayerCardsTab from './PlayerCardsTab/PlayerCardsTab';
import ActivityTab from './ActivityTab/ActivityTab';

const { TabPane } = Tabs;

const bottomTabs = (props) => {
  if (!props.players || props.players.length === 0 ) {
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

  return (
    <div className="card-container" style={{ marginLeft: '5px' }}>
      <Tabs type="card">
        <TabPane tab="Mission" key="1">
          <p>
            {currentPlayer.mission ? currentPlayer.mission.text : 'Loading...'}
          </p>
        </TabPane>
        <TabPane tab="Cards" key="2">
          <PlayerCardsTab
            cards={currentPlayer.cards}
            changeCardHandler={props.changeCardHandler}
            changeCardsHandler={props.changeCardsHandler}
          />
        </TabPane>
        <TabPane tab="Countries" key="3">
          {countryList}
        </TabPane>
        <TabPane tab="Activity" key="4">
          <ActivityTab activity={props.activity} />
        </TabPane>
      </Tabs>
    </div>
  );
};

bottomTabs.propTypes = {
  players: PropTypes.array,
  currentPlayerId: PropTypes.string,
  activity: PropTypes.array,
  changeCardsHandler: PropTypes.func,
};

export default bottomTabs;
