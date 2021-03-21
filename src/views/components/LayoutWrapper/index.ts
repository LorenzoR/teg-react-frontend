import { connect } from 'react-redux';
import LayoutWrapper, { Props } from './view';
import { AppState } from 'src/state';
import stateActions from 'src/state/actions';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'countries'
    | 'players'
    | 'round'
    | 'currentPlayer'
    | 'gameStatus'
    | 'eventsLog'
    | 'currentPlayerId'
    | 'countrySelection'
    | 'countryConqueredModalVisible'
    | 'countryCardsVisible'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        countries: state.game.countries,
        players: state.game.players,
        round: state.game.round,
        currentPlayer: state.game.me,
        gameStatus: state.game.gameStatus,
        eventsLog: state.game.eventsLog,
        currentPlayerId: data.game.me(state)?.id || '', // state.game.currentPlayerId,
        countrySelection: {
            source: data.countrySelection.source(state),
            target: data.countrySelection.target(state),
        },
        // Modals
        countryConqueredModalVisible: data.modals.isCountryConqueredVisible(state),
        countryCardsVisible: data.modals.isCountryCardsVisible(state),
    };
};

/*
type DispatchProps = Pick<Props, 'activateConfiguration' | 'configurationUpdate' | 'configurationSetValid'>;
const mapDispatchToProps: DispatchProps = {
    activateConfiguration: ops.configurations.activateConfiguration,
    configurationUpdate: ops.configurations.configurationUpdate,
    configurationSetValid: ops.configurations.configurationSetValid,
};
*/

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
    | 'setChooseColorOpen'
    >;

    /*
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    initGame: (payload: { countries: {}[], players: Player[] }) => dispatch(actions.game.initGame(payload)),
    setCountries: (payload: { countries: {}[] }) => dispatch(actions.game.setCountries(payload)),
    setPlayers: (payload: { players: Player[] }) => dispatch(actions.game.setPlayers(payload)),
    setRound: (payload: { round: Round }) => dispatch(actions.game.setRound(payload)),
    setCurrentPlayer: (payload: { currentPlayer: Player }) => dispatch(actions.game.setCurrentPlayer(payload)),
    setGameStatus: (payload: { gameStatus: string }) => dispatch(actions.game.setGameStatus(payload)),
    setCurrentPlayerId: (payload: SetCurrentPlayerId['payload']) => dispatch(actions.game.setCurrentPlayerId(payload)),
});
*/

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
    // Modals
    setChooseColorOpen: stateActions.modals.setChooseColorOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper);
