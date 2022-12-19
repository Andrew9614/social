import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogsDispatchType, DialogsStateType } from './types';

type DialogsPropsType = DialogsStateType & DialogsDispatchType;

export const Dialogs = ({ state, addMessage, changeMessageText }: DialogsPropsType) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {state.dialogsData.map((el) => (
          <DialogItem
            key={el.id}
            id={el.id}
            name={el.name}
            imgLink={
              el.imgLink ||
              'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
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
            onChange={(e)=>changeMessageText(e.target.value)}
            value={state.newMessageTextArea}
          />
          <button className={styles.sendButton} onClick={addMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
