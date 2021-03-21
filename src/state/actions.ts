import globalSettings, { Actions as GlobalSettings } from './globalSettings/actions';
import game, { Actions as Game } from './game/actions';
import countrySelection, { Actions as CountrySelection, ActionTypes as CountryActionTypes } from './country-selection/actions';
import modals, { Actions as Modals, ActionTypes as ModalsActionsTypes } from './modals/actions';
import messageService, { Actions as MessageService, ActionTypes as MessageServiceActionsTypes } from './message-service/actions';

export type Actions =
    | GlobalSettings
    | Game
    | CountrySelection
    | Modals
    | MessageService
    ;

export const StateActionTypes = {
    CountryActionTypes,
    ModalsActionsTypes,
    MessageServiceActionsTypes,
}

export default {
    globalSettings,
    game,
    countrySelection,
    modals,
    messageService,
};
