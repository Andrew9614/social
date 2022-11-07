import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'


type DialogItemProps = {
	name: string
	id: number
}
const DialogItem: React.FC<DialogItemProps> = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={(props.id).toString()} className={({ isActive }) => (isActive ? styles.active : "")} end>{props.name}</NavLink>
		</div>
	);
}


type MessageProps = {
	message: string
}
const Message: React.FC<MessageProps> = (props) => {
	return (
		<div className={styles.message}>
			{props.message}
		</div>
	);
}


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