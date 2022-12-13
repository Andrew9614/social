import { DialogsPage, DispatchAction } from "./type";

const ADD_MESSAGE: DispatchAction['type'] = 'ADD-MESSAGE';
const CHANGE_MESSAGE_TEXT_AREA: DispatchAction['type'] = 'CHANGE-MESSAGE-TEXT-AREA';

//type TypeDialogsPageReducer = (state: DialogsPage, action: DispatchAction) => DialogsPage

const initialState: DialogsPage = {
	dialogsData: [
		{ id: 0, name: 'Masha', imgLink: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25' },
		{ id: 1, name: 'Sasha', imgLink: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' },
		{ id: 2, name: 'Dasha', imgLink: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200' },
		{ id: 3, name: 'Evgeniy', imgLink: '' },
		{ id: 4, name: 'Obema', imgLink: '' }
	],
	messagesData: [
		{ id: 0, message: 'Hello', self: false },
		{ id: 1, message: 'How are you', self: false },
		{ id: 2, message: 'I\'m gay', self: true },
	],
	newMessageTextArea: ''
};

export const dialogsPageReducer = (state: DialogsPage = initialState, action: DispatchAction): DialogsPage => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (!state.newMessageTextArea) return state;
			let newMessage = {
				id: 9,
				message: state.newMessageTextArea,
				self: true
			};
			return {
				...state,
				messagesData: [...state.messagesData, newMessage],
				newMessageTextArea: ''
			};
		case CHANGE_MESSAGE_TEXT_AREA:
			return {
				...state,
				newMessageTextArea: action.message || ''
			};
		default: return state;
	}
}