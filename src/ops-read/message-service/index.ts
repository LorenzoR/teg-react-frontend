import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.messageService);

const client = createSelector(self, data => data.client);

export default {
    self,
    client,
};
