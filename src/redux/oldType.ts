export type Store = {
	_state: State
	_callSubscriber: Function
	getState: Function
	subscriber: Function
	dispatch: (action: DispatchAction) => void
}
export type DispatchAction = {
	type:
	'ADD_MESSAGE' |
	'CHANGE_MESSAGE_TEXT_AREA' |
	'ADD_POST' |
	'CHANGE_MY_POST_TEXT_AREA'
	message?: string
}

export type State = {
	dialogsPage: DialogsPage
	profilePage: ProfilePage
	sidebarPage: SidebarPage
}

export type DialogsPage = {
	dialogsData: DialogsData[]
	messagesData: MessagesData[]
	newMessageTextArea: string
}


export type ProfilePage = {
	postsData: PostsData[]
	newMyPostsTextArea: string
}

export type SidebarPage = {
	friendsListMini: FriendsListMini[]
}

export type DialogsData = {
	id: number
	name: string
	imgLink: string
}


export type MessagesData = {
	id: number
	message: string
	self: boolean
}

export type PostsData = {
	message: string
	likes: number
}

export type FriendsListMini = {
	id: number
	name: string
	link: string
}

