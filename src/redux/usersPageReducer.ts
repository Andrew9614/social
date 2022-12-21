import { ThunkAction } from 'redux-thunk/es/types';
import { usersAPI } from '../api/api';
import { RootState } from './reduxStore';
import { DispatchAction, UsersDataType, UserType } from './type';

const FOLLOW_CHANGE = 'FOLLOW_CHANGE';
const SET_USERS = 'SET_USERS';
const USERS_PAGE_UNMOUNT = 'USERS_PAGE_UNMOUNT';
const USERS_LOADING_STATUS = 'USERS_LOADING_STATUS';
const FOLLOW_BUTTON_LOADING_STATUS = 'FOLLOW_BUTTON_LOADING_STATUS';

const initialState: UsersDataType = {
  users: [],
  currentPage: 1,
  usersCount: 10,
  emptyResponse: false,
  isUsersLoading: false,
  loadingFollowButtons: [],
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
          currentPage: state.currentPage + 1,
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
        currentPage: 1,
      };
    case USERS_LOADING_STATUS:
      return {
        ...state,
        isUsersLoading: action.status || false,
      };
    case FOLLOW_BUTTON_LOADING_STATUS:
      return {
        ...state,
        loadingFollowButtons: action.status
          ? [...state.loadingFollowButtons, action.id]
          : state.loadingFollowButtons.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export type onFollowChangeType = ReturnType<typeof onFollowChange>;
export type setUsersType = ReturnType<typeof setUsers>;
export type usersPageUnmountType = ReturnType<typeof usersPageUnmount>;
export type toggleUserLoadingType = ReturnType<typeof toggleUserLoading>;
export type toggleFollowButtonLoadingType = ReturnType<
  typeof toggleFollowButtonLoading
>;

export const onFollowChange = (id: number) =>
  ({ type: FOLLOW_CHANGE, id: id } as const);
export const setUsers = (users: UserType[]) =>
  ({ type: SET_USERS, users: users } as const);
export const usersPageUnmount = () => ({ type: USERS_PAGE_UNMOUNT } as const);
export const toggleUserLoading = (status: boolean) =>
  ({ type: USERS_LOADING_STATUS, status: status } as const);
export const toggleFollowButtonLoading = (status: boolean, id: number) =>
  ({ type: FOLLOW_BUTTON_LOADING_STATUS, status: status, id: id } as const);



export const getUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  DispatchAction
> => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(toggleUserLoading(true));
    usersAPI
      .getUsers(state.usersPage.currentPage, state.usersPage.usersCount)
      .then((response) => {
        dispatch(setUsers(response.items));
        dispatch(toggleUserLoading(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(toggleUserLoading(false));
      });
  };
};
