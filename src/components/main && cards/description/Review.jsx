import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div>{review.user.name}</div>
      <div>{review.text}</div>
    </div>
  );
};

export default Review;
