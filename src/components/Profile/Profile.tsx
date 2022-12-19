import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileDispatchType, ProfileStateType } from './types';
type ProfilePropsType = ProfileStateType & ProfileDispatchType;
export const Profile = ({
  addPost,
  changePostText,
  profilePage,
}: ProfilePropsType) => {
  return (
    <div className={styles.content}>
      <ProfileInfo profileInfo={profilePage.profileInfo} />
      <MyPosts
        addPost={addPost}
        changePostText={changePostText}
        profilePage={profilePage}
      />
    </div>
  );
};
