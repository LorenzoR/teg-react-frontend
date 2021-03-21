import { AppState } from 'src/state';
import countrySelection from './country-selection';
import currentTurn from './current-turn';
import game from './game';
import messageService from './message-service';
import modals from './modals';

export type { AppState };

export default {
    countrySelection,
    currentTurn,
    game,
    messageService,
    modals,
};
