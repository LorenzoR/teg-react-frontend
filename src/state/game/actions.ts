import Player from "src/models/Player";
import { Round } from "src/models/Round";

const INIT_GAME: 'INIT_GAME' = 'INIT_GAME';
const SET_GAME_ID: 'SET_GAME_ID' = 'SET_GAME_ID';
const SET_COUNTRIES: 'SET_COUNTRIES' = 'SET_COUNTRIES';
const SET_PLAYERS: 'SET_PLAYERS' = 'SET_PLAYERS';
const SET_ROUND: 'SET_ROUND' = 'SET_ROUND';
const SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER' = 'SET_CURRENT_PLAYER';
const SET_GAME_STATUS: 'SET_GAME_STATUS' = 'SET_GAME_STATUS';
const SET_CURRENT_PLAYER_ID: 'SET_CURRENT_PLAYER_ID' = 'SET_CURRENT_PLAYER_ID';
const ADD_COUNTRY_TROOPS: 'ADD_COUNTRY_TROOPS' = 'ADD_COUNTRY_TROOPS';
const REMOVE_COUNTRY_TROOPS: 'REMOVE_COUNTRY_TROOPS' = 'REMOVE_COUNTRY_TROOPS';
const ATTACK: 'ATTACK' = 'ATTACK';
const MOVE_TROOPS: 'MOVE_TROOPS' = 'MOVE_TROOPS';
const SET_DICES: 'SET_DICES' = 'SET_DICES';
const SET_WINNER: 'SET_WINNER' = 'SET_WINNER';
const SET_EVENTS_LOG: 'SET_EVENTS_LOG' = 'SET_EVENTS_LOG';
const SET_IS_ATTACKING: 'SET_IS_ATTACKING' = 'SET_IS_ATTACKING';

export interface InitGame {
    type: typeof INIT_GAME;
    payload: {
        gameId: string;
        countries: {}[];
        players: Player[];
        gameStatus: string;
        round: Round;
    }
};

const initGame = (payload: InitGame['payload']) => ({
    type: INIT_GAME,
    payload,
});

export interface SetGameId {
    type: typeof SET_GAME_ID;
    payload: {
        gameId: string;
    }
};

const setGameId = (payload: SetGameId['payload']) => ({
    type: SET_GAME_ID,
    payload,
});

export interface SetCountries {
    type: typeof SET_COUNTRIES;
    payload: {
        countries: {}[];
    }
};

const setCountries = (payload: SetCountries['payload']) => ({
    type: SET_COUNTRIES,
    payload,
});

export interface SetPlayers {
    type: typeof SET_PLAYERS;
    payload: {
        players: Player[];
    }
};

const setPlayers = (payload: SetPlayers['payload']) => ({
    type: SET_PLAYERS,
    payload,
});

export interface SetRound {
    type: typeof SET_ROUND;
    payload: {
        round: Round;
    }
};

const setRound = (payload: SetRound['payload']) => ({
    type: SET_ROUND,
    payload,
});

export interface SetCurrentPlayer {
    type: typeof SET_CURRENT_PLAYER;
    payload: {
        currentPlayer: Player;
    }
};

const setCurrentPlayer = (payload: SetCurrentPlayer['payload']) => ({
    type: SET_CURRENT_PLAYER,
    payload,
});

export interface SetGameStatus {
    type: typeof SET_GAME_STATUS;
    payload: {
        gameStatus: string;
    }
};

const setGameStatus = (payload: SetGameStatus['payload']) => ({
    type: SET_GAME_STATUS,
    payload,
});

export interface SetCurrentPlayerId {
    type: typeof SET_CURRENT_PLAYER_ID;
    payload: {
        currentPlayerId: string;
    }
};

const setCurrentPlayerId = (payload: SetCurrentPlayerId['payload']) => ({
    type: SET_CURRENT_PLAYER_ID,
    payload,
});

export interface AddCountryTroops {
    type: typeof ADD_COUNTRY_TROOPS;
    payload: {
        troops: number;
        countryKey: string;
    }
};

const addCountryTroops = (payload: AddCountryTroops['payload']) => ({
    type: ADD_COUNTRY_TROOPS,
    payload,
});

export interface RemoveCountryTroops {
    type: typeof REMOVE_COUNTRY_TROOPS;
    payload: {
        troops: number;
        countryKey: string;
    }
};

const removeCountryTroops = (payload: RemoveCountryTroops['payload']) => ({
    type: REMOVE_COUNTRY_TROOPS,
    payload,
});

export interface Attack {
    type: typeof ATTACK;
    payload: {
        source: string;
        target: string;
    }
};

const attack = (payload: Attack['payload']) => ({
    type: ATTACK,
    payload,
});

export interface MoveTroops {
    type: typeof MOVE_TROOPS;
    payload: {
        source: string;
        target: string;
        troops: number;
    }
};

const moveTroops = (payload: MoveTroops['payload']) => ({
    type: MOVE_TROOPS,
    payload,
});

export interface SetDices {
    type: typeof SET_DICES;
    payload: {
        dices: {
            attacker: number[];
            defender: number[];
        };
    }
};

const setDices = (payload: SetDices['payload']) => ({
    type: SET_DICES,
    payload,
});

export interface SetWinner {
    type: typeof SET_WINNER;
    payload: {
        winner: string;
    }
};

const setWinner = (payload: SetWinner['payload']) => ({
    type: SET_WINNER,
    payload,
});

export interface SetEventsLog {
    type: typeof SET_EVENTS_LOG;
    payload: {
        eventsLog: any[];
    }
};

const setEventsLog = (payload: SetEventsLog['payload']) => ({
    type: SET_EVENTS_LOG,
    payload,
});

export interface SetIsAttacking {
    type: typeof SET_IS_ATTACKING;
    payload: {
        isAttacking: boolean;
    }
};

const setIsAttacking = (payload: SetIsAttacking['payload']) => ({
    type: SET_IS_ATTACKING,
    payload,
});

export const ActionTypes = {
    INIT_GAME,
    SET_GAME_ID,
    SET_COUNTRIES,
    SET_PLAYERS,
    SET_ROUND,
    SET_CURRENT_PLAYER,
    SET_GAME_STATUS,
    SET_CURRENT_PLAYER_ID,
    ADD_COUNTRY_TROOPS,
    REMOVE_COUNTRY_TROOPS,
    ATTACK,
    MOVE_TROOPS,
    SET_DICES,
    SET_WINNER,
    SET_EVENTS_LOG,
    SET_IS_ATTACKING,
};

export type Actions =
    | InitGame
    | SetGameId
    | SetCountries
    | SetPlayers
    | SetRound
    | SetCurrentPlayer
    | SetGameStatus
    | SetCurrentPlayerId
    | AddCountryTroops
    | RemoveCountryTroops
    | Attack
    | MoveTroops
    | SetDices
    | SetWinner
    | SetEventsLog
    | SetIsAttacking
    ;

export default {
    initGame,
    setGameId,
    setCountries,
    setPlayers,
    setRound,
    setCurrentPlayer,
    setGameStatus,
    setCurrentPlayerId,
    addCountryTroops,
    removeCountryTroops,
    attack,
    moveTroops,
    setDices,
    setWinner,
    setEventsLog,
    setIsAttacking,
};
