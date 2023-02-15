import { combineReducers, createStore, applyMiddleware } from 'redux';
import { authReducer } from './authReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { profilePageReducer } from './profilePageReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersPageReducer } from './usersPageReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { appReducer } from './appReducer';
import { DispatchAction } from './type';

const reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersPageReducer,
  authData: authReducer,
  appData: appReducer,
});
export const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<RootState, DispatchAction>)
);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
