import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Image from "../../library/Image.tsx";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MyTimelineContent from "./content/MyTimelineContent.tsx";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
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
          <Box display="flex" alignItems="flex-end" flexDirection="column">
            <Typography>2023</Typography>
          </Box>
          <Divider />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <MyTimelineContent content={["Korem"]} />
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src="./images/logo_epitech.png" height="3em" width="2.5em" />
            <Typography>Epitech</Typography>
          </Box>
          <Divider />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <MyTimelineContent
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
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <MyTimelineContent
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
