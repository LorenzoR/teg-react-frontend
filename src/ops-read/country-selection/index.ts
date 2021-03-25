import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.countrySelection);

const source = createSelector(self, data => data.source);
const target = createSelector(self, data => data.target);

export default {
    self,
    source,
    target,
};
