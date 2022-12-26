import { ThunkAction } from 'redux-thunk';
import { profileAPI } from '../api/api';
import { RootState } from './reduxStore';
import { DispatchAction } from './type';

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

export type ProfilePage = typeof initialState;

const initialState = {
  postsData: [
    { id: 0, message: 'Hello', likes: 5 },
    { id: 1, message: 'fgs', likes: 48 },
    { id: 2, message: 'dsav', likes: 458 },
    { id: 3, message: 'faggot', likes: 1488 },
  ],
  profileInfo: {
    aboutMe: '',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: '',
    photos: {
      small: '',
      large: '',
    },
  },
  profileStatus: '',
};

export const profilePageReducer = (
  state: ProfilePage = initialState,
  action: DispatchAction
): ProfilePage => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: action.message,
        likes: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case SET_PROFILE:
      return {
        ...state,
        profileInfo: action.profile || state.profileInfo,
      };
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.status,
      };
    default:
      return state;
  }
};

export type addPostType = ReturnType<typeof addPost>;
export type setProfileType = ReturnType<typeof setProfile>;
export type setProfileStatusType = ReturnType<typeof setProfileStatus>;

export const addPost = (message: string) => {
  return { type: ADD_POST, message } as const;
};
export const setProfile = (profile: ProfilePage['profileInfo']) => {
  return { type: SET_PROFILE, profile: profile } as const;
};
export const setProfileStatus = (status: string) => {
  return { type: SET_PROFILE_STATUS, status: status } as const;
};

export const getUser = (
  id: string
): ThunkAction<void, RootState, unknown, DispatchAction> => {
  return (dispatch) => {
    profileAPI
      .getUser(id)
      .then((response) => {
        dispatch(setProfile(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getProfileStatus = (
  id: string
): ThunkAction<void, RootState, unknown, DispatchAction> => {
  return (dispatch) => {
    profileAPI
      .getUserStatus(id)
      .then((response) => {
        dispatch(setProfileStatus(response));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
export const putProfileStatus = (
  status: string
): ThunkAction<void, RootState, unknown, DispatchAction> => {
  return (dispatch) => {
    profileAPI
      .setUserStatus(status)
      .then((response) => {
        if (!response.resultCode) dispatch(setProfileStatus(status));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
