type DialogsProps = {
	state: DialogsPage
	handleChangeMessagesTextArea: Function
	handleClickMessageButton: Function
}

type AppProps = {
	state: State
	handleChangeMyPostsTextArea: Function
	handleClickMyPostsButton: Function
	handleChangeMessagesTextArea: Function
	handleClickMessageButton: Function
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
	handleChangeMyPostsTextArea: Function
	handleClickMyPostsButton: Function
}

type MyPostsProps = {
	postsData: PostsData[]
	newMyPostsTextArea: string
	handleChangeMyPostsTextArea: Function
	handleClickMyPostsButton: Function
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