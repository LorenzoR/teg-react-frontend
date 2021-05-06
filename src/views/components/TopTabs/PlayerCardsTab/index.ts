import { connect } from 'react-redux';
import PlayerCardsTab, { Props } from './view';
import { AppState } from 'src/state';
// import stateActions from 'src/state/actions';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'currentPlayer'
    | 'countries'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    currentPlayer: data.game.currentPlayer(state),
    countries: data.game.countries(state),
});

type DispatchProps = Pick<Props,
    | 'changeCardHandler'
    | 'changeCardsHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    changeCardHandler: actions.game.requestExchangeCard,
    changeCardsHandler: actions.game.requestExchangeCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCardsTab);
