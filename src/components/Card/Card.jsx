import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ emoji, heading, detail, color, tag_slug }) => {
  let navigate = useNavigate();
  const navigateToCourse = () => {
    console.log(tag_slug);
  };
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt={tag_slug} />
      <span>{heading}</span>
      <span>{detail}</span>
      <button
        className="c-button"
        onClick={() => navigate(`/course/${tag_slug}`)}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;
