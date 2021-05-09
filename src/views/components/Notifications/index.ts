import { connect } from 'react-redux';
import { NotificationsView, Props } from './view';
import { AppState } from 'src/state';
import data from 'src/ops-read';

type StateProps = Pick<Props,
    | 'showStartTurnNotification'
    | 'isPlayerMissionOpen'
    | 'attackNotification'
    | 'countryConqueredNotification'
    | 'playerConnectedNotification'
    | 'showPlayerDisconnectedNotification'
    | 'showCountryCardNotification'
    | 'showCountryCardExchangedNotification'
    | 'showCountryCardsExchangedNotification'
    | 'showErrorNotification'
    | 'players'
    | 'round'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    showStartTurnNotification: data.notifications.showStartTurnNotification(state),
    isPlayerMissionOpen: data.modals.isPlayerMissionOpen(state),
    attackNotification: data.notifications.attackNotification(state),
    countryConqueredNotification: data.notifications.countryConqueredNotification(state),
    playerConnectedNotification: data.notifications.playerConnectedNotification(state),
    showPlayerDisconnectedNotification: data.notifications.showPlayerDisconnectedNotification(state),
    showCountryCardNotification: data.notifications.showCountryCardNotification(state),
    showCountryCardExchangedNotification: data.notifications.showCountryCardExchangedNotification(state),
    showCountryCardsExchangedNotification: data.notifications.showCountryCardsExchangedNotification(state),
    showErrorNotification: data.notifications.showErrorNotification(state),
    players: data.game.players(state),
    round: data.game.round(state),
});

export const Notifications = connect(mapStateToProps)(NotificationsView);
