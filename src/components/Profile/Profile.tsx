import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
export const Profile = () => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
