import * as React from 'react';
import styles from './Post.module.css';

type PostPropsMessage = {
	name: string
  message: string;
  likes: number;
  id: number;
  photoLink: string;
  addLike: (id: number) => void;
};

export const Post: React.FC<PostPropsMessage> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.postLeft}>
        <img
          src={
            props.photoLink ||
            'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
          }
          alt={'avatar'}
        />
        <div className={styles.postLikes}>
          <button onClick={()=>props.addLike(props.id)}>Likes: {props.likes}</button>
        </div>
      </div>
      <div className={styles.postText}>{props.name}</div>
    </div>
  );
};
