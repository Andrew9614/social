import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import { Message } from './Message/Message';



export const Dialogs:React.FC<DialogsProps> = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{props.dialogsData.map(
					el => <DialogItem id={el.id} name={el.name} />
				)}
			</div>
			<div className={styles.messages}>
				{props.messagesData.map(
					el => <Message message={el.message} />
				)}
			</div>
		</div>
	)
}