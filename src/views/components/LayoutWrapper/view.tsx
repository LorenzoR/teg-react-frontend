import React, { Component } from 'react';
import _ from 'lodash';

import { Layout } from 'antd';
import { notification, Modal } from 'antd';
import { Alert } from 'antd';

import GameHeader from '../Header';

import RoundType, { Round } from 'src/models/Round';

import Player from 'src/models/Player';
import { AddChatMessage, SetCurrentPlayerId, SetEventsLog, SetGameId, SetIsAttacking, SetWinner } from 'src/state/game/actions';
import { SelectCountry } from 'src/ops/country-selection/actions';
import { SetSource, SetTarget } from 'src/state/country-selection/actions';

import WebsocketService from 'src/services/websocket';
import {
    ConnectionIDReceived, CountryAttacked, GameStarted, GameSync, InitGame,
    JoinedGame, PlayersInfoReceived, TroopsMoved,
} from 'src/ops/game/actions';

import { SetChooseColorOpen, SetGameFinishedOpen, SetSpinnerVisible } from 'src/state/modals/actions';
import TopTabs from '../TopTabs';

const { Header, Footer } = Layout;

export interface Props {
    match: {
        params: { gameId: string };
    };
    players: Player[];
    round: Round;
    currentPlayer?: Player;

    initGame: (payload: InitGame['payload']) => void;
    setPlayers: (payload: { players: Player[] }) => void;
    setCountries: (payload: { countries: {}[] }) => void;
    setRound: (payload: { round: Round }) => void;
    setCurrentPlayer: (payload: { currentPlayer: Player }) => void;
    setGameStatus: (payload: { gameStatus: string }) => void;
    setCurrentPlayerId: (payload: SetCurrentPlayerId['payload']) => void;
    selectCountry: (payload: SelectCountry['payload']) => void;
    setSource: (payload: SetSource['payload']) => void;
    setTarget: (payload: SetTarget['payload']) => void;

    setGameId: (payload: SetGameId['payload']) => void;
    playersInfoReceived: (payload: PlayersInfoReceived['payload']) => void;
    joinedGame: (payload: JoinedGame['payload']) => void;

    countryAttacked: (payload: CountryAttacked['payload']) => void;
    troopsMoved: (payload: TroopsMoved['payload']) => void;
    setWinner: (payoad: SetWinner['payload']) => void;

    // Modals
    setChooseColorOpen: (payload: SetChooseColorOpen['payload']) => void;
    setSpinnerVisible: (payload: SetSpinnerVisible['payload']) => void;
    setGameFinishedOpen: (payload: SetGameFinishedOpen['payload']) => void;

    setEventsLog: (payload: SetEventsLog['payload']) => void;
    addChatMessage: (payload: AddChatMessage['payload']) => void;

    setIsAttacking: (payload: SetIsAttacking['payload']) => void;
}

class LayoutWrapper extends Component<Props> {
    componentWillMount() {
        const onMessageActions = {
            joinGame: (body: JoinedGame['payload']) => {
                console.log('join game received!');
                this.props.joinedGame(body);
            },
            gameStarted: (body: GameStarted['payload']) => {
                const { players, countries, round, gameStatus, eventsLog } = body;

                this.props.setEventsLog({ eventsLog });

                this.props.initGame({ round, gameStatus, gameId: gameId || '', countries, players });

                // Show mission
                this.showPlayerMission(players);
            },
            connectionId: (body: ConnectionIDReceived['payload']) => {
                const { connectionId } = body;

                const currentPlayer = _.find(
                    this.props.players,
                    (obj: Player) => obj.id === connectionId,
                );

                this.props.setChooseColorOpen({ isOpen: false });

                this.props.setCurrentPlayerId({ currentPlayerId: connectionId });

                if (currentPlayer) {
                    this.props.setCurrentPlayer({ currentPlayer });
                }

                // Set local storage
                const localStorageKey = `teg-id-${gameId}`;
                const localStorageItem = { connectionId, color: currentPlayer?.color }
                localStorage.setItem(localStorageKey, JSON.stringify(localStorageItem));
                console.log(`Set ${localStorageKey} - ${connectionId}`);

                // Show notification
                if (this.props.currentPlayer && this.props.players[this.props.round.playerIndex].color === this.props.currentPlayer.color) {
                    this.showStartTurnNotifiction(this.props.round.type);
                }
            },
            countryAttacked: (body: any) => {
                const {
                    gameStatus,
                    winner,
                    attacker,
                    defender,
                    dices,
                    players,
                    countryConquered,
                    eventsLog,
                } = body;

                this.props.countryAttacked({
                    gameStatus,
                    winner,
                    attacker,
                    defender,
                    dices,
                    players,
                    countryConquered,
                    eventsLog,
                });

                if (!(winner && gameStatus === 'finished')) {
                    // Show notification
                    notification.info({
                        message: `${attacker.countryKey} attacked ${defender.countryKey}`,
                        description: '',
                        // description: `${dices.attacker.join(' - ')} vs ${dices.defender.join(' - ')}`,
                        placement: 'bottomLeft',
                    });
                }

                // Another player attacked so show animation
                // TODO show attacker and defender
                if (this.props.players[this.props.round.playerIndex].color !== this.props.currentPlayer?.color) {
                    console.log('setIsAttacking true');
                    this.props.setIsAttacking({ isAttacking: true });

                    setTimeout(() => {
                        console.log('setIsAttacking false');
                        this.props.setIsAttacking({ isAttacking: false });
                    }, 2000);
                }

                setTimeout(() => {
                    // Country conquered, show notification
                    if (countryConquered) {
                        notification.info({
                            message: 'Country conquered!',
                            description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                            placement: 'bottomLeft',
                        });
                    }
                }, 1000);
            },
            troopsMoved: (body: any) => {
                const { source, target, round, eventsLog } = body;

                this.props.troopsMoved({ source, target, round, eventsLog });
            },
            roundFinished: (body: any) => {
                const { round, players, gameStatus, winner } = body;

                // Game finished
                if (gameStatus === 'finished' && winner) {
                    console.log('game finished!');
                    this.props.setGameFinishedOpen({ isOpen: true });
                    this.props.setWinner({ winner });
                } else {
                    // Clear selection
                    this.props.setPlayers({ players });
                    this.props.setRound({ round });
                    // Clear selection
                    this.props.setSource({ source: '' });
                    this.props.setTarget({ target: '' });
                }

                // Hide spinner
                this.setMapSpinnerVisibility(false);

                // Show notification
                if (this.props.currentPlayer && players[round.playerIndex].color === this.props.currentPlayer.color) {
                    this.showStartTurnNotifiction(round.type);
                }
            },
            troopsAdded: (body: any) => {
                const { players, countries, eventsLog } = body;

                this.props.setEventsLog({ eventsLog });
                this.props.setCountries({ countries });
                this.props.setPlayers({ players });

                // Hide spinner
                this.setMapSpinnerVisibility(false);
            },
            playerDisconnected: (body: any) => {
                const { players, disconnectedPlayerName } = body;

                this.props.setPlayers({ players });

                // Notification
                notification.info({
                    message: `Player disconnected`,
                    description: `Player ${disconnectedPlayerName} got disconnected`,
                    placement: 'bottomLeft',
                });
            },
            guestDisconnected: (body: any) => {
                const { isAdmin } = body;

                // If it was the admin, cancel game
                if (isAdmin) {
                    this.props.setChooseColorOpen({ isOpen: false });

                    // Error modal
                    Modal.error({
                        title: 'Admin disconnected',
                        content: 'Admin is offline, game is cancelled',
                        onOk: () => console.log('bye!'),
                    });
                }
            },
            sync: (body: GameSync['payload']) => {
                const { players, countries, round, currentPlayerId, eventsLog } = body;

                const currentPlayer = _.find(
                    players,
                    (obj) => obj.id === currentPlayerId,
                );

                this.props.setEventsLog({ eventsLog });

                // TODO. Only for player that chose color
                this.props.setChooseColorOpen({ isOpen: false });
                this.props.setPlayers({ players });
                this.props.setCountries({ countries });
                this.props.setRound({ round });
                this.props.setCurrentPlayerId({ currentPlayerId });
                if (currentPlayer) {
                    this.props.setCurrentPlayer({ currentPlayer });
                }
            },
            reJoinGame: (body: any) => {
                const { reConnectedPlayerName, players } = body;

                // Notification
                notification.info({
                    message: `Player connected`,
                    description: `Player ${reConnectedPlayerName} back online`,
                    placement: 'bottomLeft',
                });

                const playersWithColorAndName = players.filter((o: Player) => o.name && o.color);

                this.props.setPlayers({ players: playersWithColorAndName });
            },
            cardReceived: (body: any) => {
                const { players, playerName, round } = body;

                // Hide spinner
                this.setMapSpinnerVisibility(false);

                if (players) {
                    // Message to the player that got the card
                    this.props.setPlayers({ players });
                    // Get player index
                } else if (playerName) {
                    // Message to everyone else
                    notification.info({
                        message: `Country card`,
                        description: `Player ${playerName} got a card`,
                        placement: 'bottomLeft',
                    });
                }

                if (round) {
                    this.props.setRound({ round });
                }
            },
            cardExchanged: (body: any) => {
                const { players, countries } = body;

                // Hide spinner
                this.setMapSpinnerVisibility(false);

                // Message to everyone
                notification.info({
                    message: `Country card`,
                    description: `Card exchanged`,
                    placement: 'bottomLeft',
                });

                this.props.setPlayers({ players });
                this.props.setCountries({ countries });
            },
            cardsExchanged: (body: any) => {
                const { players } = body;

                // Hide spinner
                this.setMapSpinnerVisibility(false);

                // Message to everyone
                notification.info({
                    message: `Country card`,
                    description: `Cards exchanged`,
                    placement: 'bottomLeft',
                });

                this.props.setPlayers({ players });
            },
            playersInfo: (body: PlayersInfoReceived['payload']) => {
                const { currentPlayer, gameStatus, players } = body;
                this.props.playersInfoReceived({ gameStatus, players, currentPlayer });
            },
            messageReceived: (body: any) => {
                const { player, message } = body;
                // const chatMessages = { ...this.state.chatMessages };
                // Increment unread count
                /*
                chatMessages.unreadCount += 1;
                // Add message to beginning of array
                chatMessages.messages.unshift({
                    title: player.name,
                    color: player.color,
                    text: message,
                });
                */

                this.props.addChatMessage({
                    title: player.name,
                    color: player.color,
                    text: message,
                });

                // this.setState({ chatMessages });
            },
            error: (body: any) => {
                const { errorMsg } = body;

                // Error message
                notification.error({
                    message: 'Error',
                    description: errorMsg,
                    placement: 'bottomLeft',
                });

                // Hide spinner
                this.setMapSpinnerVisibility(false);
            },
        };

        const gameId = this.props.match.params.gameId;
        this.props.setGameId({ gameId });
        const endpoint = `${process.env.REACT_APP_WEBSOCKET_ENDPOINT}?game_id=${gameId}`;

        new WebsocketService(
            endpoint,
            gameId,
            onMessageActions, // TODO. Create OnMessageActions
        );
    }

    // Show popup with player's mission
    showPlayerMission = (players: Player[]) => {
        let missionText;
        players.forEach((player) => {
            if (player.mission) {
                missionText = player.mission.text;
            }
        })

        Modal.info({
            title: 'Mission',
            content: (
                <Alert message={missionText} type="info" />
            ),
            onOk() { },
        });
    }

    showStartTurnNotifiction = (roundType: string) => {
        let description = null;

        if (roundType === RoundType.FIRST_ADD_TROOPS) {
            description = 'Please add 5 troops';
        } else if (roundType === RoundType.SECOND_ADD_TROOPS) {
            description = 'Please add 3 troops';
        } else if (roundType === RoundType.ADD_TROOPS) {
            description = 'Please add troops';
        } else if (roundType === RoundType.ATTACK) {
            description = 'You can attack or move troops';
        }

        // Notification
        notification.info({
            message: 'Your turn!',
            description,
            placement: 'bottomLeft',
        });
    }

    setMapSpinnerVisibility = (isVisible: boolean) => {
        this.props.setSpinnerVisible({ isVisible });
    }

    // const style = { position: 'fixed', zIndex: 1, width: '100%' };

    render() {
        return (
            <Layout>
                <Header style={{ marginBottom: '10px' }}>
                    <GameHeader />
                </Header>
                <TopTabs />
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default LayoutWrapper;
