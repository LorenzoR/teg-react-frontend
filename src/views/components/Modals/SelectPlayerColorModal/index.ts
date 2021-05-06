import { connect } from 'react-redux';
import SelectPlayerColorModal, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'visible'
    | 'gameStatus'
    | 'players'
    | 'currentPlayer'
    | 'spinnerVisible'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    visible: data.modals.isChooseColorVisible(state),
    gameStatus: data.game.gameStatus(state),
    players: data.game.players(state),
    currentPlayer: data.game.me(state),
    spinnerVisible: data.game.players(state)?.length <= 0,
});

type DispatchProps = Pick<Props,
    | 'startGameHander'
    | 'joinGameHandler'
    | 'reConnectHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    startGameHander: actions.game.requestStartGame,
    joinGameHandler: actions.game.requestJoinGame,
    reConnectHandler: () => console.log('reConnectHandler'),
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerColorModal);
