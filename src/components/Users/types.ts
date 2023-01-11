import { RootState } from '../../redux/reduxStore';

export type UsersStateType = {
  users: RootState['usersPage']['users'];
  hasMore: RootState['usersPage']['emptyResponse'];
  loadingButtons: number[];
};
export type UsersDispatchType = {
  requestMoreUsers: () => void;
  changeFollowStatus: (user: RootState['usersPage']['users'][number]) => void;
};
