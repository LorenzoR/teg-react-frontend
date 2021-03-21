import { Actions, ActionTypes } from './actions';

export interface State {
    isCardsModalOpen: boolean;
    isChooseColorVisible: boolean;
    isCountryConqueredVisible: boolean;
    isGameFinishedVisible: boolean;
    isCountryCardsVisible: boolean;
    isSpinnerVisible: boolean;
    isAttacking: boolean;
}

const initialState: State = {
    isChooseColorVisible: true,
    isCardsModalOpen: false,
    isCountryConqueredVisible: false,
    isGameFinishedVisible: false,
    isCountryCardsVisible: false,
    isSpinnerVisible: false,
    isAttacking: false,
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_CARDS_MODAL_OPEN:
            return { ...state, isCardsModalOpen: action.payload.isOpen };
        case ActionTypes.SET_CHOOSE_COLOR_OPEN:
            return { ...state, isChooseColorVisible: action.payload.isOpen };
        case ActionTypes.SET_COUNTRY_CONQUERED_OPEN:
            return { ...state, isCountryConqueredVisible: action.payload.isOpen };
        case ActionTypes.SET_GAME_FINISHED_OPEN:
            return { ...state, isGameFinishedVisible: action.payload.isOpen };
        case ActionTypes.SET_SPINNER_VISIBLE:
            return { ...state, isSpinnerVisible: action.payload.isVisible };
        case ActionTypes.SET_ATTACKING:
            return { ...state, isAttacking: action.payload.isAttacking };
        default:
            return state;
    }
}

export default reducer;
