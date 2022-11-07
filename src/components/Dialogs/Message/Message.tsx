import styles from './../Dialogs.module.css';


export const Message: React.FC<MessageProps> = (props) => {
	return (
		<div className={styles.message}>
			{props.message}
		</div>
	);
};
