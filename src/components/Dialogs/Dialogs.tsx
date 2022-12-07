import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import { Message } from './Message/Message';
import { SelfMessage } from './Message/SelfMessage';
import { DialogsPropsType } from './dialogsType';



export const Dialogs: React.FC<DialogsPropsType> = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{props.state.dialogsData.map(
					el => <DialogItem id={el.id} name={el.name} imgLink={el.imgLink} />
				)}
			</div>
			<div className={styles.messages}>
				{props.state.messagesData.map(
					el => el.self ?
						<SelfMessage message={el.message} /> : <Message message={el.message} />
				)}
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