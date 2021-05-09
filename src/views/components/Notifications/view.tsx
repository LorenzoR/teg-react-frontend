import React, { Component } from 'react';

import { notification, Modal } from 'antd';
import { Alert } from 'antd';

import RoundType, { Round } from 'src/models/Round';

import Player from 'src/models/Player';

import { AppState } from 'src/state';

export interface Props {
    players: Player[];
    round: Round;
    showStartTurnNotification: boolean;
    isPlayerMissionOpen: boolean;
    attackNotification: AppState['notifications']['attackNotification'];
    countryConqueredNotification: AppState['notifications']['countryConqueredNotification'];
    playerConnectedNotification: AppState['notifications']['playerConnectedNotification'];
    showPlayerDisconnectedNotification: AppState['notifications']['showPlayerDisconnectedNotification'];
    showCountryCardNotification: AppState['notifications']['showCountryCardNotification'];
    showCountryCardExchangedNotification: AppState['notifications']['showCountryCardExchangedNotification'];
    showCountryCardsExchangedNotification: AppState['notifications']['showCountryCardsExchangedNotification'];
    showErrorNotification: AppState['notifications']['showErrorNotification'];
}

export class NotificationsView extends Component<Props> {
    public componentDidUpdate(prevProps: Props) {
        if (this.props.showStartTurnNotification && this.props.showStartTurnNotification !== prevProps.showStartTurnNotification) {
            this.showStartTurnNotifiction();
        }

        if (this.props.isPlayerMissionOpen && this.props.isPlayerMissionOpen !== prevProps.isPlayerMissionOpen) {
            this.showPlayerMission();
        }

        if (this.props.attackNotification.show && this.props.attackNotification.show !== prevProps.attackNotification.show) {
            this.showAtackNotification();
        }

        if (this.props.countryConqueredNotification.show && this.props.countryConqueredNotification.show !== prevProps.countryConqueredNotification.show) {
            this.showCountryConqueredNotification();
        }

        if (this.props.playerConnectedNotification.show && this.props.playerConnectedNotification.show !== prevProps.playerConnectedNotification.show) {
            this.showPlayerConnectedNotification();
        }

        if (this.props.showPlayerDisconnectedNotification.show && this.props.showPlayerDisconnectedNotification.show !== prevProps.showPlayerDisconnectedNotification.show) {
            this.showPlayerDisconnectedNotification();
        }

        if (this.props.showCountryCardNotification.show && this.props.showCountryCardNotification.show !== prevProps.showCountryCardNotification.show) {
            this.showCardNotification();
        }

        if (this.props.showCountryCardExchangedNotification && this.props.showCountryCardExchangedNotification !== prevProps.showCountryCardExchangedNotification) {
            this.showCountryCardExchangedNotification();
        }

        if (this.props.showCountryCardsExchangedNotification && this.props.showCountryCardsExchangedNotification !== prevProps.showCountryCardsExchangedNotification) {
            this.showCountryCardsExchangedNotification();
        }

        if (this.props.showCountryCardNotification.show && this.props.showCountryCardNotification.show !== prevProps.showCountryCardNotification.show) {
            this.showCardNotification();
        }

        if (this.props.showErrorNotification.show && this.props.showErrorNotification.show !== prevProps.showErrorNotification.show) {
            this.showErrorNotification();
        }
    }

    public render() {
        return <div></div>;
    }

    // Show popup with player's mission
    // private showPlayerMission = (players: Player[]) => {
    private showPlayerMission = () => {
        const players = this.props.players;
        let missionText;
        players.forEach((player) => {
            if (player.mission) {
                missionText = player.mission.text;
            }
        })

        Modal.info({
            title: 'Mission',
            content: (
                <Alert message={missionText} type="info" />
            ),
            onOk() { },
        });
    }

    // showStartTurnNotifiction = (roundType: string) => {
    private showStartTurnNotifiction = () => {
        const roundType = this.props.round.type;

        let description = null;

        if (roundType === RoundType.FIRST_ADD_TROOPS) {
            description = 'Please add 5 troops';
        } else if (roundType === RoundType.SECOND_ADD_TROOPS) {
            description = 'Please add 3 troops';
        } else if (roundType === RoundType.ADD_TROOPS) {
            description = 'Please add troops';
        } else if (roundType === RoundType.ATTACK) {
            description = 'You can attack or move troops';
        }

        // Notification
        notification.info({
            message: 'Your turn!',
            description,
            placement: 'bottomLeft',
        });
    }

    private showAtackNotification = () => {
        if (this.props.attackNotification.attacker && this.props.attackNotification.defender) {
            notification.info({
                message: `${this.props.attackNotification.attacker.countryKey} attacked ${this.props.attackNotification.defender.countryKey}`,
                description: '',
                // description: `${dices.attacker.join(' - ')} vs ${dices.defender.join(' - ')}`,
                placement: 'bottomLeft',
            });
        }
    }

    private showCountryConqueredNotification = () => {
        if (this.props.countryConqueredNotification.attacker && this.props.countryConqueredNotification.defender) {
            const attacker = this.props.countryConqueredNotification.attacker;
            const defender = this.props.countryConqueredNotification.defender;

            notification.info({
                message: 'Country conquered!',
                description: `${attacker.countryKey} conquered ${defender.countryKey}`,
                placement: 'bottomLeft',
            });
        }
    }

    private showPlayerConnectedNotification = () => {
        if (this.props.playerConnectedNotification?.playerName) {
            notification.info({
                message: `Player connected`,
                description: `Player ${this.props.playerConnectedNotification.playerName} back online`,
                placement: 'bottomLeft',
            });
        }
    }

    private showPlayerDisconnectedNotification = () => {
        if (this.props.showPlayerDisconnectedNotification?.playerName) {
            notification.info({
                message: `Player disconnected`,
                description: `Player ${this.props.showPlayerDisconnectedNotification?.playerName} got disconnected`,
                placement: 'bottomLeft',
            });
        }
    }

    private showCardNotification = () => {
        if (this.props.showCountryCardNotification?.playerName) {
            notification.info({
                message: `Country card`,
                description: `Player ${this.props.showCountryCardNotification.playerName} got a card`,
                placement: 'bottomLeft',
            });
        }
    }

    private showCountryCardExchangedNotification = () => {
        notification.info({
            message: `Country card`,
            description: `Card exchanged`,
            placement: 'bottomLeft',
        });
    }

    private showCountryCardsExchangedNotification = () => {
        notification.info({
            message: `Country cards`,
            description: `Cards exchanged`,
            placement: 'bottomLeft',
        });
    }

    private showErrorNotification = () => {
        if (this.props.showErrorNotification?.description) {
            notification.error({
                message: 'Error',
                description: this.props.showErrorNotification.description,
                placement: 'bottomLeft',
            });
        }
    }
}
