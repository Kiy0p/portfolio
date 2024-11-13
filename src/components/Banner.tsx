import { Box, styled, useTheme } from "@mui/material";

import { BarChart } from "@mui/x-charts/BarChart";
import Image from "../library/Image.tsx";
import React from "react";

const Banner = () => {
  const theme = useTheme();

  const uData = [1, 2, 3, 4, 2, 1, 0];
  const xLabels = [
    "C",
    "C++",
    "Python",
    "Java",
    "JavaScript/TypeScript",
    "Kotlin",
    "C#",
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
          series={[{ data: uData, label: "uv", id: "uvId" }]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
          yAxis={[
            {
              valueFormatter: (value) => ["inconnu", "oublié", "bon"][value],
              tickInterval: [0, 1, 2, 3, 4, 5],
            },
          ]}
        />
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#DFF2EB",
}));

export default Banner;
