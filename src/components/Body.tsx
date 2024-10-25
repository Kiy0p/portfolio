import Banner from "./Banner.tsx";
import { Box } from "@mui/material";
import React from "react";
import Timeline from "./timeline/Timeline.tsx";
import styled from "@emotion/styled";

const Body = () => {
  return (
    <StyledBox>
      <Banner />
      <Timeline />
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({theme}) => ({
  background: "linear-gradient(90deg, rgba(74,98,138,1) 0%, rgba(122,178,211,1) 50%, rgba(185,229,232,1) 100%)"
}));

export default Body;
