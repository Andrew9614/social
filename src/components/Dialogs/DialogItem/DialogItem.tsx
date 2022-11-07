import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';

type DialogItemProps = {
	name: string;
	id: number;
};
export const DialogItem: React.FC<DialogItemProps> = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={(props.id).toString()} className={({ isActive }) => (isActive ? styles.active : "")} end>{props.name}</NavLink>
		</div>
	);
};
