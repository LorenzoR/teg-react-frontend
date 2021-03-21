import { put, select } from 'redux-saga/effects';
import Country from 'src/models/Country';
import Player from 'src/models/Player';
import RoundType, { Round } from 'src/models/Round';
import data from 'src/ops-read/index';
import CountryService from 'src/services/game/countryService';
import stateActions from 'src/state/actions';
import { SelectCountry } from './actions';

export function* watchCountrySelection(action: SelectCountry) {
    const currentPlayer: Player = yield select(data.game.currentPlayer);
    const currentPlayerColor = currentPlayer?.color;
    let source: string = yield select(data.countrySelection.source);
    let target: string = yield select(data.countrySelection.target);
    const me: Player = yield select(data.game.me);

    if (currentPlayerColor !== me.color) { // action.payload.playerColor) {
        return null;
    }

    try {
        const round: Round = yield select(data.game.round);
        const roundType = round?.type;
        const countries: Country[] = yield select(data.game.countries);

        const selectedCountryKey = action.payload.countryKey;
        const selectedCountry = countries.find((o) => o.countryKey === selectedCountryKey);

        if (!selectedCountry) {
            throw new Error(`No country with key ${selectedCountryKey}`);
        }

        if (!selectedCountry?.state?.player) {
            throw new Error(`No player in country ${selectedCountryKey}`);
        }

        if ([RoundType.ATTACK, RoundType.MOVE_TROOPS].includes(roundType)) {
          if (!source) {
            // Check country belongs to player
            if (selectedCountry.state.player.color === currentPlayerColor) {
              // Select source
              source = selectedCountryKey;
            }
          } else if (!target) {
            if (!CountryService.areNeighbours(source, selectedCountryKey)) {
              // If they are not neighbours, reset source selection
              // Check country belongs to player
              if (selectedCountry.state.player.color === currentPlayerColor) {
                source = selectedCountryKey;
              }
            }
            else if (source !== target) {
              // Select destiny
              target = selectedCountryKey;
            }
          } else {
            // Check country belongs to player
            if (selectedCountry.state.player.color === currentPlayerColor) {
              // Select source and clear destiny
              source = selectedCountryKey;
              target = '';
            }
          }
        } else if ([RoundType.ADD_TROOPS, RoundType.FIRST_ADD_TROOPS, RoundType.SECOND_ADD_TROOPS].includes(roundType)) {
          // Check country belongs to player
          if (selectedCountry.state.player.color === currentPlayerColor) {
            // Select source and clear destiny
            source = selectedCountryKey;
            target = '';
          }
        }
    } catch (error) {
        // yield put(handleAjaxException(error));
    } finally {
        // yield put(actions.currentPersonalReport.setDoneStatuses({ doneStatuses: [] }));
    }

    yield put(stateActions.countrySelection.setSource({ source }));
    yield put(stateActions.countrySelection.setTarget({ target }));
}
