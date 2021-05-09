import Country from 'src/models/Country';
import { ActionCreator, ActionCreatorWithPayload } from 'src/utils/types';

const SHOW_START_TURN_NOTIFICATION: 'SHOW_START_TURN_NOTIFICATION' = 'SHOW_START_TURN_NOTIFICATION';
const SHOW_ATTACK_NOTIFICATION: 'SHOW_ATTACK_NOTIFICATION' = 'SHOW_ATTACK_NOTIFICATION';
const SHOW_COUNTRY_CONQUERED_NOTIFICATION: 'SHOW_COUNTRY_CONQUERED_NOTIFICATION' = 'SHOW_COUNTRY_CONQUERED_NOTIFICATION';
const SHOW_PLAYER_CONNECTED_NOTIFICATION: 'SHOW_PLAYER_CONNECTED_NOTIFICATION' = 'SHOW_PLAYER_CONNECTED_NOTIFICATION';
const SHOW_PLAYER_DISCONNECTED_NOTIFICATION: 'SHOW_PLAYER_DISCONNECTED_NOTIFICATION' = 'SHOW_PLAYER_DISCONNECTED_NOTIFICATION';
const SHOW_COUNTRY_CARD_NOTIFICATION: 'SHOW_COUNTRY_CARD_NOTIFICATION' = 'SHOW_COUNTRY_CARD_NOTIFICATION';
const SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION: 'SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION' = 'SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION';
const SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION: 'SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION' = 'SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION';
const SHOW_ERROR_NOTIFICATION: 'SHOW_ERROR_NOTIFICATION' = 'SHOW_ERROR_NOTIFICATION'

export interface ShowStartTurnNotification {
    type: typeof SHOW_START_TURN_NOTIFICATION;
}

export const showStartTurnNotification: ActionCreator<ShowStartTurnNotification> = () => ({
    type: SHOW_START_TURN_NOTIFICATION,
});

export interface ShowAttackNotification {
    type: typeof SHOW_ATTACK_NOTIFICATION;
    payload: {
        attacker: Country;
        defender: Country;
    };
}

export const showAttackNotification: ActionCreatorWithPayload<ShowAttackNotification> = payload => ({
    type: SHOW_ATTACK_NOTIFICATION,
    payload,
});

export interface ShowCountryConqueredNotification {
    type: typeof SHOW_COUNTRY_CONQUERED_NOTIFICATION;
    payload: {
        attacker: Country;
        defender: Country;
    };
}

export const showCountryConqueredNotification: ActionCreatorWithPayload<ShowCountryConqueredNotification> = payload => ({
    type: SHOW_COUNTRY_CONQUERED_NOTIFICATION,
    payload,
});

export interface ShowPlayerConnectedNotification {
    type: typeof SHOW_PLAYER_CONNECTED_NOTIFICATION;
    payload: {
        playerName: string;
    };
}

export const showPlayerConnectedNotification: ActionCreatorWithPayload<ShowPlayerConnectedNotification> = payload => ({
    type: SHOW_PLAYER_CONNECTED_NOTIFICATION,
    payload,
});

export interface ShowPlayerDisconnectedNotification {
    type: typeof SHOW_PLAYER_DISCONNECTED_NOTIFICATION;
    payload: {
        playerName: string;
    };
}

export const showPlayerDisconnectedNotification: ActionCreatorWithPayload<ShowPlayerDisconnectedNotification> = payload => ({
    type: SHOW_PLAYER_DISCONNECTED_NOTIFICATION,
    payload,
});

export interface ShowCountryCardNotification {
    type: typeof SHOW_COUNTRY_CARD_NOTIFICATION;
    payload: {
        playerName: string;
    };
}

export const showCountryCardNotification: ActionCreatorWithPayload<ShowCountryCardNotification> = payload => ({
    type: SHOW_COUNTRY_CARD_NOTIFICATION,
    payload,
});

export interface ShowCountryCardExchangedNotification {
    type: typeof SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION;
}

export const showCountryCardExchangedNotification: ActionCreator<ShowCountryCardExchangedNotification> = () => ({
    type: SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION,
});

export interface ShowCountryCardsExchangedNotification {
    type: typeof SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION;
}

export const showCountryCardsExchangedNotification: ActionCreator<ShowCountryCardsExchangedNotification> = () => ({
    type: SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION,
});

export interface ShowErrorNotification {
    type: typeof SHOW_ERROR_NOTIFICATION;
    payload: {
        message: string;
        description: string;
    };
}

export const showErrorNotification: ActionCreatorWithPayload<ShowErrorNotification> = payload => ({
    type: SHOW_ERROR_NOTIFICATION,
    payload,
});

export const ActionTypes = {
    SHOW_START_TURN_NOTIFICATION,
    SHOW_ATTACK_NOTIFICATION,
    SHOW_COUNTRY_CONQUERED_NOTIFICATION,
    SHOW_PLAYER_CONNECTED_NOTIFICATION,
    SHOW_PLAYER_DISCONNECTED_NOTIFICATION,
    SHOW_COUNTRY_CARD_NOTIFICATION,
    SHOW_COUNTRY_CARD_EXCHANGED_NOTIFICATION,
    SHOW_COUNTRY_CARDS_EXCHANGED_NOTIFICATION,
    SHOW_ERROR_NOTIFICATION,
};

export type Actions =
    | ShowStartTurnNotification
    | ShowAttackNotification
    | ShowCountryConqueredNotification
    | ShowPlayerConnectedNotification
    | ShowPlayerDisconnectedNotification
    | ShowCountryCardNotification
    | ShowCountryCardExchangedNotification
    | ShowCountryCardsExchangedNotification
    | ShowErrorNotification
    ;

export default {
    showStartTurnNotification,
    showAttackNotification,
    showCountryConqueredNotification,
    showPlayerConnectedNotification,
    showPlayerDisconnectedNotification,
    showCountryCardNotification,
    showCountryCardExchangedNotification,
    showCountryCardsExchangedNotification,
    showErrorNotification,
};
