import { DialogsPage, DispatchAction } from "./type";

const ADD_MESSAGE:DispatchAction['type'] = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT_AREA:DispatchAction['type'] = 'CHANGE-MESSAGE-TEXT-AREA';

type DialogsPageReducer = (state: DialogsPage, action: DispatchAction) => DialogsPage | undefined

export const dialogsPageReducer: DialogsPageReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (!state.newMessageTextArea) return;
			let newMessage = {
				id: 9,
				message: state.newMessageTextArea,
				self: true
			};
			state.messagesData.push(newMessage);
			state.newMessageTextArea = '';
			break;
		case CHANGE_MESSAGE_TEXT_AREA:
			state.newMessageTextArea = action.message || '';
			break;
	}
	return state;
}