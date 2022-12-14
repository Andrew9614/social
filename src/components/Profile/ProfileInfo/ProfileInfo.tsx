import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.titleImg}
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
          alt="back"
        />
      </div>
      <div className={styles.descriptionBlock}>ava+description</div>
    </div>
  );
};
