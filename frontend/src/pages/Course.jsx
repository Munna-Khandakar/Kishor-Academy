import AllCourses from "../components/AllCourses/AllCourses";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import "../App.css";
import CourseSidebar from "../components/CourseSidebar/CourseSidebar";
import CourseContent from "../components/CourseContent/CourseContent";
import Stack from "@mui/material/Stack";

function Course() {
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
      <Stack direction="row" justifyContent="space-between">
        <CourseSidebar />
        <CourseContent />
      </Stack>

      {/* <Footer /> */}
    </div>
  );
}

export default Course;
