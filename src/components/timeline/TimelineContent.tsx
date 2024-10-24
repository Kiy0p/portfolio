import React, { ReactNode } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { TimelineContent as MuiTimelineContent } from "@mui/lab";
import Paper from "@mui/material/Paper";
import theme from "../../theme";

interface TimelineContentProps {
  contentSummary: Array<ReactNode>;
  contentDetail: Array<ReactNode>;
}

const TimelineContent = ({
  contentSummary,
  contentDetail,
}: TimelineContentProps) => {
  return (
    <MuiTimelineContent display="flex">
      <Paper elevation={5} sx={{ width: theme.spacing(100) }}>
        <List>
          {contentSummary.map((item, index) => {
            return (
              <ListItem>
                <Accordion sx={{ width: "100%" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {item}
                  </AccordionSummary>
                  <AccordionDetails>{contentDetail[index]}</AccordionDetails>
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
