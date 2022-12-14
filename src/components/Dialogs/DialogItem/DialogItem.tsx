import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';
import { DialogItemProps } from './type';

export const DialogItem: React.FC<DialogItemProps> = (props) => {
  return (
    <div className={styles.dialogWrapper}>
      <NavLink
        to={props.id.toString()}
        className={({ isActive }) => (isActive ? styles.active : '')}
        end
      >
        <div className={styles.dialog}>
          <img src={props.imgLink} alt="img" />
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};
