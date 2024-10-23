import { Box, Typography } from "@mui/material";

import Image from "../../../library/Image.tsx";
import React from "react";
import theme from "../../../theme.js";

const ULavalContentSummary = () => {
  return [
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2023 - Maîtrise, seconde année</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image
          src="./images/logo_spring.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_kotlin.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_ts.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_java.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2022 - Maîtrise, première année</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image
          src="./images/logo_docker.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_kubernetes.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_java.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2021 - Certificat en informatique</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image
          src="./images/logo_java.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_vue.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_react.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_unity.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
      </Box>
    </Box>,
  ];
};

export default ULavalContentSummary;
