import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { MyPostsDispatchType, MyPostsStateTypes } from './types';

type MyPropsType = MyPostsStateTypes & MyPostsDispatchType;

export const MyPosts = ({
  handleChangeTextArea,
  handleClickButton,
  newMyPostsTextArea,
  postsData,
}: MyPropsType) => {
  return (
    <div className={styles.postsBlock}>
      <div className={styles.postsSendContainer}>
        <div className={styles.sendTextArea}>
          <textarea
            onChange={handleChangeTextArea}
            value={newMyPostsTextArea}
          />
        </div>
        <div className={styles.sendButton}>
          <button onClick={handleClickButton}>Add post</button>
        </div>
      </div>
      <h2>My posts</h2>
      <div className={styles.posts}>
        {postsData.map((el) => (
          <Post key={el.id} message={el.message} likes={el.likes} />
        ))}
      </div>
    </div>
  );
};
