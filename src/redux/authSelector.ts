import { createSelector } from 'reselect';
import { RootState } from './reduxStore';

const getAuthData = (state: RootState) => {
  return state.authData.data;
};
export const getAuthDataSelector = createSelector(getAuthData, (data) => data);
