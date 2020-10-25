import { State as GlobalSettingsState } from './globalSettings';
import { State as GameState } from './game';

export interface AppState {
    self: AppState;
    globalSettings: GlobalSettingsState;
    game: GameState;
}
