import test, { Actions as TestActions, SOME_ACTION } from '../state/game/actions';

export type Actions = 
    | TestActions;

export const ActionTypes = {
    SOME_ACTION,
};

export default {
    test,
};
