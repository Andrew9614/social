import React from 'react';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/reduxStore';
import { Dialogs, DialogsDispatchType, DialogsStateType } from './Dialogs';

const mapStateToProps = (state: RootState): DialogsStateType => {
	return {
		state: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: AppDispatch): DialogsDispatchType => {
	return {
		onClick: () => dispatch({ type: 'ADD-MESSAGE' }),
		onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			dispatch({ type: 'CHANGE-MESSAGE-TEXT-AREA', message: e.target.value })
		}
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

	//export const aDialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
	// 	const handleSendClick = () => {
	// 		props.store.dispatch({ type: 'ADD-MESSAGE' })
	// 	}
	// 	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
	// 		props.store.dispatch({ type: 'CHANGE-MESSAGE-TEXT-AREA', message: e.target.value })
	// 	}
	// 	return (
	// 		<Dialogs
	// 			state={props.store.getState().dialogsPage}
	// 			onClick={handleSendClick}
	// 			onChange={handleTextChange}
	// 		/>
	// 	)
	// }