import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
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

const composeEnhancers: <R>(a: R) => R =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<RootState, DispatchAction>)
  )
);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
