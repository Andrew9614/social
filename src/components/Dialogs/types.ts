import { RootState } from '../../redux/reduxStore';

export type DialogsStateType = {
  state: RootState['dialogsPage'];
};

export type DialogsDispatchType = {
  addMessage: (message: string) => void;
};
