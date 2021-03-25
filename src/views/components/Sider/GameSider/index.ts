import { connect } from 'react-redux';
import GameSider, { Props } from './view';
import { AppState } from 'src/state';
import data from 'src/ops-read';

type StateProps = Pick<Props,
    | 'dices'
    | 'currentPlayer'
    | 'players'
    | 'round'
    | 'countrySelection'
    | 'countries'
    | 'gameStatus'
    | 'currentPlayerId'
    | 'isAttacking'
    | 'spinnerVisible'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        dices: data.game.dices(state),
        currentPlayer: data.game.me(state),
        players: data.game.players(state),
        round: data.game.round(state),
        countrySelection: {
            source: data.countrySelection.source(state),
            target: data.countrySelection.target(state),
        },
        // countriesCount: number;
        countries: data.game.countries(state),
        // spinnerVisible: boolean;
        isAttacking: data.game.isAttacking(state),
        gameStatus: state.game.gameStatus,
        currentPlayerId: data.game.me(state)?.id || '', // state.game.currentPlayerId,
        spinnerVisible: data.modals.isSpinnerVisible(state),
    };
};

export default connect(mapStateToProps)(GameSider);
