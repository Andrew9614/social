import { RootState } from '../../redux/reduxStore';
import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';

type DialogsPropsType = {
  dialogs: RootState['dialogsPage']['dialogsData'];
};

export const Dialogs = ({ dialogs }: DialogsPropsType) => {
  return (
    <div className={styles.dialogsItems}>
      {dialogs.map((el) => (
        <DialogItem
          key={el.id}
          id={el.id}
          lastMessage={el.lastMessage}
          name={el.userName === 'lehaebat' ? 'leha' : el.userName}
          imgLink={
            el.photos.small ||
            'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
          }
        />
      ))}
    </div>
  );
};
