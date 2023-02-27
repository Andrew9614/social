import { Link } from 'react-router-dom';
import { Preloader } from '../../common/Preloader/Preloader';
import { ProfileInfoDispatchType, ProfileInfoStateType } from '../types';
import styles from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = ProfileInfoStateType & ProfileInfoDispatchType;

export const ProfileInfo = ({
  userId,
  isSelfPage,
  isFollowLoading,
  profileInfo,
  profileInfoStatus,
  putProfileStatus,
  handleFollowClick,
  isLoading,
  isFollow,
}: ProfileInfoPropsType) => {
  return (
    <div className={styles.profileInfoContainer}>
      {isLoading ? (
        <Preloader className={styles.preloader} />
      ) : (
        <div>
          {' '}
          <div className={styles.profileInfo}>
            <div className={styles.profileInfoLeft}>
              <div className={styles.avatarContainer}>
                <img
                  src={
                    profileInfo?.photos.large ||
                    'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
                  }
                  alt={profileInfo?.fullName || 'avatar'}
                />
              </div>
              {!isSelfPage && (
                <div className={styles.buttonsBlock}>
                  <Link to={'/dialogs/' + userId}>
                    <button>Message</button>
                  </Link>
                  <button
                    disabled={isFollowLoading}
                    onClick={handleFollowClick}
                  >
                    {isFollow ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
              )}
            </div>
            <div className={styles.profileInfoRight}>
              <div className={styles.profileInfoDescription}>
                <h2>{profileInfo?.fullName}</h2>
                {isSelfPage ? (
                  <ProfileStatus
                    status={profileInfoStatus || 'Set status'}
                    putProfileStatus={putProfileStatus}
                  />
                ) : (
                  <div>{profileInfoStatus}</div>
                )}
                <p>
                  {profileInfo?.lookingForAJob
                    ? 'Looking for a job at ' +
                      profileInfo.lookingForAJobDescription
                    : 'Not looking for a job'}
                </p>
                <div>
                  <p style={{ marginTop: 20, fontSize: 1.5 + 'em' }}>
                    Contacts:{' '}
                  </p>
                  {Object.entries(profileInfo?.contacts || '').map(
                    // eslint-disable-next-line array-callback-return
                    (contact) => {
                      if (contact[1])
                        return <p key={contact[0]}>{contact[0] + ': ' + contact[1]}</p>;
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
