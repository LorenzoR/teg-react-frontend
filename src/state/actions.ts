import globalSettings, { Actions as GlobalSettings } from './globalSettings/actions';
import game, { Actions as Game } from './game/actions';

export type Actions =
    | GlobalSettings
    | Game
    ;

export default {
    globalSettings,
    game,
};
