import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from './reducers';
import { rootSaga } from './ops/ops';
import gameReducer from './state/game';
import globalSettingsReducer from './state/globalSettings';
import countrySelectionReducer from './state/country-selection';
import modalsReducer from './state/modals';
import messageServiceReducer from './state/message-service';

const rootReducer = combineReducers({
    globalSettings: globalSettingsReducer,
    game: gameReducer,
    countrySelection: countrySelectionReducer,
    modals: modalsReducer,
    messageService: messageServiceReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
