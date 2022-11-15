import styles from './FriendsListMini.module.css'
import { FriendsListMiniProps } from './type';

export const FriendsListMini: React.FC<FriendsListMiniProps> = (props) => {
	return (
		<div className={styles.friendsContainer}>
			Friends:
			<div className={styles.friendsWrapper}>
				<div className={styles.friends}>
					<img src={props.state[0].link} alt="img" />
					{props.state[0].name}
				</div>
				<div className={styles.friends}>
					<img src={props.state[1].link} alt="img" />
					{props.state[1].name}
				</div>
				<div className={styles.friends}>
					<img src={props.state[2].link} alt="img" />
					{props.state[2].name}
				</div>
			</div>
		</div>
	);
}