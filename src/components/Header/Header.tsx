import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { checkIsUserAuth, logoutUser } from '../../redux/authReducer';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction } from '../../redux/type';
import { Preloader } from '../common/Preloader/Preloader';
import styles from './Header.module.css';
import { HeaderStateType } from './types';

export const Header = ({ isLogin, login, isLoading }: HeaderStateType) => {
  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();
  return (
    <header className={styles.header}>
      <img src="https://pngimg.com/uploads/nike/nike_PNG17.png" alt="logo" />
      <div className={styles.login}>
        {isLoading ? (
          <Preloader className={styles.loader} />
        ) : isLogin ? (
          <p onClick={() => dispatch(logoutUser())}>{login==='lehaebat'?'leha':login}</p>
        ) : (
          <button onClick={() => dispatch(checkIsUserAuth())}>Log in</button>
        )}
      </div>
    </header>
  );
};
