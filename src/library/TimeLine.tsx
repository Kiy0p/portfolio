import MenuBookIcon from "@mui/icons-material/MenuBook";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import WorkIcon from "@mui/icons-material/Work";

const TimeLine = () => {
  return (
    <>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Korem</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MenuBookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Université Laval</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MenuBookIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>Epitech</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimeLine;
