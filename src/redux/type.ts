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
  | {
      type:
        | 'ADD_MESSAGE'
        | 'CHANGE_MESSAGE_TEXT_AREA'
        | 'ADD_POST'
        | 'CHANGE_MY_POST_TEXT_AREA'
        | 'FOLLOW_CHANGE'
        | 'SET_USERS'
        | 'USERS_PAGE_UNMOUNT'
        | 'USERS_LOADING_STATUS'
        | 'AUTH_LOADING_STATUS'
        | 'SET_PROFILE'
        | 'SET_AUTH_DATA';
      message?: string;
      id?: number;
      users?: UserType[];
      status?: boolean;
      profile?: ProfileInfoType;
      authData?: AuthDataType['data'];
    };

export type DialogsPage = {
  dialogsData: DialogsData[];
  messagesData: MessagesData[];
  newMessageTextArea: string;
};

export type ProfileInfoType = {
  aboutMe: string;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type ProfilePage = {
  postsData: PostsData[];
  newMyPostsTextArea: string;
  profileInfo: ProfileInfoType | null;
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

export type AppStateType = {
  scrollToBottom: boolean;
};

export type UsersDataType = {
  users: UserType[];
  currentPage: number;
  usersCount: number;
  emptyResponse: boolean;
  isUsersLoading: boolean;
  loadingFollowButtons: number[];
};

export type AuthDataType = {
  data: {
    id: string | null;
    email: string | null;
    login: string | null;
  };
  isLogin: boolean;
  isLoading: boolean;
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
