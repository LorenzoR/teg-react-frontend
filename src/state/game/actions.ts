import Player from "src/models/Player";
import { Round } from "src/models/Round";

export const INIT_GAME: 'INIT_GAME' = 'INIT_GAME';
export const SET_COUNTRIES: 'SET_COUNTRIES' = 'SET_COUNTRIES';
export const SET_PLAYERS: 'SET_PLAYERS' = 'SET_PLAYERS';
export const SET_ROUND: 'SET_ROUND' = 'SET_ROUND';
export const SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER' = 'SET_CURRENT_PLAYER';
export const SET_GAME_STATUS: 'SET_GAME_STATUS' = 'SET_GAME_STATUS';

export interface InitGame {
    type: typeof INIT_GAME;
    payload: {
        countries: {}[];
        players: Player[];
    }
};

const initGame = (payload: InitGame['payload']) => ({
  type: INIT_GAME,
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

export type Actions =
    | InitGame
    | SetCountries
    | SetPlayers
    | SetRound
    | SetCurrentPlayer
    | SetGameStatus
    ;

export default {
  initGame,
  setCountries,
  setPlayers,
  setRound,
  setCurrentPlayer,
  setGameStatus,
};
