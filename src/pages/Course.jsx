import AllCourses from "../components/AllCourses/AllCourses";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import "../App.css";
import CourseSidebar from "../components/CourseSidebar/CourseSidebar";
import CourseContent from "../components/CourseContent/CourseContent";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Course() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [courses, setCourses] = useState(null);
  const [content, setContent] = useState("");
  let { tag_slug } = useParams();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GHOST_APP_URL}/ghost/api/content/posts/?key=${process.env.REACT_APP_GHOST_CONTENT_API_KEY}&filter=tag:${tag_slug}`
      )
      .then((res) => {
        setCourses(res.data.posts);
        setContent(res.data.posts[0].html);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
        {/* sidebar */}
        <Box
          flex={2}
          sx={{
            width: "100%",
            maxWidth: 360,
            maxHeight: 1000,
            "& ul": { padding: 0 },
          }}
        >
          <List>
            {courses &&
              courses.map((topic, index) => (
                <ListItem key={index}>
                  <ListItemButton onClick={() => setContent(topic.html)}>
                    <ListItemText secondary={topic.title} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Box>
        {/* couse content  */}
        {content && <CourseContent content={content} />}
      </Stack>

      {/* <Footer /> */}
    </div>
  );
}

export default Course;
