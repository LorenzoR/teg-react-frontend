import { State as GlobalSettingsState } from './globalSettings';
import { State as GameState } from './game';
import { State as CountrySelection } from './country-selection';
import { State as CurrentTurn } from './current-turn';
import { State as Modals } from './modals';
import { State as Websockets } from './websockets';
import { State as Notifications } from './notifications';

export interface AppState {
    self: AppState;
    globalSettings: GlobalSettingsState;
    game: GameState;
    countrySelection: CountrySelection;
    currentTurn: CurrentTurn;
    modals: Modals;
    notifications: Notifications;
    websockets: Websockets;
}
