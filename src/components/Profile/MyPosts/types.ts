import { RootState } from '../../../redux/reduxStore';

export type MyPostsStateTypes = {
  postsData: RootState['profilePage']['postsData'];
  newMyPostsTextArea: string;
};

export type MyPostsDispatchType = {
  handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClickButton: () => void;
};
