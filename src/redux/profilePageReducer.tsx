import { ThunkAction } from 'redux-thunk';
import { followAPI, profileAPI } from '../api/api';
import { RootState } from './reduxStore';
import { DispatchAction, ThunkType } from './type';

const ADD_POST = 'ADD_POST';
const ADD_LIKE = 'ADD_LIKE';
const SET_PROFILE = 'SET_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST';
const UNMOUNT_PROFILE = 'UNMOUNT_PROFILE';
const PROFILE_LOADING = 'PROFILE_LOADING';
const SET_FOLLOW = 'SET_FOLLOW';

export type ProfilePage = {
  postsData: {
    id: number;
    message: string;
    likes: number;
  }[];
  profileInfo: {
    aboutMe: string;
    contacts: {
      facebook: null;
      website: null;
      vk: null;
      twitter: null;
      instagram: null;
      youtube: null;
      github: null;
      mainLink: null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: string;
    photos: {
      small: string;
      large: string;
    };
  };
  profileStatus: string;
  isFollow: boolean;
  isProfileLoading: boolean;
};

const initialState = {
  postsData: [],
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
  isFollow: false,
  isProfileLoading: false,
};

export const profilePageReducer = (
  state: ProfilePage = initialState,
  action: DispatchAction
): ProfilePage => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length
          ? state.postsData[state.postsData.length - 1].id + 1
          : 1,
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
    case ADD_LIKE:
      const postData = state.postsData.map((el) =>
        el.id === action.id ? { ...el, likes: el.likes + 1 } : { ...el }
      );
      return {
        ...state,
        postsData: postData,
      };
    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.id),
      };
    case UNMOUNT_PROFILE:
      return initialState;
    case PROFILE_LOADING:
      return {
        ...state,
        isProfileLoading: action.status,
      };
    case SET_FOLLOW:
      return {
        ...state,
        isFollow: action.status,
      };
    default:
      return state;
  }
};

export type addPostType = ReturnType<typeof addPost>;
export type addLikeType = ReturnType<typeof addLike>;
export type setProfileType = ReturnType<typeof setProfile>;
export type setProfileStatusType = ReturnType<typeof setProfileStatus>;
export type deletePostType = ReturnType<typeof deletePost>;
export type unmountProfileType = ReturnType<typeof unmountProfile>;
export type isProfileLoadingType = ReturnType<typeof isProfileLoading>;
export type setFollowType = ReturnType<typeof setFollow>;

export const addPost = (message: string) => {
  return { type: ADD_POST, message } as const;
};
export const addLike = (id: number) => {
  return { type: ADD_LIKE, id } as const;
};
export const setProfile = (profile: ProfilePage['profileInfo']) => {
  return { type: SET_PROFILE, profile: profile } as const;
};
export const setProfileStatus = (status: string) => {
  return { type: SET_PROFILE_STATUS, status: status } as const;
};
export const deletePost = (id: number) => {
  return { type: DELETE_POST, id: id } as const;
};
export const unmountProfile = () => {
  return { type: UNMOUNT_PROFILE } as const;
};
export const isProfileLoading = (status: boolean) => {
  return { type: PROFILE_LOADING, status: status } as const;
};
export const setFollow = (status: boolean) => {
  return { type: SET_FOLLOW, status: status } as const;
};

export const getUser =
  (id: string): ThunkType<Promise<void>> =>
  async (dispatch) => {
    dispatch(isProfileLoading(true));
    await profileAPI
      .getUser(id)
      .then((response) => {
        dispatch(setProfile(response.data));
        dispatch(isProfileLoading(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(isProfileLoading(false));
      });
  };

export const getFollow =
  (id: number): ThunkAction<void, RootState, unknown, DispatchAction> =>
  (dispatch) => {
    followAPI.getFollow(id).then((res) => {
      dispatch(setFollow(res.data));
    });
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
