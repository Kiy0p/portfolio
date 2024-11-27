import * as React from "react";

import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const EpitechContentDetail = () => {
  const { t } = useTranslation();
  return [
    <Box>
      <Typography>{t("timeline.epitech.content3")}</Typography>
    </Box>,
    <Box>
      <Typography>{t("timeline.epitech.content2")}</Typography>
    </Box>,
    <Box>
      <Typography>
        - Développement en C de projets d'école. devant suivre sertaines contraintes
      </Typography>
    </Box>,
  ];
};

export default EpitechContentDetail;
