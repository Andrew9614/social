import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { MyPostsDispatchType, MyPostsStateType } from '../types';
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';

type MyPostPropsType = MyPostsStateType & MyPostsDispatchType;

export const MyPosts = ({ addPost, profilePage }: MyPostPropsType) => {
  return (
    <div className={styles.postsBlock}>
      <PostForm addPost={addPost} />
      <h2>My posts</h2>
      <div className={styles.posts}>
        {profilePage.postsData.map((el) => (
          <Post key={el.id} message={el.message} likes={el.likes} />
        ))}
      </div>
    </div>
  );
};

type PostFormProps = { addPost: (m: string) => void };
const PostForm = ({ addPost }: PostFormProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textarea = textareaRef.current;
  const handleTextareaChange = () => {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };
  return (
    <Formik
      initialValues={{
        post: '',
      }}
      onSubmit={(value, { setFieldValue, setSubmitting }) => {
        if (value.post) addPost(value.post);
        setSubmitting(false);
        setFieldValue('post', '');
        if (textarea) textarea.style.height = 'auto';
      }}
    >
      {({ isSubmitting }) => (
        <Form
          onChange={handleTextareaChange}
          className={styles.postsSendContainer}
        >
          <Field
            name="post"
            component="textarea"
            innerRef={textareaRef}
            placeholder="Write your post..."
            className={styles.sendTextArea}
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
