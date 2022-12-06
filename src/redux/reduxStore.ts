import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sidebarReducer } from "./sidebarReducer";

let reducers = combineReducers({
	dialogsPage: dialogsPageReducer,
	profilePage: profilePageReducer,
	sidebarPage: sidebarReducer
})
export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch