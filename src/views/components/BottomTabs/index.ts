import { connect } from 'react-redux';
import BottomTabs, { Props } from './view';
import { AppState } from 'src/state';
// import stateActions from 'src/state/actions';
import actions from 'src/ops/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'players'
    | 'currentPlayerId'
    | 'eventsLog'
    | 'countries'
    | 'chatMessages'
    | 'eventsLog'
    >;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        players: data.game.players(state),
        currentPlayerId: data.game.me(state)?.id || '', // state.game.currentPlayerId,
        eventsLog: data.game.eventsLog(state),
        chatMessages: {
            messages: [], // TODO change
            unreadCount: 0,
        },
        countries: data.game.countries(state),
    };
};

type DispatchProps = Pick<Props,
    | 'sendChatMessageHandler'
    | 'markChatMessagesAsReadHandler'
    >;

const mapDispatchToProps: DispatchProps = {
    sendChatMessageHandler: actions.game.requestSendChatMessage,
    markChatMessagesAsReadHandler: () => console.log('markChatMessagesAsReadHandler'),
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs);
