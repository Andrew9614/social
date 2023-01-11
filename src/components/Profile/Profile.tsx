import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileDispatchType, ProfileStateType } from './types';

type ProfilePropsType = ProfileStateType & ProfileDispatchType;

export const Profile = ({
  addPost,
  profilePage,
  putProfileStatus,
}: ProfilePropsType) => {
  return (
    <div className={styles.content}>
      <ProfileInfo
        profileInfoStatus={profilePage.profileStatus}
        profileInfo={profilePage.profileInfo}
        putProfileStatus={putProfileStatus}
				isLoading={profilePage.isProfileLoading}
      />
      <MyPosts addPost={addPost} profilePage={profilePage} />
    </div>
  );
};
