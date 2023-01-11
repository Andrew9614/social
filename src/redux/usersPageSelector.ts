import { createSelector } from 'reselect';
import { RootState } from './reduxStore';

export const getEmptyResponse = (state: RootState) => {
  return state.usersPage.emptyResponse;
};
export const getLoadingButtons = (state: RootState) => {
  return state.usersPage.loadingFollowButtons;
};
const getUsers = (state: RootState) => {
  return state.usersPage.users;
};
export const getUsersSelector = createSelector(getUsers, (users) =>
  users.filter((u) => true)
);
