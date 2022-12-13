import { DispatchAction, ProfilePage } from "./type";

const ADD_POST: DispatchAction['type'] = 'ADD-POST';
const CHANGE_MY_POST_TEXT_AREA: DispatchAction['type'] = 'CHANGE-MY-POST-TEXT-AREA';

//type ProfilePageReducer = (state: ProfilePage, action: DispatchAction) => ProfilePage

const initialState: ProfilePage = {
	postsData: [
		{ message: 'Hello', likes: 5 },
		{ message: 'fgs', likes: 48 },
		{ message: 'dsav', likes: 458 },
		{ message: 'faggot', likes: 1488 },
	],
	newMyPostsTextArea: ''
};

export const profilePageReducer = (state: ProfilePage = initialState, action: DispatchAction): ProfilePage => {
	switch (action.type) {
		case ADD_POST:
			if (!state.newMyPostsTextArea) return state;
			let newPost = {
				message: state.newMyPostsTextArea,
				likes: 0
			};
			return {
				...state,
				newMyPostsTextArea: '',
				postsData: [...state.postsData, newPost]
			};
		case CHANGE_MY_POST_TEXT_AREA:
			return {
				...state, newMyPostsTextArea: action.message || ''
			};
		default: return state;
	}
}