import { DispatchAction, UsersDataType } from "./type";

const FOLLOW_CHANGE: DispatchAction['type'] = 'FOLLOW_CHANGE';
const SET_USERS: DispatchAction['type'] = 'SET_USERS'

const initialState: UsersDataType = {
	users: []
}

export const usersPageReducer = (state: UsersDataType = initialState, action: DispatchAction): UsersDataType => {
	switch (action.type) {
		case FOLLOW_CHANGE:
			return {
				...state,
				users: state.users.map(user => {
					return (user.id !== action.id) ? user : {
						...user,
						follow: !user.follow
					}
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users ? action.users : state.users
			};
		default: return state;
	}
}