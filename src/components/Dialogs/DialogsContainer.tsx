import { connect } from 'react-redux';
import { addMessage, changeMessageText } from '../../redux/dialogsPageReducer';
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
  changeMessageText,
};

export const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);
