import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts: React.FC<MyPostsProps> = (props) => {

	const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.dispatch({ type: 'CHANGE-MY-POST-TEXT-AREA', message: e.target.value })
	}

	const handleClickButton = () => {
		props.dispatch({ type: 'ADD-POST' })
	}

	return (
		<div className={styles.postsBlock}>
			<h2>My posts</h2>
			<div>
				<div>
					<textarea
						onChange={handleChangeTextArea}
						value={props.newMyPostsTextArea}
					/>
				</div>
				<div>
					<button onClick={handleClickButton}>Add post</button>
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