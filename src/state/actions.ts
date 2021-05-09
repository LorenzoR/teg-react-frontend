import globalSettings, { Actions as GlobalSettings } from './globalSettings/actions';
import game, { Actions as Game } from './game/actions';
import countrySelection, { Actions as CountrySelection, ActionTypes as CountryActionTypes } from './country-selection/actions';
import modals, { Actions as Modals, ActionTypes as ModalsActionsTypes } from './modals/actions';
import websockets, { Actions as Websockets, ActionTypes as WebsocketsActionsTypes } from './websockets/actions';
import notifications, { Actions as NotificationsActions, ActionTypes as NotificationsActionsTypes } from './notifications/actions';

export type Actions =
    | GlobalSettings
    | Game
    | CountrySelection
    | Modals
    | Websockets
    | NotificationsActions
    ;

export const StateActionTypes = {
    CountryActionTypes,
    ModalsActionsTypes,
    WebsocketsActionsTypes,
    NotificationsActionsTypes,
}

export default {
    globalSettings,
    game,
    countrySelection,
    modals,
    websockets,
    notifications,
};
