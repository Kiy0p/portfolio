import * as React from "react";

import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const KoremContentDetail = () => {
  const { t } = useTranslation();

  return [
    <Box>
      <Typography>Développement de solutions clients en Typescript avec React et en Kotlin avec Spring
      </Typography>
      <Typography>{t("timeline.korem.content1")}</Typography>
    </Box>,
  ];
};

export default KoremContentDetail;
