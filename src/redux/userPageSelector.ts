import { RootState } from "./reduxStore";

export const getEmptyResponse = (state:RootState)=>{
	return state.usersPage.emptyResponse;
}
export const getLoadingButtons = (state:RootState)=>{
	return state.usersPage.loadingFollowButtons;
}
export const getUsers = (state:RootState)=>{
	return state.usersPage.users;
}