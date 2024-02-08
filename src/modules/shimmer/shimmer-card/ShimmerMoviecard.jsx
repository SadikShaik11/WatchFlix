// ShimmerCard.js

import React from "react";
import "./ShimmerMoviecard.css";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-content">
        <div className="shimmer-title"></div>
        <div className="shimmer-text"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
