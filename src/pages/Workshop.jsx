import Navbar from "../components/Navbar/Navbar";
import "../App.css";
import MaintenanceImage from "../images/website-maintenance.svg";

import { useContext } from "react";
import { themeContext } from "../Context";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Workshop() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <img src={MaintenanceImage} alt="Under Maintenance" />
      <div style={{ textAlign: "center" }}>
        <span style={{ color: darkMode ? "white" : "", fontSize: "3rem" }}>
          This Page is
        </span>
        <span style={{ color: "#FCA61F", fontSize: "3rem" }}>
          {" "}
          Under Maintenance
        </span>
        <br />
        <span>
          “Sorry for the dust! We know it's taking a while but sit tight and
          we'll be with you soon.”
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default Workshop;
