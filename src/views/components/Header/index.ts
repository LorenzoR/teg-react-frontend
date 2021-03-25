import { connect } from 'react-redux';
import GameHeader, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';

type StateProps = Pick<Props,
    | 'gameId'
    | 'players'
    | 'round'
    | 'currentPlayer'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        gameId: state.game.gameId,
        players: state.game.players,
        round: state.game.round,
        currentPlayer: state.game.me,
    };
};

type DispatchProps = Pick<Props,
    | 'onCounterFinish'
    | 'finishRoundHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    onCounterFinish: actions.game.requestCounterFinished,
    finishRoundHandler: actions.game.requestFinishRound,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameHeader);
