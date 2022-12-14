export type DispatchAction = {
  type:
    | 'ADD_MESSAGE'
    | 'CHANGE_MESSAGE_TEXT_AREA'
    | 'ADD_POST'
    | 'CHANGE_MY_POST_TEXT_AREA'
    | 'FOLLOW_CHANGE'
    | 'SET_USERS'
    | 'LOADING_STATUS';
  message?: string;
  id?: number;
  users?: UserType[];
	status?: boolean
};

export type DialogsPage = {
  dialogsData: DialogsData[];
  messagesData: MessagesData[];
  newMessageTextArea: string;
};

export type ProfilePage = {
  postsData: PostsData[];
  newMyPostsTextArea: string;
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
  loading: boolean;
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
