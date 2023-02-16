import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { logoutUser } from '../../redux/authReducer';
import { RootState } from '../../redux/reduxStore';
import { DispatchAction } from '../../redux/type';
import { Preloader } from '../common/Preloader/Preloader';
import styles from './Header.module.css';
import { HeaderStateType } from './types';

export const Header = ({ isLogin, login, isLoading }: HeaderStateType) => {
  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();

  const navigate = useNavigate();

  const [showLogoutButton, setShowLogout] = useState(false);

  const handleLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleEnter = () => {
    setShowLogout(true);
  };
  const handleLeave = () => {
    setShowLogout(false);
  };
  return (
    <header onMouseLeave={handleLeave} className={styles.header}>
      <img src="https://pngimg.com/uploads/nike/nike_PNG17.png" alt="logo" />
      <div onMouseLeave={handleLeave} className={styles.login}>
        {isLoading ? (
          <Preloader className={styles.loader} />
        ) : isLogin ? (
          showLogoutButton ? (
            <button onClick={handleLogout}>Log out</button>
          ) : (
            <p onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              {login === 'lehaebat' ? 'leha' : login}
            </p>
          )
        ) : (
          <button onClick={handleLogin}>Log in</button>
        )}
      </div>
    </header>
  );
};
