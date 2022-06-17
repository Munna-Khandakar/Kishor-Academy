import { Box, Paper, Typography } from "@mui/material";

function CourseContent() {
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
      <Paper elevation={5}>
        <Typography variant="h2" component="h1">
          JavaScript Tutorial
        </Typography>
      </Paper>
    </Box>
  );
}

export default CourseContent;
