import React, { PropsWithChildren } from "react";

import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

const MyTimelineSeparator = ({ children }: PropsWithChildren) => {
  return (
    <TimelineSeparator>
      <TimelineDot color="primary">{children}</TimelineDot>
    </TimelineSeparator>
  );
};

export default MyTimelineSeparator;
