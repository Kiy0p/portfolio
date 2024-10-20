import React, { PropsWithChildren } from "react";

import { TimelineSeparator as MuiTimelineSeparator } from "@mui/lab";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";

interface TimelineSeparatorProps extends PropsWithChildren {
  color: string;
}

const TimelineSeparator = ({ color, children }: TimelineSeparatorProps) => {
  return (
    <MuiTimelineSeparator>
      <TimelineDot sx={{ backgroundColor: color }}>{children}</TimelineDot>
      <TimelineConnector />
    </MuiTimelineSeparator>
  );
};

export default TimelineSeparator;
