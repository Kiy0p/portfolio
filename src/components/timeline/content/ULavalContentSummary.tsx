import { Box, Typography } from "@mui/material";

import Image from "../../../library/Image.tsx";
import React from "react";
import theme from "../../../theme.js";
import { useTranslation } from "react-i18next";

const ULavalContentSummary = () => {
  const { t } = useTranslation();

  return [
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>{t("timeline.ulaval.title3")}</Typography>
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
      <Typography>{t("timeline.ulaval.title2")}</Typography>
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
      <Typography>{t("timeline.ulaval.title1")}</Typography>
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
