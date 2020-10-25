import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import ops from 'src/ops/actions';
import LayoutWrapper, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/state/actions';
import Player from 'src/models/Player';
import { Round } from 'src/models/Round';

type StateProps = Pick<Props, 
    | 'countries'
    | 'players'
    | 'round'
    | 'currentPlayer'
    | 'gameStatus'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        countries: state.game.countries,
        players: state.game.players,
        round: state.game.round,
        currentPlayer: state.game.currentPlayer,
        gameStatus: state.game.gameStatus,
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
    >;

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    initGame: (payload: { countries: {}[], players: Player[] }) => dispatch(actions.game.initGame(payload)),
    setCountries: (payload: { countries: {}[] }) => dispatch(actions.game.setCountries(payload)),
    setPlayers: (payload: { players: Player[] }) => dispatch(actions.game.setPlayers(payload)),
    setRound: (payload: { round: Round }) => dispatch(actions.game.setRound(payload)),
    setCurrentPlayer: (payload: { currentPlayer: Player }) => dispatch(actions.game.setCurrentPlayer(payload)),
    setGameStatus: (payload: { gameStatus: string }) => dispatch(actions.game.setGameStatus(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper);
