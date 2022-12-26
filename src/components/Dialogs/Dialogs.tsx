import { Field, Form, Formik } from 'formik';
import { DialogItem } from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogsDispatchType, DialogsStateType } from './types';

type DialogsPropsType = DialogsStateType & DialogsDispatchType;

export const Dialogs = ({ state, addMessage }: DialogsPropsType) => {
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
        <MessageForm addMessage={addMessage} />
      </div>
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
