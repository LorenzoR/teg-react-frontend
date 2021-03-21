import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.modals);

const isAttacking = createSelector(self, data => data.isAttacking);
const isSpinnerVisible = createSelector(self, data => data.isSpinnerVisible);

const isCardsModalOpen = createSelector(self, data => data.isCardsModalOpen);
const isChooseColorVisible = createSelector(self, data => data.isChooseColorVisible);
const isCountryCardsVisible = createSelector(self, data => data.isCountryCardsVisible);
const isGameFinishedVisible = createSelector(self, data => data.isGameFinishedVisible);
const isCountryConqueredVisible = createSelector(self, data => data.isCountryConqueredVisible);

export default {
    self,
    isAttacking,
    isSpinnerVisible,
    isCardsModalOpen,
    isChooseColorVisible,
    isCountryCardsVisible,
    isGameFinishedVisible,
    isCountryConqueredVisible,
};
