import { Actions, SET_LANGUAGE } from './actions';

export interface State {
    language: string;
}

const initialState: State = {
    language: 'en',
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, test: action.payload.value };
        default:
            return state;
    }
}

export default reducer;
