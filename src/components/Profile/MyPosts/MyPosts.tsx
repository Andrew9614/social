import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { MyPostsDispatchType, MyPostsStateType } from '../types';
import { Field, Form, Formik } from 'formik';
import { useRef } from 'react';

type MyPostPropsType = MyPostsStateType & MyPostsDispatchType;

export const MyPosts = ({ addPost, profilePage, addLike }: MyPostPropsType) => {
  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <PostForm addPost={addPost} />
      <div className={styles.posts}>
        {profilePage.postsData.map((el) => (
          <Post
            name={profilePage.profileInfo.fullName}
            addLike={addLike}
            key={el.id}
            id={el.id}
            photoLink={profilePage.profileInfo.photos.small}
            message={el.message}
            likes={el.likes}
          />
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
