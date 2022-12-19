import { ProfileInfoDispatchType, ProfileInfoStateType } from '../types';
import styles from './ProfileInfo.module.css';

type ProfileInfoPropsType = ProfileInfoStateType & ProfileInfoDispatchType;

export const ProfileInfo = ({ profileInfo }: ProfileInfoPropsType) => {
  return (
    <div>
      <div className={styles.profileInfoContainer}>
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
          </div>
          <div className={styles.profileInfoRight}>
            <div className={styles.profileInfoDescription}>
              <h2>{profileInfo?.fullName}</h2>
              <p>{profileInfo?.aboutMe}</p>
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
                {/* eslint-disable-next-line array-callback-return */}
                {Object.entries(profileInfo?.contacts || '').map((contact) => {
                  if (contact[1])
                    return <p>{contact[0] + ': ' + contact[1]}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//  <img
//         className={styles.titleImg}
//         src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
//         alt="back"
//       />
