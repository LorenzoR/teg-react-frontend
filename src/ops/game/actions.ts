import Country from 'src/models/Country';
import { Dices } from 'src/models/Dices';
import Player from 'src/models/Player';
import { Round } from 'src/models/Round';
import { ActionCreator, ActionCreatorWithPayload } from 'src/utils/types';

/* Requests */
const REQUEST_ADD_TROOPS: 'REQUEST_ADD_TROOPS' = 'REQUEST_ADD_TROOPS';
const REQUEST_JOIN_GAME: 'REQUEST_JOIN_GAME' = 'REQUEST_JOIN_GAME';
const REQUEST_START_GAME: 'REQUEST_START_GAME' = 'REQUEST_START_GAME';
const REQUEST_FINISH_ROUND: 'REQUEST_FINISH_ROUND' = 'REQUEST_FINISH_ROUND';
const REQUEST_ATTACK: 'REQUEST_ATTACK' = 'REQUEST_ATTACK';
const REQUEST_RECONNECT: 'REQUEST_RECONNECT' = 'REQUEST_RECONNECT';
const REQUEST_SEND_CHAT_MSG: 'REQUEST_SEND_CHAT_MSG' = 'REQUEST_SEND_CHAT_MSG';
const REQUEST_EXCHANGE_CARD: 'REQUEST_EXCHANGE_CARD' = 'REQUEST_EXCHANGE_CARD';
const REQUEST_EXCHANGE_CARDS: 'REQUEST_EXCHANGE_CARDS' = 'REQUEST_EXCHANGE_CARDS';
const REQUEST_MOVE_TROOPS: 'REQUEST_MOVE_TROOPS' = 'REQUEST_MOVE_TROOPS';
const REQUEST_GET_COUNTRY_CARD: 'REQUEST_GET_COUNTRY_CARD' = 'REQUEST_GET_COUNTRY_CARD';
const REQUEST_COUNTER_FINISHED: 'REQUEST_COUNTER_FINISHED' = 'REQUEST_COUNTER_FINISHED';

/* Responses */
const INIT_GAME: 'INIT_GAME' = 'INIT_GAME';
const JOINED_GAME: 'JOINED_GAME' = 'JOINED_GAME';
const PLAYERS_INFO_RECEIVED: 'PLAYERS_INFO_RECEIVED' = 'PLAYERS_INFO_RECEIVED';
const GAME_STARTED: 'GAME_STARTED' = 'GAME_STARTED';
const CONNECTION_ID_RECEIVED: 'CONNECTION_ID_RECEIVED' = 'CONNECTION_ID_RECEIVED';
const GAME_SYNC: 'GAME_SYNC' = 'GAME_SYNC';
const COUNTRY_ATTACKED: 'COUNTRY_ATTACKED' = 'COUNTRY_ATTACKED';
const TROOPS_MOVED: 'TROOPS_MOVED' = 'TROOPS_MOVED';

export interface InitGame {
    type: typeof INIT_GAME;
    payload: {
        gameId: string;
        countries: {}[];
        players: Player[];
        gameStatus: string;
        round: Round;
    };
}

export const initGame: ActionCreatorWithPayload<InitGame> = payload => ({
    type: INIT_GAME,
    payload,
});

export interface RequestAddTroops {
    type: typeof REQUEST_ADD_TROOPS;
    payload: {
        troops: number;
        countryKey: string;
        playerColor: string;
    };
}

export const requestAddTroops: ActionCreatorWithPayload<RequestAddTroops> = payload => ({
    type: REQUEST_ADD_TROOPS,
    payload,
});

export interface RequestJoinGame {
    type: typeof REQUEST_JOIN_GAME;
    payload: {
        username: string;
        color: string;
    };
}

export const requestJoinGame: ActionCreatorWithPayload<RequestJoinGame> = payload => ({
    type: REQUEST_JOIN_GAME,
    payload,
});

export interface JoinedGame {
    type: typeof JOINED_GAME;
    payload: {
        gameStatus: string;
        players: Player[];
    };
}

export const joinedGame: ActionCreatorWithPayload<JoinedGame> = payload => ({
    type: JOINED_GAME,
    payload,
});

export interface PlayersInfoReceived {
    type: typeof PLAYERS_INFO_RECEIVED;
    payload: {
        gameStatus: string;
        players: Player[];
        currentPlayer: Player;
    };
}

export const playersInfoReceived: ActionCreatorWithPayload<PlayersInfoReceived> = payload => ({
    type: PLAYERS_INFO_RECEIVED,
    payload,
});

export interface RequestStartGame {
    type: typeof REQUEST_START_GAME;
    payload: {
        gameId?: string;
    };
}

export const requestStartGame: ActionCreatorWithPayload<RequestStartGame> = payload => ({
    type: REQUEST_START_GAME,
    payload,
});

export interface GameStarted {
    type: typeof GAME_STARTED;
    payload: {
        players: Player[];
        countries: Country[];
        round: Round;
        gameStatus: string;
        eventsLog: any;
    };
}

export const gameStarted: ActionCreatorWithPayload<GameStarted> = payload => ({
    type: GAME_STARTED,
    payload,
});

export interface ConnectionIDReceived {
    type: typeof CONNECTION_ID_RECEIVED;
    payload: {
        connectionId: string;
    };
}

export const connectionIDReceived: ActionCreatorWithPayload<ConnectionIDReceived> = payload => ({
    type: CONNECTION_ID_RECEIVED,
    payload,
});

export interface GameSync {
    type: typeof GAME_SYNC;
    payload: {
        players: Player[];
        countries: Country[];
        round: Round;
        gameStatus: string;
        eventsLog: any;
        currentPlayerId: string;
    };
}

export const gameSync: ActionCreatorWithPayload<GameSync> = payload => ({
    type: GAME_SYNC,
    payload,
});

export interface RequestFinishRound {
    type: typeof REQUEST_FINISH_ROUND;
    payload: {
        gameId: string;
        playerId: string;
        playerColor: string;
    };
}

export const requestFinishRound: ActionCreatorWithPayload<RequestFinishRound> = payload => ({
    type: REQUEST_FINISH_ROUND,
    payload,
});

export interface RequestAttack {
    type: typeof REQUEST_ATTACK;
}

export const requestAttack: ActionCreator<RequestAttack> = () => ({
    type: REQUEST_ATTACK,
});

export interface RequestReconnect {
    type: typeof REQUEST_RECONNECT;
    payload: {
        gameId: string;
        playerColor: string;
    };
}

export const requestReconnect: ActionCreatorWithPayload<RequestReconnect> = payload => ({
    type: REQUEST_RECONNECT,
    payload,
});

export interface RequestSendChatMessage {
    type: typeof REQUEST_SEND_CHAT_MSG;
    payload: {
        gameId: string;
        message: string;
    };
}

export const requestSendChatMessage: ActionCreatorWithPayload<RequestSendChatMessage> = payload => ({
    type: REQUEST_SEND_CHAT_MSG,
    payload,
});

export interface RequestExchangeCard {
    type: typeof REQUEST_EXCHANGE_CARD;
    payload: {
        // gameId: string;
        // playerColor: string;
        card: string;
    };
}

export const requestExchangeCard: ActionCreatorWithPayload<RequestExchangeCard> = payload => ({
    type: REQUEST_EXCHANGE_CARD,
    payload,
});

export interface RequestExchangeCards {
    type: typeof REQUEST_EXCHANGE_CARDS;
    payload: {
        // gameId: string;
        // playerColor: string;
        cards: string[];
    };
}

export const requestExchangeCards: ActionCreatorWithPayload<RequestExchangeCards> = payload => ({
    type: REQUEST_EXCHANGE_CARDS,
    payload,
});

export interface RequestMoveTroops {
    type: typeof REQUEST_MOVE_TROOPS;
    payload: {
        count: number;
    };
}

export const requestMoveTroops: ActionCreatorWithPayload<RequestMoveTroops> = payload => ({
    type: REQUEST_MOVE_TROOPS,
    payload,
});

export interface RequestGetCountryCard {
    type: typeof REQUEST_GET_COUNTRY_CARD;
    payload: {
        gameId: string;
        playerColor: string;
    };
}

export const requestGetCountryCard: ActionCreatorWithPayload<RequestGetCountryCard> = payload => ({
    type: REQUEST_GET_COUNTRY_CARD,
    payload,
});

export interface CountryAttacked {
    type: typeof COUNTRY_ATTACKED;
    payload: {
        gameStatus: string;
        winner: string;
        attacker: Country;
        defender: Country;
        dices: Dices;
        players: Player[];
        countryConquered: boolean;
        eventsLog: any;
    };
}

export const countryAttacked: ActionCreatorWithPayload<CountryAttacked> = payload => ({
    type: COUNTRY_ATTACKED,
    payload,
});

export interface TroopsMoved {
    type: typeof TROOPS_MOVED;
    payload: {
        source: Country;
        target: Country;
        round: Round;
        eventsLog: any[];
    };
}

export const troopsMoved: ActionCreatorWithPayload<TroopsMoved> = payload => ({
    type: TROOPS_MOVED,
    payload,
});

export interface RequestCounterFinished {
    type: typeof REQUEST_COUNTER_FINISHED;
}

export const requestCounterFinished: ActionCreator<RequestCounterFinished> = () => ({
    type: REQUEST_COUNTER_FINISHED,
});

export const ActionTypes = {
    INIT_GAME,
    REQUEST_ADD_TROOPS,
    REQUEST_JOIN_GAME,
    JOINED_GAME,
    PLAYERS_INFO_RECEIVED,
    REQUEST_START_GAME,
    GAME_STARTED,
    CONNECTION_ID_RECEIVED,
    GAME_SYNC,
    REQUEST_FINISH_ROUND,
    REQUEST_ATTACK,
    REQUEST_RECONNECT,
    REQUEST_SEND_CHAT_MSG,
    REQUEST_EXCHANGE_CARD,
    REQUEST_EXCHANGE_CARDS,
    REQUEST_MOVE_TROOPS,
    REQUEST_GET_COUNTRY_CARD,
    COUNTRY_ATTACKED,
    TROOPS_MOVED,
    REQUEST_COUNTER_FINISHED,
};

export type Actions =
    | InitGame
    | RequestAddTroops
    | RequestJoinGame
    | JoinedGame
    | PlayersInfoReceived
    | RequestStartGame
    | GameStarted
    | ConnectionIDReceived
    | GameSync
    | RequestFinishRound
    | RequestAttack
    | RequestReconnect
    | RequestSendChatMessage
    | RequestExchangeCard
    | RequestExchangeCards
    | RequestMoveTroops
    | RequestGetCountryCard
    | CountryAttacked
    | TroopsMoved
    | RequestCounterFinished
    ;

export default {
    initGame,
    requestAddTroops,
    requestJoinGame,
    joinedGame,
    playersInfoReceived,
    requestStartGame,
    gameStarted,
    connectionIDReceived,
    gameSync,
    requestFinishRound,
    requestAttack,
    requestReconnect,
    requestSendChatMessage,
    requestExchangeCard,
    requestExchangeCards,
    requestGetCountryCard,
    requestMoveTroops,
    countryAttacked,
    troopsMoved,
    requestCounterFinished,
};
