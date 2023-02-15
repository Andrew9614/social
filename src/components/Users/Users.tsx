import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';
import { Preloader } from '../common/Preloader/Preloader';
import { UsersDispatchType, UsersStateType } from './types';
import styles from './Users.module.css';

type UsersPropsType = UsersStateType & UsersDispatchType;

export const Users = ({
  users,
  hasMore,
  loadingButtons,
  requestUsers,
  changeFollowStatus,
}: UsersPropsType) => {
  return (
    <InfiniteScroll
      className={styles.usersContainer}
      dataLength={users.length}
      next={requestUsers}
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
                  disabled={loadingButtons.some((id) => id === user.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    changeFollowStatus(user.id, user.followed);
                  }}
                >
                  {user.followed ? 'Unfollow' : 'Follow'}
                </button>
              </div>
              <div className={styles.userRight}>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </InfiniteScroll>
  );
};
