import { DispatchAction, UsersDataType, UserType } from './type';

const FOLLOW_CHANGE: DispatchAction['type'] = 'FOLLOW_CHANGE';
const SET_USERS: DispatchAction['type'] = 'SET_USERS';
const USERS_PAGE_UNMOUNT: DispatchAction['type'] = 'USERS_PAGE_UNMOUNT';
const LOADING_STATUS: DispatchAction['type'] = 'LOADING_STATUS';

const initialState: UsersDataType = {
  users: [],
  usersPage: 1,
  usersCount: 10,
  emptyResponse: false,
  isLoading: false,
};

export const usersPageReducer = (
  state: UsersDataType = initialState,
  action: DispatchAction
): UsersDataType => {
  switch (action.type) {
    case FOLLOW_CHANGE:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id !== action.id
            ? user
            : {
                ...user,
                followed: !user.followed,
              };
        }),
      };
    case SET_USERS:
      if (action.users?.length) {
        return {
          ...state,
          users: [
            ...state.users,
            ...(action.users ? action.users : state.users),
          ],
          usersPage: state.usersPage + 1,
        };
      } else {
        return {
          ...state,
          emptyResponse: true,
        };
      }
    case USERS_PAGE_UNMOUNT:
      return {
        ...state,
        users: [],
        usersPage: 1,
      };
    case LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status || false,
      };
    default:
      return state;
  }
};

export const onFollowChange = (id: number): DispatchAction => {
  return { type: FOLLOW_CHANGE, id: id };
};
export const setUsers = (users: UserType[]): DispatchAction => {
  return { type: SET_USERS, users: users };
};
export const usersPageUnmount = (): DispatchAction => {
  return { type: USERS_PAGE_UNMOUNT };
};
export const isLoading = (status: boolean): DispatchAction => {
  return { type: LOADING_STATUS, status: status };
};
