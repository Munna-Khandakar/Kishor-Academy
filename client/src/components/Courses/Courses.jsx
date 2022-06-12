import React, { useContext } from "react";
import "./Courses.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
//import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //routing
  const navigate = useNavigate();
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Courses">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Courses</span>
        <spane>
          What's more, it's already a popular way of learning in the country.
          <br />
          Taking an online course can help develop skills and knowledge
        </spane>
        <a>
          <button
            className="button s-button"
            onClick={() => navigate("/courses")}
          >
            More Courses
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Machine Learning"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Blockchain"}
            detail={"Solidity, Metamask, Ethereum, Hardhat "}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Artificial Intelligence"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Courses;
