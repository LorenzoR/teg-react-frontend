import Country from 'src/models/Country';
import { Actions, ActionTypes } from './actions';

export interface State {
    showStartTurnNotification: boolean;
    attackNotification: {
        show: boolean;
        attacker?: Country;
        defender?: Country;
    };
    countryConqueredNotification: {
        show: boolean;
        attacker?: Country;
        defender?: Country;
    };
    playerConnectedNotification: {
        show: boolean;
        playerName: string;
    };
    showPlayerDisconnectedNotification: {
        show: boolean;
        playerName: string;
    };
    showCountryCardNotification: {
        show: boolean;
        playerName: string;
    };
    showErrorNotification: {
        show: boolean;
        message: string;
        description: string;
    };
    showCountryCardExchangedNotification: boolean;
    showCountryCardsExchangedNotification: boolean;
}

const initialState: State = {
    showStartTurnNotification: false,
    attackNotification: {
        show: false,
        attacker: undefined,
        defender: undefined,
    },
    countryConqueredNotification: {
        show: false,
        attacker: undefined,
        defender: undefined,
    },
    playerConnectedNotification: {
        show: false,
        playerName: '',
    },
    showPlayerDisconnectedNotification: {
        show: false,
        playerName: '',
    },
    showCountryCardNotification: {
        show: false,
        playerName: '',
    },
    showErrorNotification: {
        show: false,
        message: '',
        description: '',
    },
    showCountryCardExchangedNotification: false,
    showCountryCardsExchangedNotification: false,
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SHOW_START_TURN_NOTIFICATION:
            return { ...state, showStartTurnNotification: true };
        case ActionTypes.SHOW_ATTACK_NOTIFICATION:
            return {
                ...state,
                attackNotification: {
                    show: true,
                    ...action.payload,
                },
            };
        case ActionTypes.SHOW_COUNTRY_CONQUERED_NOTIFICATION:
            return {
                ...state,
                countryConqueredNotification: {
                    show: true,
                    ...action.payload,
                },
            };
        case ActionTypes.SHOW_PLAYER_CONNECTED_NOTIFICATION:
            return {
                ...state,
                playerConnectedNotification: {
                    show: true,
                    ...action.payload,
                },
            };
        case ActionTypes.SHOW_PLAYER_DISCONNECTED_NOTIFICATION:
            return {
                ...state,
                showPlayerDisconnectedNotification: {
                    show: true,
                    ...action.payload,
                },
            };
        case ActionTypes.SHOW_COUNTRY_CARD_NOTIFICATION:
            return {
                ...state,
                showCountryCardNotification: {
                    show: true,
                    ...action.payload,
                },
            };
        case ActionTypes.SHOW_ERROR_NOTIFICATION:
            return {
                ...state,
                showErrorNotification: {
                    show: true,
                    ...action.payload,
                },
            };
        case ActionTypes.SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION:
            return { ...state, showCountryCardExchangedNotification: true };
        case ActionTypes.SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION:
            return { ...state, showCountryCardsExchangedNotification: true };
        default:
            return state;
    }
}

export default reducer;
