import { connect } from 'react-redux';
import LayoutWrapper, { Props } from './view';
import { AppState } from 'src/state';
import stateActions from 'src/state/actions';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'players'
    | 'round'
    | 'currentPlayer'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        players: data.game.players(state),
        round: data.game.round(state),
        currentPlayer: data.game.me(state),
    };
};

type DispatchProps = Pick<Props,
    | 'initGame'
    | 'setCountries'
    | 'setPlayers'
    | 'setRound'
    | 'setCurrentPlayer'
    | 'setGameStatus'
    | 'setCurrentPlayerId'
    | 'selectCountry'
    | 'setSource'
    | 'setTarget'
    | 'setGameId'
    | 'playersInfoReceived'
    | 'joinedGame'
    | 'countryAttacked'
    | 'troopsMoved'
    | 'setWinner'
    | 'setChooseColorOpen'
    | 'setSpinnerVisible'
    | 'setGameFinishedOpen'
    >;

const mapDispatchToProps: DispatchProps = {
    initGame: stateActions.game.initGame,
    setCountries: stateActions.game.setCountries,
    setPlayers: stateActions.game.setPlayers,
    setRound: stateActions.game.setRound,
    setCurrentPlayer: stateActions.game.setCurrentPlayer,
    setGameStatus: stateActions.game.setGameStatus,
    setCurrentPlayerId: stateActions.game.setCurrentPlayerId,
    selectCountry: actions.countrySelection.selectCountry,
    setSource: stateActions.countrySelection.setSource,
    setTarget: stateActions.countrySelection.setTarget,

    setGameId: stateActions.game.setGameId,
    playersInfoReceived: actions.game.playersInfoReceived,
    joinedGame: actions.game.joinedGame,

    countryAttacked: actions.game.countryAttacked,
    troopsMoved: actions.game.troopsMoved,
    setWinner: stateActions.game.setWinner,
    // Modals
    setChooseColorOpen: stateActions.modals.setChooseColorOpen,
    setSpinnerVisible: stateActions.modals.setSpinnerVisible,
    setGameFinishedOpen: stateActions.modals.setGameFinishedOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper);
