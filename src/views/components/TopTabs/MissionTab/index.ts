import { connect } from 'react-redux';
import MissionTab, { Props } from './view';
import { AppState } from 'src/state';
import data from 'src/ops-read';

type StateProps = Pick<Props,
    | 'players'
    | 'currentPlayerId'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    players: data.game.players(state),
    currentPlayerId: data.game.me(state)?.id || '', // state.game.currentPlayerId,
});

export default connect(mapStateToProps)(MissionTab);
