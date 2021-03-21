import countrySelection, {
    Actions as CountrySelection,
    ActionTypes as CountrySelectionActionTypes,
} from './country-selection/actions';
import game, {
    Actions as Game,
    ActionTypes as GameActionTypes,
} from './game/actions';

export type Actions =
    | CountrySelection
    | Game
    ;

export const ActionTypes = {
    CountrySelectionActionTypes,
    GameActionTypes,
};

export default {
    countrySelection,
    game,
};
