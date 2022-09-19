import React from "react";
import "./Card3.css";
import { useNavigate } from "react-router-dom";

const Card3 = ({ emoji, name, description, color, tag_slug }) => {
  const navigate = useNavigate();
  return (
    <div className="card2" style={{ borderColor: { color } }}>
      <img src={emoji} alt={tag_slug} />
      <span>{name}</span>
      <span className="card-text-warp">
        {description.substring(0, 50) + "..."}
      </span>
      <button
        className="c-button"
        onClick={() => navigate(`/courses/${tag_slug}`)}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Card3;
