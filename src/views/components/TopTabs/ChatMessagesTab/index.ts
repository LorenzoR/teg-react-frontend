import { connect } from 'react-redux';
import ChatMessagesTab, { Props } from './view';
import { AppState } from 'src/state';
import actions from 'src/ops/actions';
import stateActions from 'src/state/actions';
import data from 'src/ops-read';

type StateProps = Pick<Props,
    | 'chatMessages'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    chatMessages: data.game.chatMessages(state),
});

type DispatchProps = Pick<Props,
    | 'sendChatMessageHandler'
    | 'setUnreadMsgCount'
    >;

const mapDispatchToProps: DispatchProps = {
    sendChatMessageHandler: actions.game.requestSendChatMessage,
    setUnreadMsgCount: stateActions.game.setUnreadMsgCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessagesTab);
