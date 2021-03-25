import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.currentTurn);

const roundType = createSelector(self, data => data.roundType);
const player = createSelector(self, data => data.player);

export default {
    self,
    roundType,
    player,
};
