import { ActionCreatorWithPayload } from 'src/utils/types';

const SET_ROUND_TYPE: 'SET_ROUND_TYPE' = 'SET_ROUND_TYPE';
const SET_PLAYER: 'SET_PLAYER' = 'SET_PLAYER';

export interface SetRoundType {
    type: typeof SET_ROUND_TYPE;
    payload: {
        roundType: string;
    };
}

export const setRoundType: ActionCreatorWithPayload<SetRoundType> = payload => ({
    type: SET_ROUND_TYPE,
    payload,
});

export interface SetPlayer {
    type: typeof SET_PLAYER;
    payload: {
        player: string;
    };
}

export const setPlayer: ActionCreatorWithPayload<SetPlayer> = payload => ({
    type: SET_PLAYER,
    payload,
});

export const ActionTypes = {
    SET_ROUND_TYPE,
    SET_PLAYER,
};

export type Actions =
    | SetRoundType
    | SetPlayer
    ;

export default {
    setRoundType,
    setPlayer,
};