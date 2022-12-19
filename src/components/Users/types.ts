import { RootState } from '../../redux/reduxStore';

export type UsersStateType = {
  state: RootState['usersPage'];
};

export type UsersDispatchType = {
  onFollowChange: (id: number) => void;
  setUsers: (user: RootState['usersPage']['users']) => void;
  usersPageUnmount: () => void;
	isLoading: (status:boolean)=>void
};

export type UsersPropsType = {
  users: RootState['usersPage']['users'];
  hasMore: RootState['usersPage']['emptyResponse'];
  followOnClick: (id: number) => void;
  requestMoreUsers: () => void;
};
