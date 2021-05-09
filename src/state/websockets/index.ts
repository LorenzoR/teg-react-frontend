import { Actions, ActionTypes } from './actions';

export interface State {
    message: {
        action: string;
        body: any;
    };
}

const initialState: State = {
    message: {
        action: '',
        body: undefined,
    },
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_RECEIVED_MESSAGE:
            return { ...state, message: action.payload.message };
        default:
            return state;
    }
}

export default reducer;
