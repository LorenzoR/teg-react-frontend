import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from './reducers';
import mySaga from './sagas';
import gameReducer from './state/game';
import globalSettingsReducer from './state/globalSettings';

const rootReducer = combineReducers({
  globalSettings: globalSettingsReducer,
  game: gameReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
