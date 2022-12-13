export type DispatchAction = {
	type:
	'ADD_MESSAGE' |
	'CHANGE_MESSAGE_TEXT_AREA' |
	'ADD_POST' |
	'CHANGE_MY_POST_TEXT_AREA' |
	'FOLLOW_CHANGE' |
	'SET_USERS'
	message?: string
	id?: number
	users?: UserType[]
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

export type UserType = {
	id: number;
	status: string;
	location: {
		country: string;
		city: string;
	};
	follow: boolean;
	fullName: string;
	imgLink: string;
}

export type UsersDataType = {
	users: UserType[];
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

