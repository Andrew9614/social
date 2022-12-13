import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { RootState } from '../../../redux/reduxStore';

export type MyPostsStateTypes = {
	postsData: RootState['profilePage']['postsData'];
	newMyPostsTextArea: string;
}

export type MyPostsDispatchType = {
	handleChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleClickButton: () => void;
}

export const MyPosts: React.FC<MyPostsStateTypes & MyPostsDispatchType> = (props) => {
	return (
		<div className={styles.postsBlock}>
			<h2>My posts</h2>
			<div>
				<div>
					<textarea
						onChange={props.handleChangeTextArea}
						value={props.newMyPostsTextArea}
					/>
				</div>
				<div>
					<button onClick={props.handleClickButton}>Add post</button>
				</div>
			</div>
			<div className={styles.posts}>
				{props.postsData.map(
					el => <Post message={el.message} likes={el.likes} />
				)}
			</div>
		</div>
	);
}