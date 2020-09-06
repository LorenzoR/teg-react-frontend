import { Actions, SOME_ACTION } from './actions';

export interface State {
    test: boolean;
}

const initialState: State = {
    test: true,
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case SOME_ACTION:
            return { ...state, test: action.payload.value };
        default:
            return state;
    }
}

export default reducer;
