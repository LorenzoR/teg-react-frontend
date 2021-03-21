import { Actions, ActionTypes } from './actions';

export interface State {
    source: string;
    target: string;
}

const initialState: State = {
    source: '',
    target: '',
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_SOURCE:
            return { ...state, source: action.payload.source };
        case ActionTypes.SET_TARGET:
            return { ...state, target: action.payload.target };
        default:
            return state;
    }
}

export default reducer;
