import { Box, Divider, Typography, styled } from "@mui/material";
import Image, { ImageProps } from "../../library/Image.tsx";

import { TimelineOppositeContent as MuiTimelineOppositeContent } from "@mui/lab";
import React from "react";

interface TimelineOppositeContentProps {
  title: string;
  imageProps: ImageProps;
}

const TimelineOppositeContent = ({
  title,
  imageProps,
}: TimelineOppositeContentProps) => {
  return (
    <MuiTimelineOppositeContent color="text.secondary">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          src={imageProps.src}
          height={imageProps.height}
          width={imageProps.width}
        />
        <Typography>{title}</Typography>
      </Box>
      <Divider />
    </MuiTimelineOppositeContent>
  );
};

export default TimelineOppositeContent;
