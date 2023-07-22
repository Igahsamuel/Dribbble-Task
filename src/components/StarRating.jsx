// StarRating.js
import React from "react";

function StarRating({ rating }) {
  const maxRate = 5;
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStar = maxRate - fullStar - (hasHalfStar ? 1 : 0);

  const starIcons = [];
  for (let i = 0; i < fullStar; i++) {
    starIcons.push(<StarIcon key={i} type="full" />);
  }
  if (hasHalfStar) {
    starIcons.push(<StarIcon key="half" type="half" />);
  }
  for (let i = 0; i < emptyStar; i++) {
    starIcons.push(<StarIcon key={`empty-${i}`} type="empty" />);
  }

  return <div className="star-rating">{starIcons}</div>;
}

const StarIcon = ({ type }) => {
  return (
    <svg
      className={`star-icon ${type === "full" ? "filled" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {type === "full" && (
        <path
          fill="#008000"
          d="M12 2l2.377 7.308h7.623l-6.154 4.474 2.378 7.308-6.156-4.474-6.152 4.474 2.376-7.308L2 9.308h7.623z"
        />
      )}
      {type === "half" && (
        <path
          fill="#008000"
          d="M12 2l2.377 7.308h7.623l-6.154 4.474 2.378 7.308-6.156-4.474-6.152 4.474 2.376-7.308L2 9.308h7.623z"
          clipPath="url(#clip-star-half)"
        />
      )}
      {type === "empty" && (
        <path
          fill="#D1D5DB"
          d="M12 2l2.377 7.308h7.623l-6.154 4.474 2.378 7.308-6.156-4.474-6.152 4.474 2.376-7.308L2 9.308h7.623z"
        />
      )}
    </svg>
  );
};

export default StarRating;
