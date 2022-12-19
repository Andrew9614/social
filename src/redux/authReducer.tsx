import { AuthDataType, DispatchAction } from './type';

const SET_AUTH_DATA: DispatchAction['type'] = 'SET_AUTH_DATA';
const LOADING_STATUS: DispatchAction['type'] = 'AUTH_LOADING_STATUS';

const initialState: AuthDataType = {
  data: {
    id: null,
    email: null,
    login: null,
  },
  isLogin: false,
  isLoading: false,
};

export const authReducer = (
  state: AuthDataType = initialState,
  action: DispatchAction
): AuthDataType => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        data: {...(action.authData?action.authData:state.data)},
        isLogin: true,
      };
    case LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status || false,
      };
    default:
      return state;
  }
};

export const setAuthData = (data: AuthDataType['data']): DispatchAction => {
  return { type: SET_AUTH_DATA, authData: data };
};
export const isAuthLoading = (status: boolean): DispatchAction => {
  return { type: LOADING_STATUS, status: status };
};
