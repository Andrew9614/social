import { DispatchAction, ProfilePage } from "./type";

const ADD_POST: DispatchAction['type'] = 'ADD-POST';
const CHANGE_MY_POST_TEXT_AREA: DispatchAction['type'] = 'CHANGE-MY-POST-TEXT-AREA';

type ProfilePageReducer = (state: ProfilePage, action: DispatchAction) => ProfilePage | undefined

const initialState: ProfilePage = {
	postsData: [
		{ message: 'Hello', likes: 5 },
		{ message: 'fgs', likes: 48 },
		{ message: 'dsav', likes: 458 },
		{ message: 'faggot', likes: 1488 },
	],
	newMyPostsTextArea: ''
};

export const profilePageReducer: ProfilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (!state.newMyPostsTextArea) return;
			let newPost = {
				message: state.newMyPostsTextArea,
				likes: 0
			};
			state.postsData.push(newPost);
			state.newMyPostsTextArea = '';
			break;
		case CHANGE_MY_POST_TEXT_AREA:
			state.newMyPostsTextArea = action.message || '';
			break;
	}
	return state;
}