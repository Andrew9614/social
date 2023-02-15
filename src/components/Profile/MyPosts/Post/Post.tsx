import * as React from 'react';
import styles from './Post.module.css';

type PostPropsMessage = {
  message: string;
  likes: number;
};

export const Post: React.FC<PostPropsMessage> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.postLeft}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
          alt="avatar"
        />
        <div className={styles.postLikes}>
          <button>{props.likes}</button>
        </div>
      </div>
      <div className={styles.postText}>{props.message}</div>
    </div>
  );
};
