import { connect } from 'react-redux';
import TopTabs, { Props } from './view';
import { AppState } from 'src/state';
import data from 'src/ops-read';

type StateProps = Pick<Props, 
    | 'players'
    | 'countries'
    | 'chatMessagesUnreadCount'
    >;

const mapStateToProps = (state: AppState): StateProps => ({
    players: data.game.players(state),
    chatMessagesUnreadCount: data.game.chatMessages(state)?.unreadCount,
    countries: data.game.countries(state),
});

export default connect(mapStateToProps)(TopTabs);
