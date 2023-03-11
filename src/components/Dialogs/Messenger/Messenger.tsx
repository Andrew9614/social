import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { ProfilePage } from '../../../redux/profilePageReducer';
import { RootState } from '../../../redux/reduxStore';
import { Preloader } from '../../common/Preloader/Preloader';
import { Message } from './Message/Message';
import { MessageForm } from './MessageForm';
import styles from './Messenger.module.css';

type MessengerPropsType = {
  messages: RootState['dialogsPage']['messagesData'];
  hasMore: boolean;
  isMessagesLoading: boolean;
  authData: {
    id: string;
    email: string;
    login: string;
  };
  activeUser: ProfilePage['profileInfo'] | undefined;
  addMessage: (message: string) => void;
  getMessages: () => void;
  deleteMessage: (is: string) => void;
};

export const Messenger = ({
  messages,
  hasMore,
  isMessagesLoading,
  authData,
  activeUser,
  addMessage,
  getMessages,
  deleteMessage,
}: MessengerPropsType) => {
  return (
    <div className={styles.messenger}>
      <div className={styles.messengerHeader}>
        <Link to="/dialogs">
          <button>back</button>
        </Link>
        <div>{activeUser?.fullName}</div>
        <Link
          to={'/profile/' + activeUser?.userId}
          className={styles.activeUserImageWrapper}
        >
          <img
            className={styles.activeUserImage}
            src={
              activeUser?.photos.small ||
              'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
            }
            alt="img"
          />
        </Link>
      </div>
      <div id="messagesWrapper" className={styles.messagesWrapper}>
        {
          <InfiniteScroll
            className={styles.messages}
            style={{ overflow: 'unset' }}
            dataLength={messages.length}
            next={() => getMessages()}
            hasMore={hasMore}
            inverse={true}
            loader={<Preloader className={styles.messagesLoading} />}
            scrollableTarget="messagesWrapper"
          >
            {messages.map((el) => (
              <Message
                key={el.id}
                message={el}
                self={el.senderId === authData.id}
                temp={el.temp}
                viewed={el.viewed}
                deleteMessage={deleteMessage}
              />
            ))}
          </InfiniteScroll>
        }
      </div>
      <MessageForm addMessage={addMessage} />
    </div>
  );
};
