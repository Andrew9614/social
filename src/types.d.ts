type DialogsProps = {
	state: DialogsPage
	
	
	dispatch: (action: DispatchAction) => void
}
type DispatchAction = {
	type:
	'ADD-MESSAGE' |
	'CHANGE-MESSAGE-TEXT-AREA' |
	'ADD-POST' |
	'CHANGE-MY-POST-TEXT-AREA'
	message?: string
}
type AppProps = {
	state: State
	
	
	
	
	dispatch: (action: DispatchAction) => void
}

type State = {
	dialogsPage: DialogsPage
	profilePage: ProfilePage
	sidebarPage: SidebarPage
}

type DialogsPage = {
	dialogsData: DialogsData[]
	messagesData: MessagesData[]
	newMessageTextArea: string
}

type ProfilePage = {
	postsData: PostsData[]
	newMyPostsTextArea: string
}

type SidebarPage = {
	friendsListMini: FriendsListMini[]
}

type ProfileProps = {
	state: ProfilePage
	
	
	dispatch: (action: DispatchAction) => void
}

type MyPostsProps = {
	postsData: PostsData[]
	newMyPostsTextArea: string
	
	
	dispatch: (action: DispatchAction) => void
}

type DialogsData = {
	id: number
	name: string
	imgLink: string
}

type MessagesData = {
	id: number
	message: string
	self: boolean
}

type PostsData = {
	message: string
	likes: number
}

type FriendsListMini = {
	id: number
	name: string
	link: string
}