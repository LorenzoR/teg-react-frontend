import React, { useState, useEffect } from 'react';
import { List, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RequestSendChatMessage } from 'src/ops/game/actions';
import { SetUnreadMsgCount } from 'src/state/game/actions';

export interface Props {
    chatMessages: {
        unreadCount: number;
        messages: { title: string, color: string, text: string }[];
    };

    sendChatMessageHandler: (payload: RequestSendChatMessage['payload']) => void;
    setUnreadMsgCount: (payoad: SetUnreadMsgCount['payload']) => void;
}

const ChatMessagesTab = (props: Props) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Mark all messages as read
        props.setUnreadMsgCount({ count: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.chatMessages.unreadCount]);

    const submitForm = (event: any) => {
        event.preventDefault();
        props.sendChatMessageHandler({ message });

        // Clear input
        setMessage('');
    };

    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={props.chatMessages.messages}
                renderItem={(item: any) => (
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
            <form id="form-chat-msg" onSubmit={submitForm}>
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <Button type="primary" disabled={!message || message === ''} htmlType="submit" >
                    Send
        </Button>
            </form>
        </div>
    );
};

export default ChatMessagesTab;
