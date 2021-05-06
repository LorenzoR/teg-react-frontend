import { createSelector } from 'reselect';
import state from '../common';

const self = createSelector(state, data => data.game);

const gameId = createSelector(self, data => data.gameId);
const countries = createSelector(self, data => data.countries);
const players = createSelector(self, data => data.players);
const round = createSelector(self, data => data.round);
const me = createSelector(self, data => data.me);
const currentPlayer = createSelector(self, data => data.players[data.round.playerIndex]);
const currentPlayerId = createSelector(self, data => data.currentPlayerId);
const eventsLog = createSelector(self, data => data.eventsLog);
const isAttacking = createSelector(self, data => data.isAttacking);
const dices = createSelector(self, data => data.dices);
const gameStatus = createSelector(self, data => data.gameStatus);
const winner = createSelector(self, data => data.winner);
const chatMessages = createSelector(self, data => data.chatMessages);

export default {
    self,
    gameId,
    countries,
    players,
    round,
    me,
    currentPlayer,
    currentPlayerId,
    eventsLog,
    isAttacking,
    dices,
    gameStatus,
    winner,
    chatMessages,
};
