import React from "react";
import styles from "./Description.module.css";

const Review = ({ review }) => {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.userNameRewiew}>{review.user.name}: </div>
      <div className={styles.rewiew}>{review.text}</div>
    </div>
  );
};

export default Review;
