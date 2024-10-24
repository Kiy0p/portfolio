import { Box, useTheme } from "@mui/material";

import Image from "../library/Image.tsx";
import React from "react";

const Banner = () => {
  const theme = useTheme();

  return (
    <Box>
      <Image
        src="./images/other/profile_pic.jpg"
        width={theme.spacing(90)}
        height={theme.spacing(135)}
        sx={{ml: theme.spacing(10)}}
      />
    </Box>
  );
};

export default Banner;
