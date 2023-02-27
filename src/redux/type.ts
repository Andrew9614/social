import { ThunkAction } from 'redux-thunk';
import { setInitType } from './appReducer';
import {
  isAuthLoadingType,
  setAuthDataType,
  setCaptchaType,
  setResponseMessageType,
} from './authReducer';
import {
  addMessageType,
  addTempMessageType,
  clearDialogsType,
  clearMessagesType,
  isDialogsLoadingType,
  isMessageSendingType,
  isMessagesLoadingType,
  removeMessageType,
  setDialogsType,
  setHasMoreType,
  setMessagesType,
} from './dialogsPageReducer';
import {
  addLikeType,
  addPostType,
  deletePostType,
  isProfileLoadingType,
  setFollowType,
  setProfileStatusType,
  setProfileType,
  unmountProfileType,
} from './profilePageReducer';
import { RootState } from './reduxStore';
import {
  onFollowChangeType,
  setUsersType,
  toggleFollowButtonLoadingType,
  toggleUserLoadingType,
  usersPageUnmountType,
} from './usersPageReducer';

export type DispatchAction =
  | onFollowChangeType
  | setUsersType
  | usersPageUnmountType
  | toggleUserLoadingType
  | toggleFollowButtonLoadingType
  | addPostType
  | setProfileType
  | setProfileStatusType
  | setAuthDataType
  | isAuthLoadingType
  | setCaptchaType
  | setInitType
  | deletePostType
  | unmountProfileType
  | isProfileLoadingType
  | setDialogsType
  | setMessagesType
  | isDialogsLoadingType
  | isMessagesLoadingType
  | isMessageSendingType
  | addMessageType
  | addTempMessageType
  | setHasMoreType
  | clearDialogsType
  | clearMessagesType
  | removeMessageType
  | setFollowType
  | setResponseMessageType
  | addLikeType;

export type DialogsPage = {
  dialogsData: DialogData[];
  messagesData: MessageData[];
  isDialogsLoading: boolean;
  isMessagesLoading: boolean;
  isMessageSending: boolean;
  currentPage: number;
  defaultSize: number;
  hasMore: boolean;
};

export type SidebarPage = {
  friendsListMini: FriendsListMini[];
};

export type UserType = {
  name: string;
  id: number;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  followed: boolean;
};

export type UsersDataType = {
  users: UserType[];
  currentPage: number;
  usersCount: number;
  emptyResponse: boolean;
  isUsersLoading: boolean;
  loadingFollowButtons: number[];
};

export type DialogData = {
  id: string;
  userName: string;
  hasNewMessages: boolean;
  lastMessage: string;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: {
    small: string;
    large: string;
  };
};

export type MessageData = {
  id: string;
  body: string;
  translatedBody: string | null;
  addedAt: string;
  senderId: string;
  senderName: string;
  recipientId: string;
  viewed: boolean;
  temp: boolean | null;
  error: boolean | null;
};

export type PostsData = {
  id: number;
  message: string;
  likes: number;
};

export type FriendsListMini = {
  id: number;
  name: string;
  link: string;
};

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  DispatchAction
>;
