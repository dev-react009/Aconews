import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
