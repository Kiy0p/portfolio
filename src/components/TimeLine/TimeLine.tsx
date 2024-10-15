import MenuBookIcon from "@mui/icons-material/MenuBook";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
}  from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Box from "@mui/material/Box";
import WorkIcon from "@mui/icons-material/Work";
import { List, ListItem, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Image from "../../library/Image.tsx";

const TimeLine = () => {
  return (
    <>
      <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3,
        },
      }}>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Box display="flex" alignItems="flex-end" flexDirection="column" >
              <Typography>
                2023
              </Typography>
            </Box>
            <Divider />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Korem</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Box display="flex" alignItems="flex-end" flexDirection="column" >
              <Typography>
                2023
              </Typography>
              <Typography>
                2022
              </Typography>
              <Typography>
                2021
              </Typography>
            </Box>
            <Divider />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MenuBookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <List>
              <ListItem>
                <Typography>2023 - Maîtrise, seconde année</Typography>
              </ListItem>
              <ListItem>
                <Typography>2022 - Maîtrise, première année</Typography>
              </ListItem>
              <ListItem>
                <Typography>2021 - Certificat en informatique</Typography>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="./images/logo_epitech.png" height="3em" width="2.5em" />
              <Typography>
                Epitech
              </Typography>
            </Box>
            <Divider />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MenuBookIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent display="flex">
            <List>
              <ListItem>
                <Typography>
                  2020 - Bachelor, Troisième année
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  2019 - Bachelor, Seconde année
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  2018 - Bachelor, Première année
                </Typography>
              </ListItem>
            </List>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimeLine;
