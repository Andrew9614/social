import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import { Message } from './Message/Message';


let dialogsData: { id: number, name: string }[] = [
	{ id: 0, name: 'Masha' },
	{ id: 1, name: 'Sasha' },
	{ id: 2, name: 'Dasha' },
	{ id: 3, name: 'Evgeniy' },
	{ id: 4, name: 'Obema' }
]

let messagesData: { id: number, message: string }[] = [
	{ id: 0, message: 'Hello' },
	{ id: 1, message: 'How are you' },
	{ id: 2, message: 'Gay' },
]

export const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsData.map(
					el => <DialogItem id={el.id} name={el.name} />
				)}
			</div>
			<div className={styles.messages}>
				{messagesData.map(
					el => <Message message={el.message} />
				)}
			</div>
		</div>
	)
}