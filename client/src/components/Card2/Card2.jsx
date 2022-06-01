import React from "react";
import HeartEmoji from "../../img/heartemoji.png";
import "./Card2.css";

const Card2 = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card2" style={{ borderColor: { color } }}>
      <img src={HeartEmoji} alt="" />
      <span>{"heading"}</span>
      <span>{"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card2;
