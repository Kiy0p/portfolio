import { Box, Typography } from "@mui/material";

import Image from "../../../library/Image.tsx";
import React from "react";
import theme from "../../../theme.js";

const KoremContentSummary = () => {
  return [
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2023-2024 - Korem</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image
          src="./images/logo_ts.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_kotlin.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_spring.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
      </Box>
    </Box>,
  ];
};

export default KoremContentSummary;
