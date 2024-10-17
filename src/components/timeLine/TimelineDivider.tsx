import React, { PropsWithChildren } from "react";

import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

interface TimelineDividerProps extends PropsWithChildren {
  color: string;
}

const TimelineDivider = ({ color, children }: TimelineDividerProps) => {
  return (
    <TimelineSeparator>
      <TimelineDot sx={{ backgroundColor: color }}>{children}</TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default TimelineDivider;
