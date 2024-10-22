import { Box } from "@mui/material";
import EpitechContentDetail from "./content/EpitechContentDetail.tsx";
import EpitechContentSummary from "./content/EpitechContentSummary.tsx";
import KoremContentDetail from "./content/KoremContentDetail.tsx";
import KoremContentSummary from "./content/KoremContentSummary.tsx";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Timeline as MuiTimeline } from "@mui/lab";
import React from "react";
import TimelineContent from "./TimelineContent.tsx";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "./TimelineOppositeContent.tsx";
import TimelineSeparator from "./TimelineSeparator.tsx";
import ULavalContentDetail from "./content/ULavalContentDetail.tsx";
import ULavalContentSummary from "./content/ULavalContentSummary.tsx";
import WorkIcon from "@mui/icons-material/Work";
import { useTheme } from "@mui/material/styles";

const Timeline = () => {
  const theme = useTheme();

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
          <TimelineContent
            contentSummary={KoremContentSummary()}
            contentDetail={KoremContentDetail()}
          />
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
          <TimelineContent
            contentSummary={ULavalContentSummary()}
            contentDetail={ULavalContentDetail()}
          />
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
          <TimelineContent
            contentSummary={EpitechContentSummary()}
            contentDetail={EpitechContentDetail()}
          />
        </TimelineItem>
      </Box>
    </MuiTimeline>
  );
};

export default Timeline;
