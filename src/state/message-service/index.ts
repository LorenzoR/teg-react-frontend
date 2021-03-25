import { Actions, ActionTypes } from './actions';
import WebsocketService from 'src/services/websocket';

export interface State {
    client?: WebsocketService;
}

const initialState: State = {
    client: undefined,
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_CLIENT:
            return { ...state, client: action.payload.client };
        default:
            return state;
    }
}

export default reducer;
