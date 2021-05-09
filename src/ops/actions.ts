import countrySelection, {
    Actions as CountrySelection,
    ActionTypes as CountrySelectionActionTypes,
} from './country-selection/actions';
import game, {
    Actions as Game,
    ActionTypes as GameActionTypes,
} from './game/actions';
import websockets, {
    Actions as Websockets,
    ActionTypes as WebsocketsActionTypes,
} from './websockets/actions';

export type Actions =
    | CountrySelection
    | Game
    | Websockets
    ;

export const ActionTypes = {
    CountrySelectionActionTypes,
    GameActionTypes,
    WebsocketsActionTypes,
};

export default {
    countrySelection,
    game,
    websockets,
};
