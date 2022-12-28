import { ThunkAction } from 'redux-thunk';
import { setInitType } from './appReducer';
import {
  isAuthLoadingType,
  setAuthDataType,
  setCaptchaType,
} from './authReducer';
import { addMessageType } from './dialogsPageReducer';
import {
  addPostType,
  setProfileStatusType,
  setProfileType,
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
  | addMessageType
  | setAuthDataType
  | isAuthLoadingType
  | setCaptchaType
  | setInitType;

export type DialogsPage = {
  dialogsData: DialogsData[];
  messagesData: MessagesData[];
  newMessageTextArea: string;
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

export type DialogsData = {
  id: number;
  name: string;
  imgLink: string;
};

export type MessagesData = {
  id: number;
  message: string;
  self: boolean;
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
