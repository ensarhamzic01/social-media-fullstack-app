import React from "react";
import "./Card.css";

function Card({ children, className }) {
  const cardClasses = `card ${className || ""}`;
  return <div className={cardClasses}>{children}</div>;
}

export default Card;
