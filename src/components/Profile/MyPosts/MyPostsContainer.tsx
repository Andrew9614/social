import React from 'react';
import { MyPosts } from './MyPosts';
import { MyPostsContainerPropsType } from './myPostType';

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

	const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.store.dispatch({ type: 'CHANGE-MY-POST-TEXT-AREA', message: e.target.value })
	}

	const handleClickButton = () => {
		props.store.dispatch({ type: 'ADD-POST' })
	}

	return (
		<MyPosts
			handleClickButton={handleClickButton}
			handleChangeTextArea={handleChangeTextArea}
			postsData={props.store.getState().profilePage.postsData}
			newMyPostsTextArea={props.store.getState().profilePage.newMyPostsTextArea}
		/>
	);
}