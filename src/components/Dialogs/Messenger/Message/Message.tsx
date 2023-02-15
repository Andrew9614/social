import { useEffect, useRef, useState } from 'react';
import { Preloader } from '../../../common/Preloader/Preloader';
import styles from './Message.module.css';
import { MessageProps } from './type';

export const Message: React.FC<MessageProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  let [popupEnter, setPopupEnter] = useState(false);

  useEffect(() => {
    if (ref.current && props.temp)
      ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [props.temp]);

  const timer: React.MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  useEffect(() => {
    if (popupEnter) {
      timer.current = setTimeout(() => {
        popupRef.current?.classList.remove(styles.leave);
        popupRef.current?.classList.add(styles.active);
      }, 1000);
    } else {
      if (timer.current) clearTimeout(timer.current);
      if (popupRef.current?.classList.contains(styles.active)) {
        popupRef.current?.classList.remove(styles.active);
        popupRef.current?.classList.add(styles.leave);
      }
    }
  }, [popupEnter]);

  const handleEnter = () => {
    setPopupEnter(true);
    // setTimeout(() => {
    //   if (!popupEnter) return;
    //   popupRef.current?.classList.remove(styles.leave);
    //   popupRef.current?.classList.add(styles.active);
    // }, 1000);
  };
  const handleLeave = () => {
    setPopupEnter(false);
    // popupRef.current?.classList.remove(styles.active);
    // popupRef.current?.classList.add(styles.leave);
  };
  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={
        props.self
          ? styles.messageContainer + ' ' + styles.selfMessage
          : styles.messageContainer
      }
    >
      <div ref={popupRef} className={styles.messagePopUp}>
        <button onClick={() => props.deleteMessage(props.message.id)}>
          delete
        </button>
      </div>

      {/* <img src={props.avatar} alt="avatar" className={s.avatarMessage} /> */}
      <div className={styles.textBlockMessage}>
        <div className={styles.tailMessageContainer}>
          <svg className={styles.tailMessage} viewBox="0 0 565.29 565.29">
            <path
              d="M560.81,1105.62v.05H1125.1V541.38h0C1013.1,777.77,779.69,1039.93,560.81,1105.62Z"
              transform="translate(-560.31 -540.88)"
            />
          </svg>
        </div>

        {/* <div className={styles.nameMessage}>{props.name}</div> */}
        <div className={styles.textMessage}>{props.message.body}</div>
        {(props.temp && <Preloader innerClass={styles.messageLoading} />) ||
          (!props.viewed && props.self && (
            <div className={styles.messageState} />
          ))}
        {/* <div className={styles.timeMessage}>{props.time}</div> */}
      </div>
    </div>
  );
};
