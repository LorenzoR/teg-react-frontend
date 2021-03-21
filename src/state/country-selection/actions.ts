import { ActionCreatorWithPayload } from 'src/utils/types';

const SET_SOURCE: 'SET_SOURCE' = 'SET_SOURCE';
const SET_TARGET: 'SET_TARGET' = 'SET_TARGET';

export interface SetSource {
    type: typeof SET_SOURCE;
    payload: {
        source: string;
    };
}

export const setSource: ActionCreatorWithPayload<SetSource> = payload => ({
    type: SET_SOURCE,
    payload,
});

export interface SetTarget {
    type: typeof SET_TARGET;
    payload: {
        target: string;
    };
}

export const setTarget: ActionCreatorWithPayload<SetTarget> = payload => ({
    type: SET_TARGET,
    payload,
});

export const ActionTypes = {
    SET_SOURCE,
    SET_TARGET,
};

export type Actions =
    | SetSource
    | SetTarget
    ;

export default {
    setSource,
    setTarget,
};