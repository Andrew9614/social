import React from 'react';
import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile: React.FC<ProfileProps> = (props) => {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts
				postsData={props.state.postsData}
				newMyPostsTextArea={props.state.newMyPostsTextArea}
				handleChangeMyPostsTextArea={props.handleChangeMyPostsTextArea}
				handleClickMyPostsButton={props.handleClickMyPostsButton}
			/>
		</div>
	);
}