import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePropsType } from './profileType';

export const Profile: React.FC<ProfilePropsType> = (props) => {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</div>
	);
}