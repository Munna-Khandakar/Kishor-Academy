import AllCourses from "../components/AllCourses/AllCourses";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import "../App.css";
import Card3 from "../components/Card3/Card3";

function Courses() {
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
      <div className="all-courses">
        <Card3
          name={"Beginner"}
          emoji={require("../images/level1.png")}
          description={"Easy Courses for the beginner to start."}
          color={"red"}
          tag_slug={"beginner"}
        />
        <Card3
          name={"Intermediate"}
          emoji={require("../images/level2.png")}
          description={
            "Comparatively hard courses for the Intermediate learners"
          }
          color={"red"}
          tag_slug={"intermediate"}
        />
        <Card3
          name={"Advanced"}
          emoji={require("../images/level3.png")}
          description={"Advanced Courses for the Advanced learners"}
          color={"red"}
          tag_slug={"advanced"}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
