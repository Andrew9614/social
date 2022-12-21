import { combineReducers, legacy_createStore as createStore , applyMiddleware} from 'redux';
import { authReducer } from './authReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { profilePageReducer } from './profilePageReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersPageReducer } from './usersPageReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersPageReducer,
  authData: authReducer,
});
export const store = createStore(reducers,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
