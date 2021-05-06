import { connect } from 'react-redux';
import ActivityTab, { Props } from './view';
import { AppState } from 'src/state';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'eventsLog'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    eventsLog: data.game.eventsLog(state),
});

export default connect(mapStateToProps)(ActivityTab);
