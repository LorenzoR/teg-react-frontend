import React from 'react';
import PropTypes from 'prop-types';

import { Timeline } from 'antd';

const ActivityTab = (props) => {
  return (
    <Timeline>
      {props.activity.map((activity) => {
        return (
          <Timeline.Item color={activity.type}>
            [{activity.time}] {activity.text}
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};

ActivityTab.propTypes = {
  activity: PropTypes.array,
};

export default ActivityTab;
