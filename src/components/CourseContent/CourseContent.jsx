import { Box, Card, Paper, Stack, Typography } from "@mui/material";

function CourseContent({ content }) {
  console.log(content);
  return (
    <Card
      sx={{
        width: "100%",
        textAlign: "center",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default CourseContent;
