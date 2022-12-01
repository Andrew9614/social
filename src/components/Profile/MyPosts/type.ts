import { DispatchAction, PostsData } from "../../../redux/type"

export type MyPostsProps = {
	postsData: PostsData[]
	newMyPostsTextArea: string


	dispatch: (action: DispatchAction) => void
}