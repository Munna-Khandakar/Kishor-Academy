import AllCourses from "../components/AllCourses/AllCourses";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import "../App.css";

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
      <AllCourses />
      <Footer />
    </div>
  );
}

export default Courses;
