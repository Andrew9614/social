import { Link } from 'react-router-dom';
import styles from './../Dialogs.module.css';
import { DialogItemProps } from './type';

export const DialogItem: React.FC<DialogItemProps> = (props) => {
  return (
    <div className={styles.dialogWrapper}>
      <Link
        to={props.id.toString()}
      >
        <div className={styles.dialog}>
          <img src={props.imgLink} alt="img" />
          {props.name}
        </div>
				<div className={styles.dialogInfo}>
					<div className={styles.dialogLastMessage}>{props.lastMessage}</div>
				</div>
      </Link>
    </div>
  );
};
