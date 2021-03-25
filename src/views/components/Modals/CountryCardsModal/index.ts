import { connect } from 'react-redux';
import CountryCardsModal, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';
import data from 'src/ops-read';
import stateActions from 'src/state/actions';

type StateProps = Pick<Props,
    | 'countryCardsVisible'
    | 'currentPlayer'
    | 'countries'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    // countryCardsVisible: data.modals.isCountryCardsVisible(state),
    countryCardsVisible: data.modals.isCardsModalOpen(state),
    currentPlayer: data.game.currentPlayer(state),
    countries: data.game.countries(state),
});

type DispatchProps = Pick<Props,
    | 'changeCardHandler'
    | 'changeCardsHandler'
    | 'setCardsModalOpen'
    >;

const mapDispatchToProps: DispatchProps = {
    changeCardHandler: actions.game.requestExchangeCard,
    changeCardsHandler: actions.game.requestExchangeCards,
    setCardsModalOpen: stateActions.modals.setCardsModalOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryCardsModal);
