import Box from "@mui/material/Box";
import React from "react";

export interface ImageProps {
  src: string;
  height: number | string;
  width: number | string;
  sx?: any;
}

const Image = (props: ImageProps) => {
  return (
    <Box
      component="img"
      src={props.src}
      height={props.height}
      width={props.width}
      sx={props.sx}
    />
  );
};

export default Image;
