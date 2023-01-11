import styles from './preloader.module.css';
export const Preloader = (props: { [key: string]: string }) => {
  return (
    <div className={props.className}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
};
