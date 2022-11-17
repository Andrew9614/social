import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

// let postsData: { message: string, likes: number }[] = [
// 	{ message: 'Hello', likes: 5 },
// 	{ message: 'fgs', likes: 48 },
// 	{ message: 'dsav', likes: 458 },
// 	{ message: 'faggot', likes: 1488 },
// ]

export const MyPosts: React.FC<MyPostsProps> = (props) => {

	const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.handleChangeMyPostsTextArea(e.target.value)
	}

	const handleClickButton = () => {
		props.handleClickMyPostsButton()
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