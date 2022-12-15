import InfiniteScroll from 'react-infinite-scroll-component';
import { UsersPropsType } from './types';
import styles from './Users.module.css';

// export type UserPropsType = UsersStateType & UsersDispatchType['
export const Users = ({
  users,
  hasMore,
  followOnClick,
  requestMoreUsers,
}: UsersPropsType) => {
  return (
    //<div className={styles.usersLoading}>{loading ? 'loading...' : ''}</div>
    <InfiniteScroll
      dataLength={users.length}
      next={requestMoreUsers}
      hasMore={hasMore}
      loader={<div className={styles.usersLoading}>Loading...</div>}
      scrollableTarget="appWrapperContent"
    >
      <div className={styles.usersContainer}>
        {users.map((user) => {
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
    </InfiniteScroll>
  );
};
