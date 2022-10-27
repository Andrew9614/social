import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

export const MyPosts = () => {
	return (
		<div className={styles.postsBlock}>
			<h2>My posts</h2>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={styles.posts}>
				<Post
					message='Hello'
					likes={5}
				/>
				<Post
					message='fgs'
					likes={48}
				/>
				<Post
					message='fd'
					likes={344}
				/>
				<Post message='faggot'
					likes={65555}
				/>
			</div>
		</div>
	);
}