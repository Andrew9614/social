import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import {
  getHasMoreSelector,
  getMessagesSelector,
  isMessagesLoadingSelector,
} from '../../../redux/dialogsPageSelectors';
import { DispatchAction } from '../../../redux/type';
import { Preloader } from '../../common/Preloader/Preloader';
import { Message } from './Message/Message';
import styles from './Messenger.module.css';
import {
  clearMessages,
  getMessages,
  sendMessage,
} from '../../../redux/dialogsPageReducer';
import { RootState } from '../../../redux/reduxStore';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAuthDataSelector } from '../../../redux/authSelector';

type MessengerPropsType = {
  isDialogsActive: boolean;
	name: string;
	img: string;
};
export const Messenger = ({ isDialogsActive }: MessengerPropsType) => {
  const messages = useSelector(getMessagesSelector);
  const isMessagesLoading = useSelector(isMessagesLoadingSelector);
  const authData = useSelector(getAuthDataSelector);
  const hasMore = useSelector(getHasMoreSelector);
  const userId = useParams().userId || '';

  const dispatch: ThunkDispatch<RootState, unknown, DispatchAction> =
    useDispatch();

  useEffect(() => {
    if (userId) dispatch(getMessages(userId));
  }, [dispatch, userId]);

  useEffect(
    () => () => {
      dispatch(clearMessages());
    },
    [dispatch]
  );

  const addMessage = (message: string) => {
    dispatch(sendMessage(userId, authData.id, authData.login, message));
  };

  return (
    <div
      className={
        styles.messenger + (!isDialogsActive ? ' ' + styles.active : '')
      }
    >
      <div className={styles.messengerHeader}>
        <Link to="/dialogs">
          <button>back</button>
        </Link>
        <div>name</div>
        <div>img</div>
      </div>
      <div id="messagesWrapper" className={styles.messagesWrapper}>
        <InfiniteScroll
          className={styles.messages}
          style={{ overflow: 'hidden' }}
          dataLength={messages.length}
          next={() => dispatch(getMessages(userId))}
          hasMore={hasMore}
          endMessage={
            <div className={styles.messagesLastMessage}>no more messages</div>
          }
          inverse={true}
          loader={
            <div className={styles.messagesLoading}>
              <Preloader />
            </div>
          }
          scrollableTarget="messagesWrapper"
        >
          {isMessagesLoading ? (
            <Preloader />
          ) : (
            messages.map((el) => (
              <Message
                key={el.id}
                message={el.body}
                self={el.senderId === authData.id}
                temp={el.temp}
              />
            ))
          )}
        </InfiniteScroll>
      </div>
      <MessageForm addMessage={addMessage} />
    </div>
  );
};

type MessageFormProps = { addMessage: (m: string) => void };
const MessageForm = ({ addMessage }: MessageFormProps) => {
  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={(value, { setFieldValue, setSubmitting }) => {
        setSubmitting(false);
        setFieldValue('message', '');
        if (value.message) addMessage(value.message);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form
          className={styles.sendWrapper}
          onKeyDown={(e) => {
            if (e.code === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        >
          <Field
            component="textarea"
            autoFocus={true}
            className={styles.messageTextArea}
            name="message"
            placeholder="Write your message..."
          />
          <button
            className={styles.sendButton}
            type="submit"
            disabled={isSubmitting}
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
