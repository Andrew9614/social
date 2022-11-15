import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import { Message } from './Message/Message';
import { SelfMessage } from './Message/SelfMessage';



export const Dialogs: React.FC<DialogsProps> = (props) => {
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
			</div>
		</div>
	)
}