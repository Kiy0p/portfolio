import { Box, Typography } from "@mui/material";

import Image from "../../../library/Image.tsx";
import React from "react";
import theme from "../../../theme.js";
import { useTranslation } from "react-i18next";

const EpitechContentSummary = () => {
  const { t } = useTranslation();

  return [
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>{t("timeline.epitech.title3")}</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image
          src="./images/logo_html.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_css.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_js.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_python.png"
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
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>{t("timeline.epitech.title2")}</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image
          src="./images/logo_c.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_cpp.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_python.png"
          width={theme.spacing(4)}
          height={theme.spacing(4)}
        />
        <Image
          src="./images/logo_splunk.png"
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
      <Typography>{t("timeline.epitech.title1")}</Typography>
      <Image
        src="./images/logo_c.png"
        width={theme.spacing(4)}
        height={theme.spacing(4)}
      />
    </Box>,
  ];
};

export default EpitechContentSummary;
