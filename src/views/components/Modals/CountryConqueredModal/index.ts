import { connect } from 'react-redux';
import countryConqueredModal, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'countryConqueredModalVisible'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    countryConqueredModalVisible: data.modals.isCountryConqueredVisible(state),
});

type DispatchProps = Pick<Props,
    | 'moveTroopsHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    moveTroopsHandler: actions.game.requestMoveTroops,
};

export default connect(mapStateToProps, mapDispatchToProps)(countryConqueredModal);
