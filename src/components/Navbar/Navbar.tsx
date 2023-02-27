import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/reduxStore';
import styles from './Navbar.module.css';

type NavbarType = {
  handleChangeNavbarActive: (status?: boolean) => void;
  navbarActive: boolean;
};
export const Navbar = ({
  handleChangeNavbarActive,
  navbarActive,
}: NavbarType) => {
  const userId = useSelector((state: RootState) => state.authData.data.id);
  return (
    <nav className={styles.nav + (navbarActive ? ' ' + styles.active : '')}>
      <div className={styles.items}>
        <div className={styles.item}>
          <NavLink
            onClick={() => handleChangeNavbarActive(false)}
            to={'/profile/' + userId}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            onClick={() => handleChangeNavbarActive(false)}
            to="/dialogs"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Dialogs
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink
            onClick={() => handleChangeNavbarActive(false)}
            to="/users"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Users
          </NavLink>
          {/* </div>
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
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};
