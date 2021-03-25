import { connect } from 'react-redux';
import ButtonsRow, { Props } from './view';
import { AppState } from 'src/state';
import stateActions from 'src/state/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'round'
    | 'currentPlayerId'
    | 'players'
    | 'countrySelection'
    | 'countries'
    | 'spinnerVisible'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        round: state.game.round,
        currentPlayerId: data.game.me(state)?.id || '', // state.game.currentPlayerId,
        players: state.game.players,
        countrySelection: {
            source: data.countrySelection.source(state),
            target: data.countrySelection.target(state),
        },
        countries: data.game.countries(state),
        spinnerVisible: data.modals.isSpinnerVisible(state),
    };
};

type DispatchProps = Pick<Props,
    | 'attackHandler'
    | 'moveTroopsHandler'
    | 'getCountryCardHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    attackHandler: () => console.log('asd'),
    moveTroopsHandler: () => console.log('asd'),
    getCountryCardHandler: () => stateActions.modals.setCardsModalOpen({ isOpen: true }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsRow);
