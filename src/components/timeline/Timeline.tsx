import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Timeline as MuiTimeline } from "@mui/lab";
import React from "react";
import TimelineContent from "./TimelineContent.tsx";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "./TimelineOppositeContent.tsx";
import TimelineSeparator from "./TimelineSeparator.tsx";
import WorkIcon from "@mui/icons-material/Work";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

const Timeline = () => {
  return (
    <MuiTimeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          title="Korem"
          imageProps={{
            src: "./images/logo_korem.png",
            height: "3em",
            width: "3em",
          }}
        />
        <TimelineSeparator color="green">
          <WorkIcon />
        </TimelineSeparator>
        <TimelineContent content={["2023-2024 - Korem"]} />
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          title="Université Laval"
          imageProps={{
            src: "./images/logo_ulaval.png",
            height: "3em",
            width: "2.5em",
          }}
        />
        <TimelineSeparator color="blue">
          <MenuBookIcon />
        </TimelineSeparator>
        <TimelineContent
          content={[
            "2023 - Maîtrise, seconde année",
            "2022 - Maîtrise, première année",
            "2021 - Certificat en informatique",
          ]}
        />
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          title="Université Laval"
          imageProps={{
            src: "./images/logo_epitech.png",
            height: "3em",
            width: "2.5em",
          }}
        />
        <TimelineSeparator color="blue">
          <MenuBookIcon />
        </TimelineSeparator>
        <TimelineContent
          content={[
            "2020 - Bachelor, Troisième année",
            "2019 - Bachelor, Seconde année",
            "2018 - Bachelor, Première année",
          ]}
        />
      </TimelineItem>
    </MuiTimeline>
  );
};

export default Timeline;
