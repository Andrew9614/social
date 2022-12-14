import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogsDispatchType, DialogsStateType } from './types';

type DialogsPropsType = DialogsStateType & DialogsDispatchType;

export const Dialogs = ({ state, onChange, onClick }: DialogsPropsType) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {state.dialogsData.map((el) => (
          <DialogItem
            key={el.id}
            id={el.id}
            name={el.name}
            imgLink={el.imgLink}
          />
        ))}
      </div>
      <div className={styles.messenger}>
        <div className={styles.messagesWrapper}>
          {state.messagesData.map((el) => (
            <Message key={el.id} message={el.message} self={el.self} />
          ))}
        </div>
        <div className={styles.sendWrapper}>
          <textarea
            className={styles.messageTextArea}
            onChange={onChange}
            value={state.newMessageTextArea}
          />
          <button className={styles.sendButton} onClick={onClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
