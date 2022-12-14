import { RootState } from '../../redux/reduxStore';

export type DialogsStateType = {
  state: RootState['dialogsPage'];
};

export type DialogsDispatchType = {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
