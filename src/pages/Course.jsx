import Navbar from "../components/Navbar/Navbar";
import { themeContext } from "../Context";
import "../App.css";
import CourseContent from "../components/CourseContent/CourseContent";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ProgressLine from "../components/ProgressLine/ProgressLine";

function Course() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [courses, setCourses] = useState(null);
  const [content, setContent] = useState("");
  const [completedPart, setCompletedPart] = useState(1);
  const [totalCourseSize, setTotalCourseSize] = useState(1);
  let { tag_slug } = useParams();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GHOST_APP_URL}/ghost/api/content/posts/?key=${process.env.REACT_APP_GHOST_CONTENT_API_KEY}&filter=tag:${tag_slug}`
      )
      .then((res) => {
        setTotalCourseSize(res.data.posts.length);
        setCourses(res.data.posts.reverse());
        setContent(res.data.posts[0].html);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (context) => {
    setContent(context);
    setAnchorEl(null);
  };
  return (
    <>
      <div className="App">
        <Navbar />
        <ProgressLine
          // label="Two visual percentages"
          backgroundColor="lightgrey"
          visualParts={[
            {
              // percentage: "53%",
              percentage: `${(completedPart / totalCourseSize) * 100}%`,
              color: "#FCA61F",
            },
          ]}
        />
      </div>

      <div
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Box>
            {/* sidebar */}
            <Box
              flex={4}
              sx={{
                display: { xs: "none", sm: "block" },
                "& ul": { padding: 0 },
              }}
            >
              <List>
                {courses &&
                  courses.map((topic, index) => (
                    <ListItem key={index}>
                      <ListItemButton
                        onClick={() => {
                          setContent(topic.html);
                          setCompletedPart(index + 1);
                        }}
                      >
                        <ListItemText secondary={topic.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
              </List>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {courses &&
                  courses.map((topic, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        handleClose(topic.html);
                        setCompletedPart(index + 1);
                      }}
                    >
                      {topic.title}
                    </MenuItem>
                  ))}
              </Menu>
              <br />
            </Box>
          </Box>
          <Box flex={8}>
            {/* course content  */}
            {content && <CourseContent content={content} />}
          </Box>
        </Stack>
      </div>
    </>
  );
}

export default Course;
