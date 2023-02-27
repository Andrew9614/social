import { authAPI, AuthRequest } from '../api/api';
import { DispatchAction, ThunkType } from './type';
const SET_AUTH_DATA = 'SET_AUTH_DATA';
const LOADING_STATUS = 'AUTH_LOADING_STATUS';
const SET_CAPTCHA = 'SET_CAPTCHA';
const SET_RESPONSE_MESSAGE = 'SET_RESPONSE_MESSAGE';

export type AuthDataType = typeof initialState;

const initialState = {
  data: {
    id: '',
    email: '',
    login: '',
  },
  isLogin: false,
  isLoading: false,
  captchaURL: '',
  responseMessage: '',
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
    case SET_RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.message,
      };
    default:
      return state;
  }
};

export type setAuthDataType = ReturnType<typeof setAuthData>;
export type isAuthLoadingType = ReturnType<typeof isAuthLoading>;
export type setCaptchaType = ReturnType<typeof setCaptcha>;
export type setResponseMessageType = ReturnType<typeof setResponseMessage>;

export const setAuthData = (data: AuthDataType['data'], status: boolean) => {
  return { type: SET_AUTH_DATA, authData: data, status: status } as const;
};
export const isAuthLoading = (status: boolean) => {
  return { type: LOADING_STATUS, status: status } as const;
};
export const setCaptcha = (url: string) => {
  return { type: SET_CAPTCHA, url: url } as const;
};
export const setResponseMessage = (message: string) => {
  return { type: SET_RESPONSE_MESSAGE, message: message } as const;
};

export const checkIsUserAuth = (): ThunkType<Promise<any>> => (dispatch) => {
  dispatch(isAuthLoading(true));
  return authAPI
    .getAuth()
    .then((response) => {
      !response.resultCode
        ? dispatch(setAuthData(response.data, true))
        : console.error(response.messages);
      dispatch(isAuthLoading(false));
    })
    .catch((error) => {
      console.error(error);
      dispatch(isAuthLoading(false));
    });
};

export const loginUser =
  (request: AuthRequest): ThunkType<Promise<any>> =>
  (dispatch) => {
    dispatch(isAuthLoading(true));
    return authAPI
      .login(request)
      .then((response) => {
				//console.log(response)
        dispatch(isAuthLoading(false));
        switch (response.resultCode) {
          case 0:
						dispatch(setResponseMessage(''));
            return dispatch(checkIsUserAuth()).then(() => true);
          case 10:
						dispatch(setResponseMessage(response.messages));
            authAPI
              .getCaptcha()
              .then((response) => {
                //console.log(response);
                dispatch(setCaptcha(response.url));
              })
              .catch((error) => {
                console.error(error);
              });
            break;
          default:
            dispatch(setResponseMessage(response.messages));
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(isAuthLoading(false));
      });
  };

export const logoutUser = (): ThunkType => {
  return (dispatch) => {
    authAPI
      .logout()
      .then((response) => {
        !response.resultCode
          ? dispatch(
              setAuthData(
                {
                  id: '',
                  email: '',
                  login: '',
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
