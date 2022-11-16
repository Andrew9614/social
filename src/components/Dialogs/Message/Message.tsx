import styles from './Message.module.css';

type MessageProps = {
	message: string;
};
export const Message: React.FC<MessageProps> = (props) => {
	return (
		<div className={styles.messageContainer}>
			{/* <img src={props.avatar} alt="avatar" className={s.avatarMessage} /> */}
			<div className={styles.textBlockMessage}>
				<svg className={styles.tailMessage} viewBox="0 0 565.29 565.29"><path d="M560.81,1105.62v.05H1125.1V541.38h0C1013.1,777.77,779.69,1039.93,560.81,1105.62Z" transform="translate(-560.31 -540.88)" /></svg>

				{/* <div className={styles.nameMessage}>{props.name}</div> */}
				<div className={styles.textMessage}>{props.message}</div>
				{/* <div className={styles.timeMessage}>{props.time}</div> */}
			</div>
		</div>
	);
};
