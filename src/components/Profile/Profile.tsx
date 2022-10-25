import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';

export const Profile = () => {
	return (
		<div className={styles.content}>
			<div>
				<img className={styles.titleImg} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt="back" />
			</div>
			<div>
				ava+description
			</div>
			<MyPosts />
		</div>
	);
}