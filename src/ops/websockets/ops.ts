import { select, put } from 'redux-saga/effects';
import { WebsocketReceivedMessagesTypes } from 'src/consts';
import Player from 'src/models/Player';
import data from 'src/ops-read/index';
import { WSMsgReceived } from './actions';
import actions from 'src/ops/actions';
import stateActions from 'src/state/actions';
import { ConnectionIDReceived, CountryAttacked, GameStarted, GameSync, JoinedGame, PlayersInfoReceived, TroopsMoved } from '../game/actions';
import { Round } from 'src/models/Round';

export function* watchWSMsgReceiced(action: WSMsgReceived) {
    const currentPlayer: Player = yield select(data.game.currentPlayer);
    console.log('watchWSMsgReceiced():: ', action, currentPlayer);

    const { message } = action.payload;

    switch (message.action) {
        case WebsocketReceivedMessagesTypes.JoinedGame: {
            console.log('join game received!');
            const body = message.body as JoinedGame['payload'];
            yield put(actions.game.joinedGame({ ...body }));
            break;
        }
        case WebsocketReceivedMessagesTypes.GameStarted: {
            const body = message.body as GameStarted['payload'];
            const { players, countries, round, gameStatus, eventsLog, UUID } = body;

            // this.props.setEventsLog({ eventsLog });
            yield put(stateActions.game.setEventsLog({ eventsLog }));

            // this.props.initGame({ round, gameStatus, gameId: gameId || '', countries, players });
            yield put(stateActions.game.createGame({
                round,
                gameStatus,
                gameId: UUID || '',
                countries,
                players,
            }));

            // Show mission
            yield put(stateActions.modals.setPlayerMissionOpen({ isOpen: true }));
            break;
        }
        case WebsocketReceivedMessagesTypes.PlayersInfo: {
            const body = message.body as PlayersInfoReceived['payload'];
            const { currentPlayer, gameStatus, players } = body;
            yield put(actions.game.playersInfoReceived({ gameStatus, players, currentPlayer }));
            break;
        }
        case WebsocketReceivedMessagesTypes.ConnectionId: {
            const body = message.body as ConnectionIDReceived['payload'];
            const { connectionId } = body;
            const players: Player[] = yield select(data.game.players);

            /*
            const currentPlayer = _.find(
                this.props.players,
                (obj: Player) => obj.id === connectionId,
            );
            */
            const currentPlayer = players.find((o) => o.id === connectionId);

            // this.props.setChooseColorOpen({ isOpen: false });
            yield put(stateActions.modals.setChooseColorOpen({ isOpen: false }));

            // this.props.setCurrentPlayerId({ currentPlayerId: connectionId });
            yield put(stateActions.game.setCurrentPlayerId({ currentPlayerId: connectionId }));

            if (currentPlayer) {
                // this.props.setCurrentPlayer({ currentPlayer });
                yield put(stateActions.game.setCurrentPlayer({ currentPlayer }));
            }

            // Set local storage
            const gameId: string = yield select(data.game.gameId);
            const localStorageKey = `teg-id-${gameId}`;
            const localStorageItem = { connectionId, color: currentPlayer?.color }
            localStorage.setItem(localStorageKey, JSON.stringify(localStorageItem));
            console.log(`Set ${localStorageKey} - ${connectionId}`);

            const currentPlayerFromState: Player = yield select(data.game.currentPlayer);
            const round: Round = yield select(data.game.round);

            // Show notification
            const shouldShowNotification = currentPlayerFromState
                && players[round.playerIndex].color === currentPlayerFromState.color;

            // if (this.props.currentPlayer && this.props.players[this.props.round.playerIndex].color === this.props.currentPlayer.color) {
            if (shouldShowNotification) {
                yield put(stateActions.notifications.showStartTurnNotification());
            }
            break;
        }
        case WebsocketReceivedMessagesTypes.CountryAttacked: {
            debugger;
            const body = message.body as CountryAttacked['payload'];
            const {
                gameStatus,
                winner,
                attacker,
                defender,
                // dices,
                players,
                countryConquered,
                // eventsLog,
            } = body;

            /*
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
            */
            yield put(actions.game.countryAttacked({ ...body }));

            if (!(winner && gameStatus === 'finished')) {
                // Show notification
                /*
                notification.info({
                    message: `${attacker.countryKey} attacked ${defender.countryKey}`,
                    description: '',
                    // description: `${dices.attacker.join(' - ')} vs ${dices.defender.join(' - ')}`,
                    placement: 'bottomLeft',
                });
                */
                yield put(stateActions.notifications.showAttackNotification({ attacker, defender }));
            }

            // Another player attacked so show animation
            const currentPlayer: Player = yield select(data.game.currentPlayer);
            const round: Round = yield select(data.game.round);
            // TODO show attacker and defender
            // if (this.props.players[this.props.round.playerIndex].color !== this.props.currentPlayer?.color) {
            if (players[round.playerIndex].color !== currentPlayer?.color) {
                console.log('setIsAttacking true');
                // this.props.setIsAttacking({ isAttacking: true });
                yield put(stateActions.game.setIsAttacking({ isAttacking: true }));

                setTimeout(function* () {
                    console.log('setIsAttacking false');
                    // this.props.setIsAttacking({ isAttacking: false });
                    yield put(stateActions.game.setIsAttacking({ isAttacking: false }));
                }, 2000);
            }

            /*
            setTimeout(function* () {
                debugger;
                // Country conquered, show notification
                if (countryConquered) {
                    // TODO
                    /
                    notification.info({
                        message: 'Country conquered!',
                        description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                        placement: 'bottomLeft',
                    });
                    *
                    yield put(stateActions.notifications.showCountryConqueredNotification({ attacker, defender }));
                }
            }, 1000);
            */

            if (countryConquered) {
                yield put(stateActions.notifications.showCountryConqueredNotification({ attacker, defender }));
            }

            break;
        }
        case WebsocketReceivedMessagesTypes.TroopsMoved: {
            const body = message.body as TroopsMoved['payload'];
            const { source, target, round, eventsLog } = body;

            // this.props.troopsMoved({ source, target, round, eventsLog });
            yield put(actions.game.troopsMoved({ source, target, round, eventsLog }));
            break;
        }
        case WebsocketReceivedMessagesTypes.RoundFinished: {
            const body = message.body as any; // TODO Change any
            const { round, players, gameStatus, winner } = body;

            // Game finished
            if (gameStatus === 'finished' && winner) {
                console.log('game finished!');
                // this.props.setGameFinishedOpen({ isOpen: true });
                yield put(stateActions.modals.setGameFinishedOpen({ isOpen: true }));
                // this.props.setWinner({ winner });
                yield put(stateActions.game.setWinner({ winner }));
            } else {
                // Clear selection
                // this.props.setPlayers({ players });
                yield put(stateActions.game.setPlayers({ players }));
                // this.props.setRound({ round });
                yield put(stateActions.game.setRound({ round }));
                // Clear selection
                // this.props.setSource({ source: '' });
                yield put(stateActions.countrySelection.setSource({ source: '' }));
                // this.props.setTarget({ target: '' });
                yield put(stateActions.countrySelection.setTarget({ target: '' }));
            }

            // Hide spinner
            // this.setMapSpinnerVisibility(false);
            yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));

            // Show notification
            const currentPlayer: Player = yield select(data.game.currentPlayer);
            const shouldShowNotification = currentPlayer && players[round.playerIndex].color === currentPlayer.color;
            // if (this.props.currentPlayer && players[round.playerIndex].color === this.props.currentPlayer.color) {
            if (shouldShowNotification) {
                // this.showStartTurnNotifiction(round.type);
                yield put(stateActions.notifications.showStartTurnNotification());
            }
            break;
        }
        case WebsocketReceivedMessagesTypes.TroopsAdded: {
            const body = message.body as any; // TODO change any
            const { players, countries, eventsLog } = body;

            // this.props.setEventsLog({ eventsLog });
            // this.props.setCountries({ countries });
            // this.props.setPlayers({ players });

            yield put(stateActions.game.setEventsLog({ eventsLog }));
            yield put(stateActions.game.setCountries({ countries }));
            yield put(stateActions.game.setPlayers({ players }));


            // Hide spinner
            yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));
            // this.setMapSpinnerVisibility(false);
            break;
        }
        case WebsocketReceivedMessagesTypes.PlayerDisconnected: {
            const body = message.body as any; // TODO change any
            const { players, disconnectedPlayerName } = body;

            // this.props.setPlayers({ players });
            yield put(stateActions.game.setPlayers({ players }));

            // Notification
            // TODO
            /*
            notification.info({
                message: `Player disconnected`,
                description: `Player ${disconnectedPlayerName} got disconnected`,
                placement: 'bottomLeft',
            });
            */
            yield put(stateActions.notifications.showPlayerDisconnectedNotification({ playerName: disconnectedPlayerName }));
            break;
        }
        case WebsocketReceivedMessagesTypes.GuestDisconnected: { // TODO do we have guests?
            const body = message.body as any; // TODO change any
            const { isAdmin } = body;

            // If it was the admin, cancel game
            if (isAdmin) {
                // this.props.setChooseColorOpen({ isOpen: false });
                yield put(stateActions.modals.setChooseColorOpen({ isOpen: false }));

                // Error modal
                // TODO
                /*
                Modal.error({
                    title: 'Admin disconnected',
                    content: 'Admin is offline, game is cancelled',
                    onOk: () => console.log('bye!'),
                });
                */
                yield put(stateActions.modals.setErrorModalOpen({
                    isOpen: true,
                    title: 'Admin disconnected',
                    content: 'Admin is offline, game is cancelled',
                }));
            }
            break;
        }
        case WebsocketReceivedMessagesTypes.Sync: {
            const body = message.body as GameSync['payload'];
            const { players, countries, round, currentPlayerId, eventsLog } = body;

            const currentPlayer = players.find((obj) => obj.id === currentPlayerId);

            // this.props.setEventsLog({ eventsLog });
            yield put(stateActions.game.setEventsLog({ eventsLog }));

            // TODO. Only for player that chose color
            yield put(stateActions.modals.setChooseColorOpen({ isOpen: false }));
            yield put(stateActions.game.setPlayers({ players }));
            yield put(stateActions.game.setCountries({ countries }));
            yield put(stateActions.game.setRound({ round }));
            yield put(stateActions.game.setCurrentPlayerId({ currentPlayerId }));

            if (currentPlayer) {
                yield put(stateActions.game.setCurrentPlayer({ currentPlayer }));
            }
            /*
            this.props.setChooseColorOpen({ isOpen: false });
            this.props.setPlayers({ players });
            this.props.setCountries({ countries });
            this.props.setRound({ round });
            this.props.setCurrentPlayerId({ currentPlayerId });
            if (currentPlayer) {
                this.props.setCurrentPlayer({ currentPlayer });
            }
            */
            break;
        }
        case WebsocketReceivedMessagesTypes.ReJoinedGame: {
            const body = message.body as any; // TODO change any
            const { reConnectedPlayerName, players } = body;

            // Notification // TODO
            yield put(stateActions.notifications.showPlayerConnectedNotification({ playerName: reConnectedPlayerName }));
            /*
            notification.info({
                message: `Player connected`,
                description: `Player ${reConnectedPlayerName} back online`,
                placement: 'bottomLeft',
            });
            */

            const playersWithColorAndName = players.filter((o: Player) => o.name && o.color);

            // this.props.setPlayers({ players: playersWithColorAndName });
            yield put(stateActions.game.setPlayers({ players: playersWithColorAndName }));
            break;
        }
        case WebsocketReceivedMessagesTypes.CardReceived: {
            const body = message.body as any; // TODO. change any
            const { players, playerName, round } = body;

            // Hide spinner
            // this.setMapSpinnerVisibility(false);
            yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));

            if (players) {
                // Message to the player that got the card
                // this.props.setPlayers({ players });
                yield put(stateActions.game.setPlayers({ players }));
                // Get player index
            } else if (playerName) {
                // Message to everyone else // TODO
                yield put(stateActions.notifications.showCountryCardNotification({ playerName }));
                /*
                notification.info({
                    message: `Country card`,
                    description: `Player ${playerName} got a card`,
                    placement: 'bottomLeft',
                });
                */
            }

            if (round) {
                // this.props.setRound({ round });
                yield put(stateActions.game.setRound({ round }));
            }
            break;
        }
        case WebsocketReceivedMessagesTypes.CardExchanged: {
            const body = message.body as any; // TODO. change any
            const { players, countries } = body;

            // Hide spinner
            yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));
            // this.setMapSpinnerVisibility(false);

            // Message to everyone // TODO
            yield put(stateActions.notifications.showCountryCardNotification({ playerName: 'TODO CHANGE' }));
            /*
            notification.info({
                message: `Country card`,
                description: `Card exchanged`,
                placement: 'bottomLeft',
            });
            */

            // this.props.setPlayers({ players });
            // this.props.setCountries({ countries });
            yield put(stateActions.game.setPlayers({ players }));
            yield put(stateActions.game.setCountries({ countries }));
            break;
        }
        case WebsocketReceivedMessagesTypes.CardsExchanged: {
            const body = message.body as any; // TODO. change any
            const { players } = body;

            // Hide spinner
            // this.setMapSpinnerVisibility(false);
            yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));

            // Message to everyone // TODO
            yield put(stateActions.notifications.showCountryCardNotification({ playerName: 'TODO CHANGE' }));
            /*
            notification.info({
                message: `Country card`,
                description: `Cards exchanged`,
                placement: 'bottomLeft',
            });
            */

            // this.props.setPlayers({ players });
            yield put(stateActions.game.setPlayers({ players }));
            break;
        }
        case WebsocketReceivedMessagesTypes.MessageReceived: {
            const body = message.body as any; // TODO Change
            const { player } = body;
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

            /*
            this.props.addChatMessage({
                title: player.name,
                color: player.color,
                text: message,
            });
            */

            yield put(stateActions.game.addChatMessage({
                title: player.name,
                color: player.color,
                text: body.message,
            }));

            // this.setState({ chatMessages });
            break;
        }
        case WebsocketReceivedMessagesTypes.Error: {
            const body = message.body as any; // TODO . change any
            const { errorMsg } = body;

            // Error message // TODO
            yield put(stateActions.notifications.showErrorNotification({
                message: 'Error',
                description: errorMsg,
            }));

            /*
            notification.error({
                message: 'Error',
                description: errorMsg,
                placement: 'bottomLeft',
            });
            */

            // Hide spinner
            yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));
            break;
        }
        default:
            break;
    }
}
