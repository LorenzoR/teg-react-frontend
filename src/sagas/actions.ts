import test, { Actions as TestActions, ActionTypes as GameActionTypes } from '../state/game/actions';

export type Actions = 
    | TestActions;

export const ActionTypes = {
    GameActionTypes,
};

export default {
    test,
};
