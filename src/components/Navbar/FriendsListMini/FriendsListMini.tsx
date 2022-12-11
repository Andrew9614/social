import { RootState } from '../../../redux/reduxStore';
import styles from './FriendsListMini.module.css'

export type FriendsListMiniStateType = {
	state: RootState['sidebarPage']['friendsListMini'];
}

export const FriendsListMini: React.FC<FriendsListMiniStateType> = (props) => {
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