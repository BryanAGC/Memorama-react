import React from "react";
import "../styles/Card.css";

const Card = ({ card, flipped, onFlip }) => {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onFlip}>
      <div className="card-back">?</div>
      <img src={card.src} alt="card" className="card-image" />
    </div>
  );
};

export default Card;
