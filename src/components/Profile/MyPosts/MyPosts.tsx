import { Post } from './Post/Post';
import styles from './MyPosts.module.css';
import { MyPostsDispatchType, MyPostsStateType } from '../types';

type MyPostPropsType = MyPostsStateType & MyPostsDispatchType;

export const MyPosts = ({
  changePostText,
  addPost,
  profilePage,
}: MyPostPropsType) => {
  return (
    <div className={styles.postsBlock}>
      <div className={styles.postsSendContainer}>
        <div className={styles.sendTextArea}>
          <textarea
            onChange={(e) => changePostText(e.target.value)}
            value={profilePage.newMyPostsTextArea}
          />
        </div>
        <div className={styles.sendButton}>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <h2>My posts</h2>
      <div className={styles.posts}>
        {profilePage.postsData.map((el) => (
          <Post key={el.id} message={el.message} likes={el.likes} />
        ))}
      </div>
    </div>
  );
};
