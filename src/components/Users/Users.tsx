import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';
import { Preloader } from '../common/Preloader/Preloader';
import { UsersPropsType } from './types';
import styles from './Users.module.css';

export const Users = ({
  users,
  hasMore,
  loadingButtons,
  followOnClick,
  requestMoreUsers,
  isButtonLoading,
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
                  disabled={loadingButtons.some((id) => id === user.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    isButtonLoading(true, user.id);
                    (user.followed
                      ? followAPI.unfollow(user.id)
                      : followAPI.follow(user.id)
                    )
                      .then((response) => {
                        console.log(response);
                        followOnClick(user.id);
                        isButtonLoading(false, user.id);
                      })
                      .catch((error) => {
                        isButtonLoading(false, user.id);
                        console.error(error);
                      });
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
