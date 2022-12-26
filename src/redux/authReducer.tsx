import { authAPI, AuthRequest } from '../api/api';
import { DispatchAction, ThunkType } from './type';
const SET_AUTH_DATA = 'SET_AUTH_DATA';
const LOADING_STATUS = 'AUTH_LOADING_STATUS';
const SET_CAPTCHA = 'SET_CAPTCHA';

export type AuthDataType = typeof initialState;

const initialState = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  isLogin: false,
  isLoading: false,
  captchaURL: '',
};

export const authReducer = (
  state: AuthDataType = initialState,
  action: DispatchAction
): AuthDataType => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        data: { ...(action.authData ? action.authData : state.data) },
        isLogin: action.status,
      };
    case LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status || false,
        captchaURL: '',
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captchaURL: action.url,
      };
    default:
      return state;
  }
};

export type setAuthDataType = ReturnType<typeof setAuthData>;
export type isAuthLoadingType = ReturnType<typeof isAuthLoading>;
export type setCaptchaType = ReturnType<typeof setCaptcha>;

export const setAuthData = (data: AuthDataType['data'], status: boolean) => {
  return { type: SET_AUTH_DATA, authData: data, status: status } as const;
};
export const isAuthLoading = (status: boolean) => {
  return { type: LOADING_STATUS, status: status } as const;
};
export const setCaptcha = (url: string) => {
  return { type: SET_CAPTCHA, url: url } as const;
};

export const checkIsUserAuth = (): ThunkType => {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    authAPI
      .getAuth()
      .then((response) => {
        !response.resultCode
          ? dispatch(setAuthData(response.data, true))
          : console.log(response.messages);
        dispatch(isAuthLoading(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(isAuthLoading(false));
      });
  };
};

export const loginUser = (request: AuthRequest): ThunkType => {
  return (dispatch) => {
    dispatch(isAuthLoading(true));
    authAPI
      .postUser(request)
      .then((response) => {
        !response.resultCode
          ? dispatch(checkIsUserAuth())
          : alert(response.messages);
        dispatch(isAuthLoading(false));
        switch (response.resultCode) {
          case 0:
            dispatch(checkIsUserAuth());
            break;
          case 10:
            authAPI
              .getCaptcha()
              .then((response) => {
                console.log(response);
                dispatch(setCaptcha(response.url));
              })
              .catch((error) => {
                console.error(error);
              });
            break;
          default:
            console.log(response.messages);
        }
      })

      .catch((error) => {
        console.error(error);
        dispatch(isAuthLoading(false));
      });
  };
};
export const logoutUser = (request: AuthRequest): ThunkType => {
  return (dispatch) => {
    authAPI
      .deleteUser()
      .then((response) => {
        !response.resultCode
          ? dispatch(
              setAuthData(
                {
                  id: null,
                  email: null,
                  login: null,
                },
                false
              )
            )
          : console.log(response.messages);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
