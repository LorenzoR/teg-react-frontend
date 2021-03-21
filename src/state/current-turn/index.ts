import RoundType from 'src/models/Round';
import { Actions, ActionTypes } from './actions';

export interface State {
    roundType: string;
    player: string;
}

const initialState: State = {
    roundType: RoundType.FIRST_ADD_TROOPS,
    player: '',
};

const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_PLAYER:
            return { ...state, player: action.payload.player };
        case ActionTypes.SET_ROUND_TYPE:
            return { ...state, roundType: action.payload.roundType };
        default:
            return state;
    }
}

export default reducer;
