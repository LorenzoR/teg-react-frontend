import { put, takeEvery, all } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import { SomeAction } from 'src/state/game/actions';

function MockApi(userId: string): string {
    return userId;
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: SomeAction) {
    try {
        // const user = yield call(Api.fetchUser, action.payload.userId);
        const user = yield MockApi(action.payload.value ? 'true' : 'false');
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield all([
        yield takeEvery(ActionTypes.SOME_ACTION, fetchUser),
    ]);
}

export default mySaga;