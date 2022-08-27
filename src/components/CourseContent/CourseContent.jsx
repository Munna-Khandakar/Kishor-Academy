import { Box, Card, Paper, Stack, Typography } from "@mui/material";
import "./CourseContent.css";
function CourseContent({ content }) {
  console.log(content);

  return (
    <div
      className="course-content-wrapper"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default CourseContent;
