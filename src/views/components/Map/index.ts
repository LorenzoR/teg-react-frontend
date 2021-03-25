import { connect } from 'react-redux';
import Map, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props,
    | 'countries'
    | 'countrySelection'
    | 'spinnerVisible'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    countries: data.game.countries(state),
    countrySelection: {
        source: data.countrySelection.source(state),
        target: data.countrySelection.target(state),
    },
    spinnerVisible: data.modals.isSpinnerVisible(state),
});

type DispatchProps = Pick<Props,
    | 'countryClickedHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    countryClickedHandler: actions.countrySelection.selectCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
