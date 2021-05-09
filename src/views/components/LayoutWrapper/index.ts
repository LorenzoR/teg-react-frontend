import { connect } from 'react-redux';
import LayoutWrapper, { Props } from './view';
import stateActions from 'src/state/actions';

type DispatchProps = Pick<Props,
    | 'initGame'
    >;

const mapDispatchToProps: DispatchProps = {
    initGame: stateActions.game.initGame,
};

export default connect(null, mapDispatchToProps)(LayoutWrapper);
