import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/reduxStore';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const userId = useSelector((state: RootState) => state.authData.data.id);
  return (
    <nav className={styles.nav}>
      <div className={styles.items}>
        <div className={styles.item}>
          <NavLink
            to={'/profile/' + userId}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Dialogs
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Users
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            News
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
