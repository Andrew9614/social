import * as React from 'react';
import styles from './Post.module.css';

type PostPropsMessage = {
  message: string;
  likes: number;
};

export const Post: React.FC<PostPropsMessage> = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>{props.likes}</span>
      </div>
    </div>
  );
};
