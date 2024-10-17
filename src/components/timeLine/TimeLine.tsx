import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Image from "../../library/Image.tsx";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineDivider from "./TimelineDivider.tsx";
import TimelineElement from "./TimelineElement.tsx";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

const TimeLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src="./images/logo_korem.png" height="3em" width="3em" />
            <Typography>Korem</Typography>
          </Box>
          <Divider />
        </TimelineOppositeContent>
        <TimelineDivider color="green">
          <WorkIcon />
        </TimelineDivider>
        <TimelineElement content={["2023-2024 - Korem"]} />
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src="./images/logo_ulaval.png" height="3em" width="2.5em" />
            <Typography>Université Laval</Typography>
          </Box>
          <Divider />
        </TimelineOppositeContent>
        <TimelineDivider color="blue">
          <MenuBookIcon />
        </TimelineDivider>
        <TimelineElement
          content={[
            "2023 - Maîtrise, seconde année",
            "2022 - Maîtrise, première année",
            "2021 - Certificat en informatique",
          ]}
        />
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src="./images/logo_epitech.png" height="3em" width="2.5em" />
            <Typography>Epitech</Typography>
          </Box>
          <Divider />
        </TimelineOppositeContent>
        <TimelineDivider color="blue">
          <MenuBookIcon />
        </TimelineDivider>
        <TimelineElement
          content={[
            "2020 - Bachelor, Troisième année",
            "2019 - Bachelor, Seconde année",
            "2018 - Bachelor, Première année",
          ]}
        />
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine;
