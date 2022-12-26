import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogsPageReducer';
import { RootState } from '../../redux/reduxStore';
import { Dialogs } from './Dialogs';
import { DialogsDispatchType, DialogsStateType } from './types';

const mapState = (state: RootState): DialogsStateType => {
  return {
    state: state.dialogsPage,
  };
};

const mapDispatch: DialogsDispatchType = {
  addMessage,
};

export const DialogsContainer = connect(mapState, mapDispatch)(withAuthRedirect(Dialogs));
