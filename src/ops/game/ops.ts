import { put, select } from 'redux-saga/effects';
import WebsocketService from 'src/services/websocket';
import stateActions from 'src/state/actions';
import data from 'src/ops-read';
import {
    CountryAttacked, InitGame, JoinedGame, PlayersInfoReceived, RequestAddTroops,
    RequestExchangeCard, RequestExchangeCards, RequestFinishRound, RequestGetCountryCard,
    RequestJoinGame, RequestMoveTroops, RequestReconnect, RequestSendChatMessage,
    RequestStartGame, TroopsMoved,
} from './actions';
import { WebsocketSendMessagesTypes } from 'src/consts';
import Country from 'src/models/Country';
import Player from 'src/models/Player';

export function* watchInitGame(action: InitGame) {
    const gameId = action.payload.gameId;
    // const endpoint = `${process.env.REACT_APP_WEBSOCKET_ENDPOINT}?game_id=${gameId}`;

    try {
        /*
        const client = new WebsocketService(
            endpoint,
            gameId,
            undefined,
        );

        yield put(stateActions.messageService.setClient({ client }));
        */
        yield put(stateActions.game.setGameId({ gameId }));
    } catch (error) {
        // yield put(handleAjaxException(error));
    } finally {
        // yield put(actions.currentPersonalReport.setDoneStatuses({ doneStatuses: [] }));
    }
}

export function* watchRequestAddTroops(action: RequestAddTroops) {
    const gameId: string = yield select(data.game.gameId);

    WebsocketService.sendMessage(
        {
            gameId,
            country: action.payload.countryKey,
            count: action.payload.troops,
            playerColor: action.payload.playerColor,
        },
        WebsocketSendMessagesTypes.AddTroops,
    );

    /*
    const { troops, countryKey } = action.payload;
    const endpoint = `${process.env.REACT_APP_WEBSOCKET_ENDPOINT}?game_id=${gameId}`;

    const websocketClient: WebsocketService = yield select(data.messageService.client);

    try {
        if (websocketClient) {
            websocketClient.sendMessage(
                {
                  gameId,
                  country: countryName,
                  count: 1,
                  playerColor: player.color,
                },
                'addTroops',
            );
        }

        yield put(stateActions.messageService.setClient({ client }));
    } catch (error) {
        // yield put(handleAjaxException(error));
    } finally {
        // yield put(actions.currentPersonalReport.setDoneStatuses({ doneStatuses: [] }));
    }
    */
}

export function* watchRequestJoinGame(action: RequestJoinGame) {
    const gameId: string = yield select(data.game.gameId);

    const messageData = {
        gameId,
        username: action.payload.username,
        color: action.payload.color,
    }

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.JoinGame);
    console.log('joinGame message sent!');
}

export function* watchJoinedGame(action: JoinedGame) {
    if (action.payload.players) {
        const { players, gameStatus } = action.payload;

        yield put(stateActions.game.setGameStatus({ gameStatus }));
        yield put(stateActions.game.setPlayers({ players }));
    } else {
        yield put(stateActions.game.setPlayers({ players: [] }));
    }
}

export function* watchPlayersInfoReceived(action: PlayersInfoReceived) {
    const { players, gameStatus, currentPlayer } = action.payload;

    yield put(stateActions.game.setGameStatus({ gameStatus }));
    yield put(stateActions.game.setPlayers({ players }));
    yield put(stateActions.game.setCurrentPlayer({ currentPlayer }));
}

export function* watchRequestStartGame(action: RequestStartGame) {
    const gameId: string = yield action.payload.gameId ? action.payload.gameId : select(data.game.gameId);
    const messageData = {
        gameId,
    }

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.StartGame);
    console.log('startGame message sent!');
}

export function watchRequestFinishRound(action: RequestFinishRound) {
    const messageData = { ...action.payload };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.FinishRound);
    console.log('startGame message sent!');
}

export function* watchRequestAttack() {
    // Set attacking flag and some dices just to show animation
    yield put(stateActions.game.setIsAttacking({ isAttacking: true }));
    yield put(stateActions.game.setDices({ dices: {
        attacker: [1, 1, 1],
        defender: [1, 1, 1],
    }}));

    const me: Player = yield select(data.game.me);

    const messageData: {
        gameId: string;
        playerColor: string;
        attacker: string;
        defender: string;
    } = {
        gameId: yield select(data.game.gameId),
        playerColor: me.color,
        attacker: yield select(data.countrySelection.source),
        defender: yield select(data.countrySelection.target),
    };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.Attack);
    console.log('request attack message sent!');
}

export function* watchRequestMoveTroops(action: RequestMoveTroops) {
    const me: Player = yield select(data.game.me);

    const messageData: {
        gameId: string;
        playerColor: string;
        source: string;
        target: string;
        count: number;
    } = {
        gameId: yield select(data.game.gameId),
        playerColor: me.color,
        source: yield select(data.countrySelection.source),
        target: yield select(data.countrySelection.target),
        count: action.payload.count,
    };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.MoveTroops);
    console.log('request move Troops message sent!');
}

export function watchRequestReconnect(action: RequestReconnect) {
    const messageData = { ...action.payload };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.ReConnect);
    console.log('request reConnect message sent!');
}

export function watchRequestSendChatMessage(action: RequestSendChatMessage) {
    const messageData = { ...action.payload };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.ChatMessage);
    console.log('request send chat message sent!');
}

export function watchRequestExchangeCard(action: RequestExchangeCard) {
    const messageData = { ...action.payload };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.ExchangeCard);
    console.log('request exchange Card message sent!');
}

export function watchRequestExchangeCards(action: RequestExchangeCards) {
    const messageData = { ...action.payload };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.ExchangeCards);
    console.log('request exchange Cards message sent!');
}

export function watchRequestGetCountryCard(action: RequestGetCountryCard) {
    const messageData = { ...action.payload };

    WebsocketService.sendMessage(messageData, WebsocketSendMessagesTypes.GetCard);
    console.log('request get Card message sent!');
}

export function* watchCountryAttacked(action: CountryAttacked) {
    debugger;
    const {
        gameStatus,
        winner,
        attacker,
        defender,
        dices,
        players,
        countryConquered,
        eventsLog,
    } = action.payload;

    // A player was killed and attacker won the game
    if (winner && gameStatus === 'finished') {
        console.log('game finished!');
        // const modals = { ...this.state.modals };
        // modals.gameFinishedVisible = true;

        // this.setState({ modals, winner });
        yield put(stateActions.modals.setGameFinishedOpen({ isOpen: true }));
        yield put(stateActions.game.setWinner({ winner }));
    } else {
        // this.setMapSpinnerVisibility(true);
        yield put(stateActions.modals.setSpinnerVisible({ isVisible: true }));
        yield put(stateActions.modals.setAttacking({ isAttacking: true }));
        yield put(stateActions.game.setDices({ dices }));
        // this.setState({ attacking: true, dices });
        const countries: Country[] = yield select(data.game.countries); // [...this.props.countries];
        // const modals = { ...this.state.modals };
        const attackerIndex = countries.findIndex((o) => o.countryKey === attacker.countryKey);
        const defenderIndex = countries.findIndex((o) => o.countryKey === defender.countryKey);
        // const attackerIndex = _.findIndex(countries, { countryKey: attacker.countryKey });
        // const defenderIndex = _.findIndex(countries, { countryKey: defender.countryKey });

        countries[attackerIndex] = attacker;
        countries[defenderIndex] = defender;

        const currentPlayer: Player = yield select(data.game.me);
        const shouldMakeCountryConqueredModalVisible = countryConquered && attacker?.state?.player?.color === currentPlayer?.color && attacker.state.troops > 1

        // Show modal to select troops to move after conquer
        if (shouldMakeCountryConqueredModalVisible) {
            // Show modal to select troops to move
            yield put(stateActions.modals.setCountryConqueredOpen({ isOpen: true }));
        }

        yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));
        yield put(stateActions.modals.setAttacking({ isAttacking: false })); // TODO Need this?
        yield put(stateActions.game.setIsAttacking({ isAttacking: false }));
        yield put(stateActions.game.setCountries({ countries }));
        yield put(stateActions.game.setPlayers({ players }));
        yield put(stateActions.game.setEventsLog({ eventsLog }));

        /*
        setTimeout(() => {
            // Country conquered, show notification
            if (countryConquered) {
                notification.info({
                    message: 'Country conquered!',
                    description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                    placement: 'bottomLeft',
                });
            }
            // Set spinner not visible
            this.setMapSpinnerVisibility(false);
            // this.setState({ countries, dices, modals, players, eventsLog, attacking: false });
            this.setState({ dices, modals, eventsLog, attacking: false });
            this.props.setPlayers({ players });
            this.props.setCountries({ countries });
        }, 1000);
        */
    }
}

export function* watchTroopsMoved(action: TroopsMoved) {
    const { source, target, round, eventsLog } = action.payload;
    const countries: Country[] = yield select(data.game.countries);

    const sourceIndex = countries.findIndex((o) => o.countryKey === source.countryKey);
    const targetIndex = countries.findIndex((o) => o.countryKey === target.countryKey);

    countries[sourceIndex] = source;
    countries[targetIndex] = target;

    // Close modal if country was conquered
    yield put(stateActions.modals.setCountryConqueredOpen({ isOpen: false }));
    // const modals = { ...this.state.modals };
    // modals.countryConqueredVisible = false;

    // this.setState({ /*countries, round,*/ eventsLog, modals });
    yield put(stateActions.game.setCountries({ countries }));
    yield put(stateActions.game.setRound({ round }));
    yield put(stateActions.game.setEventsLog({ eventsLog }));

    // Hide spinner
    yield put(stateActions.modals.setSpinnerVisible({ isVisible: false }));
}
