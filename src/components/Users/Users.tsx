import { RootState } from "../../redux/reduxStore";
import styles from './Users.module.css'

export type UsersStateType = {
	state: RootState['usersPage']
}

export type UsersDispatchType = {
	followOnClick: (id: number) => void
	setUsers: (user: RootState['usersPage']['users']) => void
}

export const Users: React.FC<UsersStateType & UsersDispatchType> = (props) => {
	if (props.state.users.length === 0) {
		props.setUsers([
			{ id: 0, status: 'gay', location: { country: 'Belarus', city: 'Minsk' }, follow: true, fullName: 'Masha', imgLink: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25' },
			{ id: 1, status: 'pidor', location: { country: 'Belarus', city: 'Minsk' }, follow: true, fullName: 'Sasha', imgLink: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg' },
			{ id: 2, status: 'loh', location: { country: 'Belarus', city: 'Minsk' }, follow: false, fullName: 'Dasha', imgLink: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200' },
			{ id: 3, status: 'norm', location: { country: 'Belarus', city: 'Minsk' }, follow: true, fullName: 'Evgeniy', imgLink: '' },
			{ id: 4, status: 'gnida', location: { country: 'Belarus', city: 'Minsk' }, follow: false, fullName: 'Obema', imgLink: '' }
		])
	}
	return (
		<div className={styles.usersContainer}>
			{props.state.users.map(user => {
				return (
					<div key={user.id} className={styles.userContainer}>
						<div className={styles.userLeft}>
							<img src={user.imgLink} alt="img" />
							<button onClick={() => props.followOnClick(user.id)}>{user.follow ? 'Unfollow' : 'Follow'}</button>
						</div>
						<div className={styles.userRight}>
							<div>{user.fullName}</div>
							<div>{user.location.country} {user.location.city}</div>
							<div>{user.status}</div>
						</div>
					</div>
				)
			})}
		</div>
	);
}