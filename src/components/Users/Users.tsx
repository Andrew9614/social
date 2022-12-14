import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { UsersDispatchType, UsersStateType } from './types';
import styles from './Users.module.css';

type UserPropsType = UsersStateType & UsersDispatchType;

export const UUsers = ({
  followOnClick,
  setUsers,
  isLoading,
  state,
}: UserPropsType) => {
  // setUsers([
  //   //   {
  //   //     id: 0,
  //   //     status: 'gay',
  //   //     location: { country: 'Belarus', city: 'Minsk' },
  //   //     follow: true,
  //   //     fullName: 'Masha',
  //   //     imgLink:
  //   //       'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25',
  //   //   },
  //   //   {
  //   //     id: 1,
  //   //     status: 'pidor',
  //   //     location: { country: 'Belarus', city: 'Minsk' },
  //   //     follow: true,
  //   //     fullName: 'Sasha',
  //   //     imgLink:
  //   //       'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg',
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     status: 'loh',
  //   //     location: { country: 'Belarus', city: 'Minsk' },
  //   //     follow: false,
  //   //     fullName: 'Dasha',
  //   //     imgLink:
  //   //       'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200',
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     status: 'norm',
  //   //     location: { country: 'Belarus', city: 'Minsk' },
  //   //     follow: true,
  //   //     fullName: 'Evgeniy',
  //   //     imgLink: '',
  //   //   },
  //   //   {
  //   //     id: 4,
  //   //     status: 'gnida',
  //   //     location: { country: 'Belarus', city: 'Minsk' },
  //   //     follow: false,
  //   //     fullName: 'Obema',
  //   //     imgLink: '',
  //   //   },
  //   // ]);
  useEffect(() => {
    if (state.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          isLoading(false);
          setUsers(response.data.items);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  return (
    <div className={styles.usersContainer}>
      {state.loading
        ? 'loading...'
        : state.users.map((user) => {
            return (
              <div key={user.id} className={styles.userContainer}>
                <div className={styles.userLeft}>
                  <img
                    src={
                      user.photos.small ||
                      'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
                    }
                    alt="img"
                  />
                  <button onClick={() => followOnClick(user.id)}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
                <div className={styles.userRight}>
                  <div>{user.name}</div>
                  <div>
                    {'user.location.country'} {'user.location.city'}
                  </div>
                  <div>{user.status}</div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export class Users extends React.Component<UserPropsType> {
  // constructor(props:UserPropsType) {
  //   super(props);
  //   axios
  //     .get('https://social-network.samuraijs.com/api/1.0/users')
  //     .then((response) => {
  //       this.props.isLoading(false);
  //       this.props.setUsers(response.data.items);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  componentDidMount(): void {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.isLoading(false);
        this.props.setUsers(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }

	componentWillUnmount(): void {
		this.props.isLoading(true)
	}

  render() {
    return (
      <div className={styles.usersContainer}>
        {this.props.state.loading
          ? 'loading...'
          : this.props.state.users.map((user) => {
              return (
                <div key={user.id} className={styles.userContainer}>
                  <div className={styles.userLeft}>
                    <img
                      src={
                        user.photos.small ||
                        'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
                      }
                      alt="img"
                    />
                    <button onClick={() => this.props.followOnClick(user.id)}>
                      {user.followed ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                  <div className={styles.userRight}>
                    <div>{user.name}</div>
                    <div>
                      {'user.location.country'} {'user.location.city'}
                    </div>
                    <div>{user.status}</div>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}
