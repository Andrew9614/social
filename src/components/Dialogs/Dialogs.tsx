import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'

type DialogsProps = any;

export const Dialogs: React.FC<DialogsProps> = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={styles.dialog}>
					<NavLink to="1" className={({ isActive }) => (isActive ? styles.active : "")} end>Masha</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="2" className={({ isActive }) => (isActive ? styles.active : "")}>Sasha</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="3" className={({ isActive }) => (isActive ? styles.active : "")}>Dasha</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="4" className={({ isActive }) => (isActive ? styles.active : "")}>Evgeniy</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="5" className={({ isActive }) => (isActive ? styles.active : "")}>Obema</NavLink>
				</div>
			</div>
			<div className={styles.messages}>
				<div className={styles.message}>Hi</div>
				<div className={styles.message}>Zhopa</div>
				<div className={styles.message}>Babababebebe</div>
			</div>
		</div>
	)
}