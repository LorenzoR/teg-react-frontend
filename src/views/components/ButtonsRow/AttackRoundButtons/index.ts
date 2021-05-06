import { connect } from 'react-redux';
import AttackRoundButtons, { Props } from './view';
import { AppState } from 'src/state';
import data from 'src/ops-read';
import actions from 'src/ops/actions';
import stateActions from 'src/state/actions';

type StateProps = Pick<Props, 
    | 'round'
    | 'currentPlayerId'
    | 'players'
    | 'countrySelection'
    | 'countries'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    round: data.game.round(state),
    currentPlayerId: data.game.currentPlayerId(state),
    players: data.game.players(state),
    countrySelection: {
        source: data.countrySelection.source(state),
        target: data.countrySelection.target(state),
    },
    countries: data.game.countries(state),
});

type DispatchProps = Pick<Props,
    | 'attackHandler'
    | 'moveTroopsHandler'
    | 'requestGetCountryCard'
    | 'countryCardsModalHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    attackHandler: actions.game.requestAttack,
    moveTroopsHandler: actions.game.requestMoveTroops,
    requestGetCountryCard: actions.game.requestGetCountryCard,
    countryCardsModalHandler: () => stateActions.modals.setCardsModalOpen({ isOpen: true }),
};

export default connect(mapStateToProps, mapDispatchToProps)(AttackRoundButtons);
