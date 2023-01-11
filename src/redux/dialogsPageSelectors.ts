import { createSelector } from 'reselect';
import { RootState } from './reduxStore';

const getDialogs = (state: RootState) => {
  return state.dialogsPage.dialogsData;
};
export const getDialogsSelector = createSelector(
  getDialogs,
  (dialogsData) => dialogsData
);
export const getMessages = (state: RootState) => {
  return state.dialogsPage.messagesData;
};
export const getMessagesSelector = createSelector(getMessages, (messages) =>
  [...messages].reverse()
);
export const isDialogsLoadingSelector = (state: RootState) => {
  return state.dialogsPage.isDialogsLoading;
};
export const isMessagesLoadingSelector = (state: RootState) => {
  return state.dialogsPage.isMessagesLoading;
};
export const getHasMoreSelector = (state: RootState) => {
  return state.dialogsPage.hasMore;
};
