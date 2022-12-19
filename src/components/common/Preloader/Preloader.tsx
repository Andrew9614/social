import styles from './preloader.module.css';
export const Preloader = (props: { [key: string]: string }) => {
  return (
    <div className={`${styles.loader} ${props.className}`}>Loading...</div>
  );
};
