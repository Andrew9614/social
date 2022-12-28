import { RootState } from '../../redux/reduxStore';




export type UsersStateType = {
  users: RootState['usersPage']['users'];
  hasMore: RootState['usersPage']['emptyResponse'];
  loadingButtons: number[];
};
export type UsersDispatchType = {
  followOnClick: (id: number) => void;
  requestMoreUsers: () => void;
  isButtonLoading: (status: boolean, id: number) => void;
};
