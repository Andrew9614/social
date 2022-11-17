import { Store } from "./type";

export const store: Store = {
	_callSubscriber: (_state: State) => { },
	_state: {
		dialogsPage: {
			dialogsData: [
				{ id: 0, name: 'Masha', imgLink: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25' },
				{ id: 1, name: 'Sasha', imgLink: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' },
				{ id: 2, name: 'Dasha', imgLink: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200' },
				{ id: 3, name: 'Evgeniy', imgLink: '' },
				{ id: 4, name: 'Obema', imgLink: '' }
			],
			messagesData: [
				{ id: 0, message: 'Hello', self: true },
				{ id: 1, message: 'How are you', self: true },
				{ id: 2, message: 'I\'m gay', self: false },
			],
			newMessageTextArea: ''
		},
		profilePage: {
			postsData: [
				{ message: 'Hello', likes: 5 },
				{ message: 'fgs', likes: 48 },
				{ message: 'dsav', likes: 458 },
				{ message: 'faggot', likes: 1488 },
			],
			newMyPostsTextArea: ''
		},
		sidebarPage: {
			friendsListMini: [
				{ id: 0, name: 'Masha', link: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25' },
				{ id: 1, name: 'Sasha', link: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' },
				{ id: 2, name: 'Dasha', link: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200' }
			]
		}
	},

	getState() {
		return this._state;
	},

	changeMyPostsTextArea(message: string) {
		this._state.profilePage.newMyPostsTextArea = message;
		this._callSubscriber(this._state);
	},
	addPosts() {
		if (!this._state.profilePage.newMyPostsTextArea) return;
		let newPost: PostsData = {
			message: this._state.profilePage.newMyPostsTextArea,
			likes: 0
		};
		this._state.profilePage.postsData.push(newPost);
		this._state.profilePage.newMyPostsTextArea = '';
		this._callSubscriber(this._state);
	},

	changeMessageTextArea(message: string) {
		this._state.dialogsPage.newMessageTextArea = message;
		this._callSubscriber(this._state);
	},

	addMessage() {
		if (!this._state.dialogsPage.newMessageTextArea) return;
		let newMessage: MessagesData = {
			id: 9,
			message: this._state.dialogsPage.newMessageTextArea,
			self: true
		};
		this._state.dialogsPage.messagesData.push(newMessage);
		this._state.dialogsPage.newMessageTextArea = '';
		this._callSubscriber(this._state);
	},
	subscriber(observer: (_state: State) => void) {
		this._callSubscriber = observer;
	}
}