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

export const Header = ({
  isLogin,
  login,
  isLoading,
  handleChangeNavbarActive,
}: HeaderStateType) => {
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
      <div
        className={styles.menuButton}
        onClick={() => handleChangeNavbarActive()}
      >
        <svg viewBox="0 0 10 8" width="35">
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <svg
        className={styles.logo}
        width="50"
        height="50"
        viewBox="0 0 256 239"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g fill="#ffffff">
          <path d="M197.278 134.703c-.003-2.67-2.169-5.072-5.081-5.072-1.176 0-2.378.4-3.365 1.286-12.854 11.55-34.73 21.765-61.186 21.833h-.107c-26.411-.068-47.66-10.692-61.187-21.83-.856-.704-2.442-1.187-3.47-1.187-3.142 0-4.97 2.675-4.973 5.617-.002 2.27 1.589 4.165 2.898 6.131 7.584 11.385 31.108 30.719 66.509 30.719h.554c35.399 0 58.923-19.334 66.508-30.719 1.31-1.966 2.902-4.509 2.9-6.778" />
          <path d="M198.329 212.745c.4.532.612.986.612 1.477 0 .739-.7 1.246-1.582 1.246-6.392 0-26.087-10.612-36.454-19.358-1.42-1.196-3.406-1.635-6.225-1.02a127.33 127.33 0 0 1-27.083 2.896c-58.654 0-106.205-39.257-106.205-87.698 0-48.417 47.551-87.668 106.205-87.668 58.648 0 106.196 39.251 106.196 87.668 0 28.905-16.933 54.534-43.05 70.51-1.745 1.068-3.605 3.075-3.605 5.587 0 5.156 4.845 17.937 11.19 26.36zm34.147 10.701c-9.013-5.134-17.566-13.815-21.485-25.712-.768-2.332-.086-4.217 1.712-5.607 26.075-20.159 42.482-49.426 42.482-82.02C255.185 49.314 198.06.033 127.598.033 57.128.034 0 49.314 0 110.106c0 60.821 57.128 110.111 127.598 110.111 9.207 0 18.184-.842 26.838-2.442 2.124-.392 3.851.106 5.265.975 17.462 10.714 43.465 19.702 66.27 19.702 7.346 0 10.171-4.659 10.171-8.902 0-2.737-1.483-4.861-3.666-6.104z" />
        </g>
      </svg>
      {/* <img
        src="https://www.freepnglogos.com/uploads/facebook-messenger-png/black-messenger-facebook-logo-latest-facebook-logo-icon-gif-10.png"
        alt="logo"
      /> */}
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
