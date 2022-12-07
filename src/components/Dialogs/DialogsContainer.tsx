import React from 'react';import { Dialogs } from './Dialogs';
import { DialogsContainerPropsType } from './dialogsType';



export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
	const handleSendClick = () => {
		props.store.dispatch({ type: 'ADD-MESSAGE' })
	}
	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.store.dispatch({ type: 'CHANGE-MESSAGE-TEXT-AREA', message: e.target.value })
	}
	return (
		<Dialogs
			state={props.store.getState().dialogsPage}
			onClick={handleSendClick}
			onChange={handleTextChange}
		/>
	)
}