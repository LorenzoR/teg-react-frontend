import React from 'react';
import PropTypes from 'prop-types';

import { Timeline } from 'antd';

const getColorByActivityType = (activityType) => {
  return 'blue';
}

const formatTimestamp = (timestamp) => {
  return timestamp;
}

const ActivityTab = (props) => {
  return (
    <Timeline>
      {props.eventsLog.map((activity) => {
        return (
          <Timeline.Item color={getColorByActivityType(activity.type)}>
            [{formatTimestamp(activity.time)}] {activity.text}
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
