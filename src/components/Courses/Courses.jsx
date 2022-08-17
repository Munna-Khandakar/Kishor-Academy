import React, { useContext } from "react";
import "./Courses.css";
import Card from "../Card/Card";

import { useState, useEffect } from "react";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
//import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
const Courses = () => {
  // context
  const [courses, setCourses] = useState(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //routing
  const navigate = useNavigate();
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GHOST_APP_URL}/ghost/api/content/tags/?key=${process.env.REACT_APP_GHOST_CONTENT_API_KEY}&limit=3`
      )
      .then((res) => {
        //  console.log(res.data.tags);
        setCourses(res.data.tags);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
      {courses ? (
        <div className="cards">
          {/* first card */}
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <Card
              emoji={courses[0].feature_image}
              heading={courses[0].name}
              detail={courses[0].description.substring(0, 50) + "..."}
              tag_slug={courses[0].slug}
            />
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          >
            <Card
              emoji={courses[1].feature_image}
              heading={courses[1].name}
              detail={courses[1].description.substring(0, 50) + "..."}
              tag_slug={courses[1].slug}
            />
          </motion.div>
          {/* 3rd */}
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <Card
              emoji={courses[2].feature_image}
              heading={courses[2].name}
              detail={courses[2].description.substring(0, 50) + "..."}
              tag_slug={courses[2].slug}
              color="rgba(252, 166, 31, 0.45)"
            />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      ) : (
        <div className="cards">
          {/* first card */}
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <CardSkeleton />
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          >
            <CardSkeleton />
          </motion.div>
          {/* 3rd */}
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <CardSkeleton />
          </motion.div>
          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Courses;
