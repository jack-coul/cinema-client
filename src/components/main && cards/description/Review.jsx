import React from "react";
import styles from "./Description.module.css";

const Review = ({ review }) => {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.userNameRewiew}><span><img width={14} src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="" /></span> {review.user.name}: </div>
      <div className={styles.rewiew}>{review.text}</div>
    </div>
  );
};

export default Review;
