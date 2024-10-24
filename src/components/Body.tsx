import Banner from "./Banner.tsx";
import { Box } from "@mui/material";
import React from "react";
import Timeline from "./timeline/Timeline.tsx";

const Body = () => {
  return (
    <Box>
      <Banner />
      <Timeline />
    </Box>
  );
};

export default Body;
