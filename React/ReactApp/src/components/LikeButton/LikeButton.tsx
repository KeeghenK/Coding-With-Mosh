import { useState } from 'react';
import styles from './LikeButton.module.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [fullHeart, setFullHeart] = useState(false);

  const set = () => {
    setFullHeart(fullHeart === false ? true : false);
  };

  return (
    <div onClick={onClick}>
      <button onClick={set} className={styles.likeButton}>
        {fullHeart === true ? (
          <AiFillHeart className={styles.fullLikeButton} />
        ) : (
          <AiOutlineHeart className={styles.outlinedLikeButton} />
        )}
      </button>
    </div>
  );
};

export default LikeButton;
