import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.notifications);

const showStartTurnNotification = createSelector(self, data => data.showStartTurnNotification);
const attackNotification = createSelector(self, data => data.attackNotification);
const countryConqueredNotification = createSelector(self, data => data.countryConqueredNotification);
const playerConnectedNotification = createSelector(self, data => data.playerConnectedNotification);
const showPlayerDisconnectedNotification = createSelector(self, data => data.showPlayerDisconnectedNotification);
const showCountryCardNotification = createSelector(self, data => data.showCountryCardNotification);
const showCountryCardExchangedNotification = createSelector(self, data => data.showCountryCardExchangedNotification);
const showCountryCardsExchangedNotification = createSelector(self, data => data.showCountryCardsExchangedNotification);
const showErrorNotification = createSelector(self, data => data.showErrorNotification);

export default {
    self,
    showStartTurnNotification,
    attackNotification,
    countryConqueredNotification,
    playerConnectedNotification,
    showPlayerDisconnectedNotification,
    showCountryCardNotification,
    showCountryCardExchangedNotification,
    showCountryCardsExchangedNotification,
    showErrorNotification,
};
