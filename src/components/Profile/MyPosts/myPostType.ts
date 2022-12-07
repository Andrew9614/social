import { Store } from "redux"
import { PostsData } from "../../../redux/type"

export type MyPostsPropsType = {
	postsData: PostsData[]
	handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	handleClickButton: () => void
	newMyPostsTextArea: string
}

export type MyPostsContainerPropsType = {
	store: Store
}