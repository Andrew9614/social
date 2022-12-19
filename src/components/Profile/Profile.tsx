import { RootState } from '../../redux/reduxStore';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
type ProfilePropsType = {
  state: RootState['profilePage'];
};
export const Profile = ({ state }: ProfilePropsType) => {
  return (
    <div className={styles.content}>
      <ProfileInfo profileInfo={state.profileInfo} />
      <MyPostsContainer />
    </div>
  );
};
