import { RootState } from '../../redux/reduxStore';

export type UsersStateType = {
  state: RootState['usersPage'];
};

export type UsersDispatchType = {
  followOnClick: (id: number) => void;
  setUsers: (user: RootState['usersPage']['users']) => void;
};
