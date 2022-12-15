import { DispatchAction, ProfilePage } from './type';

const ADD_POST: DispatchAction['type'] = 'ADD_POST';
const CHANGE_MY_POST_TEXT_AREA: DispatchAction['type'] =
  'CHANGE_MY_POST_TEXT_AREA';

const initialState: ProfilePage = {
  postsData: [
    { id: 0, message: 'Hello', likes: 5 },
    { id: 1, message: 'fgs', likes: 48 },
    { id: 2, message: 'dsav', likes: 458 },
    { id: 3, message: 'faggot', likes: 1488 },
  ],
  newMyPostsTextArea: '',
};

export const profilePageReducer = (
  state: ProfilePage = initialState,
  action: DispatchAction
): ProfilePage => {
  switch (action.type) {
    case ADD_POST:
      if (!state.newMyPostsTextArea) return state;
      let newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: state.newMyPostsTextArea,
        likes: 0,
      };
      return {
        ...state,
        newMyPostsTextArea: '',
        postsData: [...state.postsData, newPost],
      };
    case CHANGE_MY_POST_TEXT_AREA:
      return {
        ...state,
        newMyPostsTextArea: action.message || '',
      };
    default:
      return state;
  }
};
