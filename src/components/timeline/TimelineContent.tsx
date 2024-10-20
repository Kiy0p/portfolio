import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { TimelineContent as MuiTimelineContent } from "@mui/lab";
import Paper from "@mui/material/Paper";
import React from "react";
import Typography from "@mui/material/Typography";

interface TimelineContentProps {
  content: Array<string>;
}

const TimelineContent = ({ content }: TimelineContentProps) => {
  return (
    <MuiTimelineContent display="flex">
      <Paper elevation={5} sx={{ width: "30em" }}>
        <List>
          {content.map((item) => {
            return (
              <ListItem>
                <Accordion sx={{ width: "100%" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>test</Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </MuiTimelineContent>
  );
};

export default TimelineContent;
