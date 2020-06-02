import React from 'react';
import PropTypes from 'prop-types';

import { Card, Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const userInfo = (props) => {
  const title = (
    <span>
      <Avatar
        style={{ backgroundColor: props.player.color }}
        icon={<UserOutlined />}
      />
      &nbsp; {props.player.name}
    </span>
  );

  return (
    <Card size="small" title={title} headStyle={props.headStyle}>
      <p>
        <strong>Countries: </strong>10
      </p>
      <p>
        <strong>Troops to add: </strong>
        {props.player.troopsToAdd}
      </p>
    </Card>
  );
};

userInfo.propTypes = {};

export default userInfo;
