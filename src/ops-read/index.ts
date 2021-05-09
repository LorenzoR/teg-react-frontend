import { AppState } from 'src/state';
import countrySelection from './country-selection';
import currentTurn from './current-turn';
import game from './game';
import websockets from './websockets';
import modals from './modals';
import notifications from './notifications';

export type { AppState };

export default {
    countrySelection,
    currentTurn,
    game,
    websockets,
    modals,
    notifications,
};
