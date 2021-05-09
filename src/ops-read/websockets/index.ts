import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.websockets);

const message = createSelector(self, data => data.message);

export default {
    self,
    message,
};
