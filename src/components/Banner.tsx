import { Box, styled, useTheme } from "@mui/material";

import { BarChart } from '@mui/x-charts/BarChart';
import Image from "../library/Image.tsx";
import React from "react";

const Banner = () => {
  const theme = useTheme();

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];

  return (
    <StyledBox>
      <Image
        src="./images/other/profile_pic.png"
        width={theme.spacing(90)}
        height={theme.spacing(135)}
        sx={{ ml: theme.spacing(10) }}
      />
      <Box display="flex" alignItems="center">
        <BarChart
          width={1000}
          height={500}
          series={[
            { data: pData, label: 'pv', id: 'pvId' },
            { data: uData, label: 'uv', id: 'uvId' },
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#DFF2EB"
}))

export default Banner;
