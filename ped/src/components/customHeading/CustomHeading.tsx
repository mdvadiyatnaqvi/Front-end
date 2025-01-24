import React from "react";
import { Box, Typography } from "@mui/material";

const CustomHeading = ({ children }) => {
  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        padding: "5px",
        margin: "0px 1px",
        minWidth: "380px",
        borderLeft: "4px solid orange",
        background: "white",
      }}
    >
      <Typography variant="h6">{children}</Typography>
    </Box>
  );
};

export default CustomHeading;