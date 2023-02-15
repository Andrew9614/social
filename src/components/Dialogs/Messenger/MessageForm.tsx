import { Field, Form, Formik } from "formik";
import styles from './Messenger.module.css';


type MessageFormProps = { addMessage: (m: string) => void };
export const MessageForm = ({ addMessage }: MessageFormProps) => {
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