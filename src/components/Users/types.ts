import { RootState } from '../../redux/reduxStore';

export type UsersStateType = {
  state: RootState['usersPage'];
};

export type UsersDispatchType = {
  followOnClick: (id: number) => void;
  setUsers: (user: RootState['usersPage']['users']) => void;
  usersPageUnmount: () => void;
};

export type UsersPropsType = {
  users: RootState['usersPage']['users'];
  hasMore: RootState['usersPage']['emptyResponse'];
  followOnClick: (id: number) => void;
  requestMoreUsers: () => void;
};
