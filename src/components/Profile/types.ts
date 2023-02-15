import { RootState } from '../../redux/reduxStore';

export type MyPostsStateType = {
  profilePage: RootState['profilePage'];
};

export type MyPostsDispatchType = {
  addPost: (message: string) => void;
};

export type ProfileInfoStateType = {
  userId: string;
  isSelfPage: boolean;
  isFollowLoading: boolean;
  profileInfo: RootState['profilePage']['profileInfo'];
  profileInfoStatus: string;
  isLoading: boolean;
  isFollow: boolean;
};

export type ProfileInfoDispatchType = {
  putProfileStatus: (status: string) => void;
  handleFollowClick: () => void;
};

export type ProfileStateType = {
  isSelfPage: boolean;
  isFollowLoading: boolean;
  profilePage: RootState['profilePage'];
};

export type ProfileDispatchType = MyPostsDispatchType & ProfileInfoDispatchType;
