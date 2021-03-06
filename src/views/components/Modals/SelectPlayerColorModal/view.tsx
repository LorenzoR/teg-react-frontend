import React, { useState } from 'react';
import _ from 'lodash';

import { Modal, Button, Popconfirm } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Radio } from 'antd';
import { Input, Spin, Alert } from 'antd';
import Player, { PlayerTypes } from 'src/models/Player';
import { RequestJoinGame, RequestStartGame } from 'src/ops/game/actions';

export interface Props {
    visible: boolean;
    gameStatus: string;
    players: Player[]
    currentPlayer?: Player;
    spinnerVisible: boolean;

    startGameHander: (payload: RequestStartGame['payload']) => void;
    joinGameHandler: (payload: RequestJoinGame['payload']) => void;
    reConnectHandler: () => void;
}

const AVAILABLE = 'Available';

const SelectPlayerColorModal = (props: Props) => {
    const [username, setUsername] = useState('');
    const [color, setColor] = useState<string>('');
    const [userSubmitted, setUserSubmitted] = useState(false);

    const handleCancel = (event: any) => {
        console.log(event);
        /*
        this.setState({
          visible: false,
        });
        */
    };

    const colorClicked = (color: string) => {
        setColor(color);

        // Check if there was a player with that color already
        const player = _.find(players, (o) => o.color === color.toLowerCase());

        if (player && player.name) {
            setUsername(player.name);
            // setUserSubmitted(true)
        }
    }

    const joinGame = () => {
        console.log('join!');
        setUserSubmitted(true);
        props.joinGameHandler({ username, color });
        // props.reConnectHandler(color);
    }

    const players = [...props.players];

    const black = _.find(players, (o) => o.color === 'black');
    const red = _.find(players, (o) => o.color === 'red');
    const blue = _.find(players, (o) => o.color === 'blue');
    const yellow = _.find(players, (o) => o.color === 'yellow');
    const green = _.find(players, (o) => o.color === 'green');
    const pink = _.find(players, (o) => o.color === 'pink');

    /*
    const playersButtons = {
      black: _.find(players, (o) => o.color === 'black'),
      red: _.find(players, (o) => o.color === 'red'),
      blue: _.find(players, (o) => o.color === 'blue'),
      yellow: _.find(players, (o) => o.color === 'yellow'),
      green: _.find(players, (o) => o.color === 'green'),
      pink: _.find(players, (o) => o.color === 'pink'),
    };
    */

    const radioButtonNames = {
        black: black ? black.name : AVAILABLE,
        red: red ? red.name : AVAILABLE,
        blue: blue ? blue.name : AVAILABLE,
        yellow: yellow ? yellow.name : AVAILABLE,
        green: green ? green.name : AVAILABLE,
        pink: pink ? pink.name : AVAILABLE,
    };

    const buttonsDisabled: { [key: string]: any } = {
        black: (black && black.playerStatus === 'online') || userSubmitted,
        red: (red && red.playerStatus === 'online') || userSubmitted,
        blue: (blue && blue.playerStatus === 'online') || userSubmitted,
        yellow: (yellow && yellow.playerStatus === 'online') || userSubmitted,
        green: (green && green.playerStatus === 'online') || userSubmitted,
        pink: (pink && pink.playerStatus === 'online') || userSubmitted,
    };

    console.log('PROPS', props);

    // If game has started only enable the players that went offline
    if (props.gameStatus === 'started') {
        console.log('GAME STARTED');
        console.log(buttonsDisabled);
        _.forIn(buttonsDisabled, (value, key) => {
            const player = _.find(props.players, (obj) => obj.color === key);

            if (player && player.playerStatus !== 'online') {
                buttonsDisabled[key] = false;
            } else {
                buttonsDisabled[key] = true;
            }
        });
        console.log(buttonsDisabled);
    }

    const footerButtons = [
        <Button
            key="joinGame"
            type="primary"
            onClick={() => joinGame()}
            disabled={username === '' || color === null || userSubmitted}
        >
            Join Game
    </Button>,
    ];

    // Add Start Game button
    if (true || !props.gameStatus || props.gameStatus !== 'started') {
        footerButtons.push(
            <Popconfirm
                key="popconfirm"
                placement="bottom"
                title={`Are you sure you want to start the game with ${props.players.length} players?`}
                onConfirm={() => props.startGameHander({})}
                okText="Yes"
                cancelText="No"
            >
                <Button
                    key="startGame"
                    type="primary"
                    disabled={
                        !username || username === '' || !color || props.players.length < 2
                    }
                >
                    Start game
      </Button>
            </Popconfirm>
        );
    }

    const isAdmin = !!props.currentPlayer && props.currentPlayer.isAdmin;

    if (!isAdmin) {
        console.log('IS not ADMIN!');
        footerButtons.pop();
    }

    return (
        <Modal
            title="Choose color"
            visible={props.visible}
            // onOk={() => props.okHandler(username, color)}
            onOk={() => console.log('ok')}
            onCancel={handleCancel}
            closable={false}
            maskClosable={false}
            okButtonProps={{ disabled: !username || username === '' || !color }}
            footer={footerButtons}
            width="40%"
        >
            <Spin spinning={props.spinnerVisible}>
                <Row style={{ textAlign: 'center' }}>
                    <Col className="gutter-row" span={12}>
                        <Radio.Button
                            onClick={() => colorClicked(PlayerTypes.BLACK)}
                            disabled={buttonsDisabled.black}
                            checked={color === PlayerTypes.BLACK}
                            style={{ background: 'black', color: 'white', minWidth: '70%' }}
                        >
                            {radioButtonNames.black}
                        </Radio.Button>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Radio.Button
                            onClick={() => colorClicked(PlayerTypes.PINK)}
                            disabled={buttonsDisabled.pink}
                            checked={color === PlayerTypes.PINK}
                            style={{ background: 'pink', minWidth: '70%' }}
                        >
                            {radioButtonNames.pink}
                        </Radio.Button>
                    </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                    <Col className="gutter-row" span={12}>
                        <Radio.Button
                            onClick={() => colorClicked(PlayerTypes.GREEN)}
                            disabled={buttonsDisabled.green}
                            checked={color === PlayerTypes.GREEN}
                            style={{ background: 'green', minWidth: '70%' }}
                        >
                            {radioButtonNames.green}
                        </Radio.Button>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Radio.Button
                            onClick={() => colorClicked(PlayerTypes.RED)}
                            disabled={buttonsDisabled.red}
                            checked={color === PlayerTypes.RED}
                            style={{ background: 'red', minWidth: '70%' }}
                        >
                            {radioButtonNames.red}
                        </Radio.Button>
                    </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                    <Col className="gutter-row" span={12}>
                        <Radio.Button
                            onClick={() => colorClicked(PlayerTypes.BLUE)}
                            disabled={buttonsDisabled.blue}
                            checked={color === PlayerTypes.BLUE}
                            style={{ background: 'blue', minWidth: '70%' }}
                        >
                            {radioButtonNames.blue}
                        </Radio.Button>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Radio.Button
                            onClick={() => colorClicked(PlayerTypes.YELLOW)}
                            disabled={buttonsDisabled.yellow}
                            checked={color === PlayerTypes.YELLOW}
                            style={{ background: 'yellow', minWidth: '70%' }}
                        >
                            {radioButtonNames.yellow}
                        </Radio.Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={24}>
                        <Input
                            placeholder="Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={userSubmitted || props.gameStatus === 'started'}
                            maxLength={20}
                        />
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={24}>
                        <Alert message="Invite Link" description={window.location.href} type="info" />
                    </Col>
                </Row>
            </Spin>
        </Modal>
    );
};

export default SelectPlayerColorModal;
