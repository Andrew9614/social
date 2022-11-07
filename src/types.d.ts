type DialogsProps = {
	dialogsData: DialogsData[]
	messagesData: MessageData[]
}

type AppProps = {
	data: Data
}

type Data = {
	dialogsData: DialogsData[]
	messagesData: MessageData[]
	postsData: PostsData[]
}

type DialogItemProps = {
	name: string;
	id: number;
}

type ProfileProps = {
	profileData: PostsData[]
}

type MyPostsProps = {
	postsData: PostsData[]
}

type MessageProps = {
	message: string;
}

type DialogsData = {
	id: number
	name: string
}

type MessagesData = {
	id: number
	name: string
}

type PostsData = {
	message: string
	likes: number
}