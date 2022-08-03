import React from "react";
import "./Card2.css";
import { useNavigate } from "react-router-dom";

const Card2 = ({ emoji, name, description, color, tag_slug }) => {
  const navigate = useNavigate();
  return (
    <div className="card2" style={{ borderColor: { color } }}>
      <img src={emoji} alt={tag_slug} />
      <span>{name}</span>
      <span className="card-text-warp">{description}</span>
      <button
        className="c-button"
        onClick={() => navigate(`/course/${tag_slug}`)}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Card2;
