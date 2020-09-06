import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { Timeline } from 'antd';

const DATE_TIME_FORMAT = 'DD-MM-YYYY HH:mm:ss';

const getColorByActivityType = (playerColor: any) => {
  return playerColor;
}

const formatTimestamp = (timestamp: any) => {
  return moment(timestamp).format(DATE_TIME_FORMAT);
}

const ActivityTab = (props: any) => {
  return (
    <Timeline>
      {props.eventsLog.map((activity: any, index: number) => {
        const rowClass = index % 2 === 0 ? 'oddRow' : 'evenRow';
        return (
          <Timeline.Item color={getColorByActivityType(activity.playerColor)}>
            <span key={activity.time} className={rowClass}>
              <strong>[{formatTimestamp(activity.time)}]</strong> {activity.text}
            </span>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};

ActivityTab.propTypes = {
  eventsLog: PropTypes.array,
};

export default ActivityTab;