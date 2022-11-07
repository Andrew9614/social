import styles from './../Dialogs.module.css';

type MessageProps = {
	message: string;
};
export const Message: React.FC<MessageProps> = (props) => {
	return (
		<div className={styles.message}>
			{props.message}
		</div>
	);
};
