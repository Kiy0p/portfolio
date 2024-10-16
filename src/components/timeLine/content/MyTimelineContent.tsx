import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import React from "react";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";

interface TimelineContentProps {
  content: Array<string>;
}

const MyTimelineContent = ({ content }: TimelineContentProps) => {
  return (
    <TimelineContent display="flex">
      <Paper elevation={5} sx={{width:"30em"}}>
        <List>
          {content.map((item) => {
            return (
              <ListItem>
                <Typography>{item}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </TimelineContent>
  );
};

export default MyTimelineContent;
