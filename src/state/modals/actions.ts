import { ActionCreatorWithPayload } from 'src/utils/types';

const SET_CARDS_MODAL_OPEN: 'SET_CARDS_MODAL_OPEN' = 'SET_CARDS_MODAL_OPEN';
const SET_CHOOSE_COLOR_OPEN: 'SET_CHOOSE_COLOR_OPEN' = 'SET_CHOOSE_COLOR_OPEN';
const SET_COUNTRY_CONQUERED_OPEN: 'SET_COUNTRY_CONQUERED_OPEN' = 'SET_COUNTRY_CONQUERED_OPEN';
const SET_GAME_FINISHED_OPEN: 'SET_GAME_FINISHED_OPEN' = 'SET_GAME_FINISHED_OPEN';

const SET_SPINNER_VISIBLE: 'SET_SPINNER_VISIBLE' = 'SET_SPINNER_VISIBLE';
const SET_ATTACKING: 'SET_ATTACKING' = 'SET_ATTACKING';


export interface SetCardsModalOpen {
    type: typeof SET_CARDS_MODAL_OPEN;
    payload: {
        isOpen: boolean;
    };
}

export const setCardsModalOpen: ActionCreatorWithPayload<SetCardsModalOpen> = payload => ({
    type: SET_CARDS_MODAL_OPEN,
    payload,
});

export interface SetChooseColorOpen {
    type: typeof SET_CHOOSE_COLOR_OPEN;
    payload: {
        isOpen: boolean;
    };
}

export const setChooseColorOpen: ActionCreatorWithPayload<SetChooseColorOpen> = payload => ({
    type: SET_CHOOSE_COLOR_OPEN,
    payload,
});

export interface SetCountryConqueredOpen {
    type: typeof SET_COUNTRY_CONQUERED_OPEN;
    payload: {
        isOpen: boolean;
    };
}

export const setCountryConqueredOpen: ActionCreatorWithPayload<SetCountryConqueredOpen> = payload => ({
    type: SET_COUNTRY_CONQUERED_OPEN,
    payload,
});

export interface SetGameFinishedOpen {
    type: typeof SET_GAME_FINISHED_OPEN;
    payload: {
        isOpen: boolean;
    };
}

export const setGameFinishedOpen: ActionCreatorWithPayload<SetGameFinishedOpen> = payload => ({
    type: SET_GAME_FINISHED_OPEN,
    payload,
});

export interface SetSpinnerVisible {
    type: typeof SET_SPINNER_VISIBLE;
    payload: {
        isVisible: boolean;
    };
}

export const setSpinnerVisible: ActionCreatorWithPayload<SetSpinnerVisible> = payload => ({
    type: SET_SPINNER_VISIBLE,
    payload,
});

export interface SetAttacking {
    type: typeof SET_ATTACKING;
    payload: {
        isAttacking: boolean;
    };
}

export const setAttacking: ActionCreatorWithPayload<SetAttacking> = payload => ({
    type: SET_ATTACKING,
    payload,
});

export const ActionTypes = {
    SET_CARDS_MODAL_OPEN,
    SET_CHOOSE_COLOR_OPEN,
    SET_COUNTRY_CONQUERED_OPEN,
    SET_GAME_FINISHED_OPEN,
    SET_SPINNER_VISIBLE,
    SET_ATTACKING,
};

export type Actions =
    | SetCardsModalOpen
    | SetChooseColorOpen
    | SetCountryConqueredOpen
    | SetGameFinishedOpen
    | SetSpinnerVisible
    | SetAttacking
    ;

export default {
    setCardsModalOpen,
    setChooseColorOpen,
    setCountryConqueredOpen,
    setGameFinishedOpen,
    setSpinnerVisible,
    setAttacking,
};
