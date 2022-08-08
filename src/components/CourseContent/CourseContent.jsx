import { Box, Paper, Typography } from "@mui/material";

function CourseContent({ content }) {
  console.log(content);
  return (
    <Box
      flex={8}
      sx={{
        display: "flex",
        textAlign: "center",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Paper elevation={5} dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}

export default CourseContent;
