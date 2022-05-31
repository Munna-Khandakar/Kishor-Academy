import React, { useContext } from "react";
import "./Workshop.css";
import report from "../../images/report.png";
import block from "../../images/block.png";
import code from "../../images/code.png";
import machineLearning from "../../images/machineLearning.png";
import roboticArm from "../../images/roboticArm.png";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";

import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="Workshop">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Working with these
          </span>
          <span>Technologies</span>
          <spane>
            Technology is the product of transferring scientific knowledge to
            practical use.
            <br />
            Kishor Academy is currently working with Blockchian, Machine
            Learning, Artificial Interlligence,Robotics.
            <br />
            We are advancing with future trends. We are expecting your support.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Join Workshop</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={block} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={machineLearning} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={code} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={roboticArm} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={report} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
