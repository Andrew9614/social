import React from 'react';
import { Post } from './Post/Post';
import styles from './MyPosts.module.css';

let postsData: { message: string, likes: number }[] = [
	{ message: 'Hello', likes: 5 },
	{ message: 'fgs', likes: 48 },
	{ message: 'dsav', likes: 458 },
	{ message: 'faggot', likes: 1488 },
]

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
				{postsData.map(
					el => <Post message={el.message} likes={el.likes} />
				)}
			</div>
		</div>
	);
}