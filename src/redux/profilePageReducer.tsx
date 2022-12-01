import { DispatchAction, ProfilePage } from "./type";

const ADD_POST:DispatchAction['type'] = 'ADD-POST';
const CHANGE_MY_POST_TEXT_AREA:DispatchAction['type'] = 'CHANGE-MY-POST-TEXT-AREA';

type ProfilePageReducer = (state: ProfilePage, action: DispatchAction) => ProfilePage | undefined

export const profilePageReducer: ProfilePageReducer = (state, action) => {
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
			break
	}
	return state;
}