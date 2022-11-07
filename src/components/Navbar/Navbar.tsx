import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink to='/profile' className={({ isActive }) => (isActive ? styles.active : "")}>Profile</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/dialogs' className={({ isActive }) => (isActive ? styles.active : "")}>Dialogs</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/news' className={({ isActive }) => (isActive ? styles.active : "")}>News</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/music' className={({ isActive }) => (isActive ? styles.active : "")}>Music</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/settings' className={({ isActive }) => (isActive ? styles.active : "")}>Settings</NavLink>
			</div>
		</nav>
	);
}