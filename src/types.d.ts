type DialogsProps = {
	state: DialogsPage
}

type AppProps = {
	state: State
}

type State = {
	dialogsPage: DialogsPage
	profilePage: ProfilePage
	sidebarPage: SidebarPage
}

type DialogsPage = {
	dialogsData: DialogsData[]
	messagesData: MessagesData[]
}

type ProfilePage = {
	postsData: PostsData[]
}

type SidebarPage = {
	friendsListMini: FriendsListMini[]
}

type ProfileProps = {
	state: PostsPage
}

type MyPostsProps = {
	postsData: PostsData[]
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