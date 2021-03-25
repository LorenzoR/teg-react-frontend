import { connect } from 'react-redux';
// import ops from 'src/ops/actions';
import NewGame, { Props } from './view';
import { AppState } from 'src/state';

type StateProps = Pick<Props, 'language'>;

const mapStateToProps = (state: AppState): StateProps => {
    return {
        language: state.globalSettings.language,
    };
};

/*
type DispatchProps = Pick<Props, 'activateConfiguration' | 'configurationUpdate' | 'configurationSetValid'>;
const mapDispatchToProps: DispatchProps = {
    activateConfiguration: ops.configurations.activateConfiguration,
    configurationUpdate: ops.configurations.configurationUpdate,
    configurationSetValid: ops.configurations.configurationSetValid,
};
*/

export default connect(mapStateToProps, null)(NewGame);
