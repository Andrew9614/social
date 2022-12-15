import { DispatchAction, UsersDataType } from './type';

const FOLLOW_CHANGE: DispatchAction['type'] = 'FOLLOW_CHANGE';
const SET_USERS: DispatchAction['type'] = 'SET_USERS';
const USERS_PAGE_UNMOUNT: DispatchAction['type'] = 'USERS_PAGE_UNMOUNT';

const initialState: UsersDataType = {
  users: [],
  usersPage: 1,
  usersCount: 10,
  emptyResponse: false,
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
    default:
      return state;
  }
};
