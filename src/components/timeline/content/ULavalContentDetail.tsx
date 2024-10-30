import * as React from "react";

import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const ULavalContentDetail = () => {
  const { t } = useTranslation();

  return [
    <Box>
      <Typography>{t("timeline.ulaval.content3")}</Typography>
    </Box>,
    <Box>
      <Typography>{t("timeline.ulaval.content2")}</Typography>
    </Box>,
    <Box>
      <Typography>{t("timeline.ulaval.content1")}</Typography>
    </Box>,
  ];
};

export default ULavalContentDetail;
