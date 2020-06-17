import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { List, Avatar, Button } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const ChatMessagesTab = (props) => {
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    props.sendChatMessageHandler(message);

    // Clear input
    setMessage('');
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // Mark all messages as read
  props.markChatMessagesAsReadHandler();

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.messages}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{ backgroundColor: item.color }}
                  icon={<UserOutlined />}
                />
              }
              title={item.title}
              description={item.text}
            />
          </List.Item>
        )}
        style={{ height: '200px', overflowY: 'scroll', paddingTop: '5px' }}
      />
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          autoComplete="off"
        />
        <Button type="primary" disabled={!message || message === ''} >
          Send
        </Button>
      </form>
    </div>
  );
};

ChatMessagesTab.propTypes = {
  messages: PropTypes.array,
  sendChatMessageHandler: PropTypes.func,
  markChatMessagesAsReadHandler: PropTypes.func,
};

export default ChatMessagesTab;
