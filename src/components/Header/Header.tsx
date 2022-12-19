import { Preloader } from '../common/Preloader/Preloader';
import styles from './Header.module.css';
import { HeaderDispatchType, HeaderStateType } from './types';

type HeaderPropsType = HeaderStateType & HeaderDispatchType;

export const Header = ({
  handleClick,
  isLogin,
  login,
  isLoading,
}: HeaderPropsType) => {
  return (
    <header className={styles.header}>
      <img src="https://pngimg.com/uploads/nike/nike_PNG17.png" alt="logo" />
      <div className={styles.login}>
        {isLoading ? (
          <Preloader className={styles.loader} />
        ) : isLogin ? (
          login
        ) : (
          <button onClick={handleClick}>Log in</button>
        )}
      </div>
    </header>
  );
};
