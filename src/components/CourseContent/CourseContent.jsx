import { Box, Paper, Typography } from "@mui/material";

function CourseContent({ content }) {
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
      <Paper elevation={5}>{content}</Paper>
    </Box>
  );
}

export default CourseContent;
