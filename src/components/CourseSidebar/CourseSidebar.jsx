import { Box } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CourseSidebar() {
  const [courses, setCourses] = useState(null);
  let { tag_slug } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:2368/ghost/api/content/posts/?key=${process.env.REACT_APP_GHOST_CONTENT_API_KEY}&filter=tag:${tag_slug}`
      )
      .then((res) => {
        console.log(tag_slug);
        console.log(res.data.posts);
        setCourses(res.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
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
              <ListItemButton>
                <ListItemText secondary={topic.title} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
}

export default CourseSidebar;
