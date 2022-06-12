import { Box } from "@mui/material";
import React from "react";

function CourseContent() {
  return (
    <Box
      bgcolor={"red"}
      flex={7}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      CourseContent
    </Box>
  );
}

export default CourseContent;
