import { checkIsUserAuth } from './authReducer';
import { DispatchAction, ThunkType } from './type';
const SET_INIT = 'SET_INIT';

export type AppDataType = typeof initialState;

const initialState = {
  isInitComplete: false,
};

export const appReducer = (
  state: AppDataType = initialState,
  action: DispatchAction
): AppDataType => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        isInitComplete: action.status,
      };
    default:
      return state;
  }
};

export type setInitType = ReturnType<typeof setInit>;

export const setInit = (status: boolean) => {
  return { type: SET_INIT, status: status } as const;
};

export const initializeApp = (): ThunkType => (dispatch) => {
  dispatch(checkIsUserAuth()).then(() => dispatch(setInit(true)));
};
