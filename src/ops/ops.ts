import { all, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import { watchCountrySelection } from './country-selection/ops';
import {
    watchRequestAddTroops, watchInitGame, watchPlayersInfoReceived,
    watchRequestJoinGame, watchJoinedGame, watchRequestStartGame,
    watchRequestFinishRound, watchRequestAttack, watchCountryAttacked,
    watchTroopsMoved, watchRequestMoveTroops, watchRequestGetCountryCard,
    watchRequestExchangeCard, watchRequestExchangeCards, watchRequestSendChatMessage,
} from './game/ops';

export function* rootSaga() {
    yield all([
        takeEvery(ActionTypes.GameActionTypes.PLAYERS_INFO_RECEIVED, watchPlayersInfoReceived),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_JOIN_GAME, watchRequestJoinGame),
        takeEvery(ActionTypes.GameActionTypes.JOINED_GAME, watchJoinedGame),

        takeEvery(ActionTypes.CountrySelectionActionTypes.SELECT_COUNTRY, watchCountrySelection),

        takeEvery(ActionTypes.GameActionTypes.INIT_GAME, watchInitGame),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_ADD_TROOPS, watchRequestAddTroops),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_START_GAME, watchRequestStartGame),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_FINISH_ROUND, watchRequestFinishRound),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_ATTACK, watchRequestAttack),
        takeEvery(ActionTypes.GameActionTypes.REQUEST_MOVE_TROOPS, watchRequestMoveTroops),

        takeEvery(ActionTypes.GameActionTypes.COUNTRY_ATTACKED, watchCountryAttacked),
        takeEvery(ActionTypes.GameActionTypes.TROOPS_MOVED, watchTroopsMoved),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_GET_COUNTRY_CARD, watchRequestGetCountryCard),
        takeEvery(ActionTypes.GameActionTypes.REQUEST_EXCHANGE_CARD, watchRequestExchangeCard),
        takeEvery(ActionTypes.GameActionTypes.REQUEST_EXCHANGE_CARDS, watchRequestExchangeCards),

        takeEvery(ActionTypes.GameActionTypes.REQUEST_SEND_CHAT_MSG, watchRequestSendChatMessage),
    ]);
}
