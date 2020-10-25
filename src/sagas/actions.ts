import test, { Actions as TestActions, INIT_GAME } from '../state/game/actions';

export type Actions = 
    | TestActions;

export const ActionTypes = {
    INIT_GAME,
};

export default {
    test,
};
