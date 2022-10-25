import React from 'react';
import { Post } from './Post/Post';
//import styles from './MyPosts.module.css';

export const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
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
	);
}