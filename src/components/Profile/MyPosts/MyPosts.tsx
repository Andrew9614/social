import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { MyPostsDispatchType, MyPostsStateTypes } from './types';

type MyPropsType = MyPostsStateTypes & MyPostsDispatchType;

export const MyPosts = ({
  changePostText,
  addPost,
  newMyPostsTextArea,
  postsData,
}: MyPropsType) => {
  return (
    <div className={styles.postsBlock}>
      <div className={styles.postsSendContainer}>
        <div className={styles.sendTextArea}>
          <textarea
            onChange={(e)=>changePostText(e.target.value)}
            value={newMyPostsTextArea}
          />
        </div>
        <div className={styles.sendButton}>
          <button onClick={addPost}>Add post</button>
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
