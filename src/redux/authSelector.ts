import { createSelector } from 'reselect';
import { RootState } from './reduxStore';

const getAuthData = (state: RootState) => {
  return state.authData.data;
};
const getResponseMessage = (state: RootState) => {
  return state.authData.responseMessage;
};
export const getAuthDataSelector = createSelector(getAuthData, (data) => data);
export const getResponseMessageSelector = createSelector(
  getResponseMessage,
  (data) => data
);
