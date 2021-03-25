import { connect } from 'react-redux';
import GameFinishedModal, { Props } from './view';
import { AppState } from 'src/state';
// import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'visible'
    | 'winner'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    visible: data.modals.isGameFinishedVisible(state),
    winner: data.game.winner(state),
});

/*
type DispatchProps = Pick<Props,
    | 'moveTroopsHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    moveTroopsHandler: actions.game.requestMoveTroops,
};
*/

export default connect(mapStateToProps)(GameFinishedModal);
