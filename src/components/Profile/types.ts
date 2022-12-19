import { RootState } from '../../redux/reduxStore';

export type MyPostsStateType = {
  profilePage: RootState['profilePage'];
};

export type MyPostsDispatchType = {
  changePostText: (message: string) => void;
  addPost: () => void;
};

export type ProfileInfoStateType = {
  profileInfo: RootState['profilePage']['profileInfo'];
};

export type ProfileInfoDispatchType = any;

export type ProfileStateType = {
  profilePage: RootState['profilePage'];
};

export type ProfileDispatchType = MyPostsDispatchType;
