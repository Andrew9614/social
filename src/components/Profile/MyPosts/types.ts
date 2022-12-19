import { RootState } from '../../../redux/reduxStore';

export type MyPostsStateTypes = {
  postsData: RootState['profilePage']['postsData'];
  newMyPostsTextArea: string;
};

export type MyPostsDispatchType = {
  changePostText: (message: string) => void;
  addPost: () => void;
};
