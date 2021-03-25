import React from 'react';

import moment from 'moment';
import { Timeline } from 'antd';
import { EventLog } from 'src/models/EventLog';

const DATE_TIME_FORMAT = 'DD-MM-YYYY HH:mm:ss';

const getColorByActivityType = (playerColor: EventLog["playerColor"]) => {
  return playerColor;
}

const formatTimestamp = (timestamp: EventLog["time"]) => {
  return moment(timestamp).format(DATE_TIME_FORMAT);
}

interface Props {
    eventsLog: EventLog[];
}

const ActivityTab = (props: Props) => {
  return (
    <Timeline>
      {props.eventsLog.map((activity: EventLog, index: number) => {
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

export default ActivityTab;
