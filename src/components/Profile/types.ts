import { RootState } from '../../redux/reduxStore';

export type MyPostsStateType = {
  profilePage: RootState['profilePage'];
};

export type MyPostsDispatchType = {
  addPost: (message: string) => void;
};

export type ProfileInfoStateType = {
  profileInfo: RootState['profilePage']['profileInfo'];
  profileInfoStatus: string;
};

export type ProfileInfoDispatchType = {
  putProfileStatus: (status: string) => void;
};

export type ProfileStateType = {
  profilePage: RootState['profilePage'];
};

export type ProfileDispatchType = MyPostsDispatchType & ProfileInfoDispatchType;
