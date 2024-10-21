import { Box, Typography } from "@mui/material";

import Image from "../../library/Image.tsx";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Timeline as MuiTimeline } from "@mui/lab";
import React from "react";
import TimelineContent from "./TimelineContent.tsx";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "./TimelineOppositeContent.tsx";
import TimelineSeparator from "./TimelineSeparator.tsx";
import WorkIcon from "@mui/icons-material/Work";
import { useTheme } from "@mui/material/styles";

const Timeline = () => {
  const theme = useTheme();

  const koremContent = [<Typography>2023-2024 - Korem</Typography>];

  const uLavalContent = [
    <Typography>2023 - Maîtrise, seconde année</Typography>,
    <Typography>2022 - Maîtrise, première année</Typography>,
    <Typography>2021 - Certificat en informatique</Typography>,
  ];

  const epitechContent = [
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2020 - Bachelor, Troisième année</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image src="./images/logo_html.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_css.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_js.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_python.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_unity.png" width={theme.spacing(4)} height={theme.spacing(4)} />
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2019 - Bachelor, Seconde année</Typography>
      <Box display="flex" gap={theme.spacing(2)}>
        <Image src="./images/logo_c.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_cpp.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_python.png" width={theme.spacing(4)} height={theme.spacing(4)} />
        <Image src="./images/logo_splunk.png" width={theme.spacing(4)} height={theme.spacing(4)} />
      </Box>
    </Box>,
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography>2018 - Bachelor, Première année</Typography>
      <Image src="./images/logo_c.png" width={theme.spacing(4)} height={theme.spacing(4)} />
    </Box>,
  ];
  
  return (
    <MuiTimeline
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
      }}
    >
      <Box>
        <TimelineItem>
          <TimelineOppositeContent
            title="Korem"
            imageProps={{
              src: "./images/logo_korem.png",
              height: theme.spacing(6),
              width: theme.spacing(6),
            }}
          />
          <TimelineSeparator color="green">
            <WorkIcon />
          </TimelineSeparator>
          <TimelineContent content={koremContent} />
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            title="Université Laval"
            imageProps={{
              src: "./images/logo_ulaval.png",
              height: theme.spacing(6),
              width: theme.spacing(5),
            }}
          />
          <TimelineSeparator color="blue">
            <MenuBookIcon />
          </TimelineSeparator>
          <TimelineContent content={uLavalContent} />
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            title="Epitech"
            imageProps={{
              src: "./images/logo_epitech.png",
              height: theme.spacing(6),
              width: theme.spacing(5),
            }}
          />
          <TimelineSeparator color="blue">
            <MenuBookIcon />
          </TimelineSeparator>
          <TimelineContent content={epitechContent} />
        </TimelineItem>
      </Box>
    </MuiTimeline>
  );
};

export default Timeline;
