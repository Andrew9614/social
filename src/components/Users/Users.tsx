import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';
import { Preloader } from '../common/Preloader/Preloader';
import { UsersPropsType } from './types';
import styles from './Users.module.css';

export const Users = ({
  users,
  hasMore,
  followOnClick,
  requestMoreUsers,
}: UsersPropsType) => {
  return (
    <InfiniteScroll
      className={styles.usersContainer}
      dataLength={users.length}
      next={requestMoreUsers}
      hasMore={hasMore}
      style={{ overflow: 'hidden' }}
      loader={
        <div className={styles.usersLoading}>
          <Preloader />
        </div>
      }
      scrollableTarget="appWrapperContent"
    >
      {users.map((user) => {
        return (
          <NavLink key={user.id} to={'/profile/' + user.id}>
            <div className={styles.userContainer}>
              <div className={styles.userLeft}>
                <img
                  src={
                    user.photos.small ||
                    'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
                  }
                  alt="img"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    (!user.followed
                      ? axios.post(
                          'https://social-network.samuraijs.com/api/1.0/follow/' +
                            user.id,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': '03633ecb-ea01-4458-b5ff-6e8777f70567',
                            },
                          }
                        )
                      : axios.delete(
                          'https://social-network.samuraijs.com/api/1.0/follow/' +
                            user.id,
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': '03633ecb-ea01-4458-b5ff-6e8777f70567',
                            },
                          }
                        )
                    )
                      .then((response) => {
                        followOnClick(user.id);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  }}
                >
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
          </NavLink>
        );
      })}
    </InfiniteScroll>
  );
};
