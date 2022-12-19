import { connect } from 'react-redux';
import { addPost, changePostText } from '../../../redux/profilePageReducer';
import { RootState } from '../../../redux/reduxStore';
import { MyPosts } from './MyPosts';
import { MyPostsDispatchType, MyPostsStateTypes } from './types';

const mapState = (state: RootState): MyPostsStateTypes => {
  return {
    postsData: state.profilePage.postsData,
    newMyPostsTextArea: state.profilePage.newMyPostsTextArea,
  };
};

const mapDispatch: MyPostsDispatchType = {
  addPost,
  changePostText,
};

export const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);
