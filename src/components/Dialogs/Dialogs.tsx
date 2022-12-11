import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import { Message } from './Message/Message';
import { RootState } from '../../redux/reduxStore';

export type DialogsStateType = {
	state: RootState['dialogsPage'];
}

export type DialogsDispatchType = {
	onClick: () => void;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Dialogs: React.FC<DialogsStateType & DialogsDispatchType> = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{props.state.dialogsData.map(
					el => <DialogItem id={el.id} name={el.name} imgLink={el.imgLink} />
				)}
			</div>
			<div className={styles.messenger}>
				<div className={styles.messagesWrapper}>
					{props.state.messagesData.map(
						el => <Message message={el.message} self={el.self} />
					)}
				</div>
				<div className={styles.sendWrapper}>
					<textarea
						className={styles.messageTextArea}
						onChange={props.onChange}
						value={props.state.newMessageTextArea}
					/>
					<button className={styles.sendButton} onClick={props.onClick}>Send</button>
				</div>
			</div>
		</div>
	)
}