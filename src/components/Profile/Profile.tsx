import { MyPosts } from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileDispatchType, ProfileStateType } from './types';

type ProfilePropsType = ProfileStateType & ProfileDispatchType;

export const Profile = ({
  isSelfPage,
  addPost,
  isFollowLoading,
  profilePage,
  putProfileStatus,
  handleFollowClick,
}: ProfilePropsType) => {
  return (
    <div className={styles.content}>
      <ProfileInfo
        isSelfPage={isSelfPage}
        isFollowLoading={isFollowLoading}
        userId={profilePage.profileInfo.userId}
        handleFollowClick={handleFollowClick}
        isFollow={profilePage.isFollow}
        profileInfoStatus={profilePage.profileStatus}
        profileInfo={profilePage.profileInfo}
        putProfileStatus={putProfileStatus}
        isLoading={profilePage.isProfileLoading}
      />
      <MyPosts addPost={addPost} profilePage={profilePage} />
    </div>
  );
};
