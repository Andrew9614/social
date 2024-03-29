import { RootState } from '../../redux/reduxStore';

export type UsersStateType = {
  users: RootState['usersPage']['users'];
  hasMore: RootState['usersPage']['emptyResponse'];
  loadingButtons: number[];
};
export type UsersDispatchType = {
  requestUsers: () => void;
  changeFollowStatus: (id: number, followed: boolean) => void;
};
