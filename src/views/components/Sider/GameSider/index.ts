import { connect } from 'react-redux';
import GameSider, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props,
    | 'dices'
    | 'currentPlayer'
    | 'players'
    | 'round'
    | 'countrySelection'
    | 'countries'
    | 'gameStatus'
    | 'currentPlayerId'
    | 'isAttacking'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        dices: data.game.dices(state),
        currentPlayer: data.game.me(state),
        players: data.game.players(state),
        round: data.game.round(state),
        countrySelection: {
            source: data.countrySelection.source(state),
            target: data.countrySelection.target(state),
        },
        // countriesCount: number;
        countries: data.game.countries(state),
        // spinnerVisible: boolean;
        isAttacking: data.game.isAttacking(state),
        gameStatus: state.game.gameStatus,
        currentPlayerId: data.game.me(state)?.id || '', // state.game.currentPlayerId,
    };
};

type DispatchProps = Pick<Props,
    | 'addTroopsHandler'
    | 'attackHandler'
    | 'moveTroopsHandler'
    | 'removeTroopsHandler'
    | 'exchangeCardsHandler'
    | 'getCountryCardHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    addTroopsHandler: () => actions.game.requestAddTroops,
    attackHandler: () => actions.game.requestAttack,
    moveTroopsHandler: () => actions.game.requestMoveTroops,
    removeTroopsHandler: () => actions.game.requestAddTroops,
    exchangeCardsHandler: () => actions.game.requestExchangeCard,
    getCountryCardHandler: () => actions.game.requestGetCountryCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSider);
