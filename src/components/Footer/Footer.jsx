import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kishoracademy.bd@gmail.com</span>
        <div className="f-icons">
          <Linkedin
            color="white"
            size={"3rem"}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/kishor-academy/",
                "_blank"
              )
            }
          />

          <Facebook
            color="white"
            size={"3rem"}
            onClick={() =>
              window.open("https://www.facebook.com/academykishor", "_blank")
            }
          />
          <Youtube color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
