import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { MyPostsPropsType } from './myPostType';

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
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