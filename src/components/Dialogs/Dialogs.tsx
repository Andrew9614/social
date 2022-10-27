import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'


type DialogItemProps = {
	name: string
	id: string
}
const DialogItem: React.FC<DialogItemProps> = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={props.id} className={({ isActive }) => (isActive ? styles.active : "")} end>{props.name}</NavLink>
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


export const Dialogs = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem
					name='Masha'
					id='1'
				/>
				<DialogItem
					name='Sasha'
					id='2'
				/>
				<DialogItem
					name='Dasha'
					id='3'
				/>
				<DialogItem
					name='Evgeniy'
					id='4'
				/>
				<DialogItem
					name='Obema'
					id='5'
				/>
			</div>
			<div className={styles.messages}>
				<Message message='Hi' />
				<Message message='Zhopa'/>
				<Message message='Babababebebe'/>
			</div>
		</div>
	)
}