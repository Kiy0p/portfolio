import { Box, Paper, Stack, Typography, styled, useTheme } from "@mui/material";

import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";

const Banner = () => {
  const theme = useTheme();

  const languagesData = [5, 5, 4, 3, 3, 3, 1, 0];
  const languagesLabels = [
    "C++",
    "Java",
    "C",
    "JavaScript/TypeScript",
    "Kotlin",
    "Python",
    "C#",
    "Haskell",
    "Assembly"
  ];

  const frameworksData = [3, 3, 2, 1, 0];
  const frameworksLabels = [
    "React",
    "Spring",
    "Vue",
    "Unity",
    "Jupiter",
  ];

  return (
    <StyledContainer display="flex">
      <Box alignSelf="" sx={{margin: theme.spacing(10)}}>
        <Typography variant="h1">
          Hi, I'm Enzo.
        </Typography>
        <Typography variant="h2">
          I'm a FullStack developer based in Quebec, Canada.
        </Typography>
      </Box>
      <Box>
        <StyledBox>
          <Stack direction="column-reverse" spacing={4}>
            <StyledPaper>Utilisé un jour... mais oublié.</StyledPaper>
            <StyledPaper>Syntaxe et types: ça commence à sonner familier !</StyledPaper>
            <StyledPaper>Héritage et librairies: je fais des liens !</StyledPaper>
            <StyledPaper>Code avec aisance: je nage dans les concepts !</StyledPaper>
            <StyledPaper>Pro: Pas besoin de ChatGPT ou de lead dev</StyledPaper>
          </Stack>
          <BarChart
            width={1000}
            height={500}
            series={[{ data: languagesData, id: "languageId" }]}
            xAxis={[{ data: languagesLabels, scaleType: "band" }]}
            yAxis={[
              {
                min: 0,
                max: 5,
                tickInterval: [0, 1, 2, 3, 4, 5],
              },
            ]}
          />
        </StyledBox>
        <StyledBox>
          <Stack direction="column-reverse" spacing={4}>
            <StyledPaper>Utilisé un jour... mais oublié.</StyledPaper>
            <StyledPaper>Syntaxe et types: ça commence à sonner familier !</StyledPaper>
            <StyledPaper>Héritage et librairies: je fais des liens !</StyledPaper>
            <StyledPaper>Code avec aisance: je nage dans les concepts !</StyledPaper>
            <StyledPaper>Pro: Pas besoin de ChatGPT ou de lead dev</StyledPaper>
          </Stack>
          <BarChart
            width={1000}
            height={500}
            series={[{ data: frameworksData, id: "frameworkId" }]}
            xAxis={[{ data: frameworksLabels, scaleType: "band" }]}
            yAxis={[
              {
                min: 0,
                max: 5,
                tickInterval: [0, 1, 2, 3, 4, 5]
              },
            ]}
          />
        </StyledBox>
      </Box>
    </StyledContainer>
  );
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const StyledBox = styled(Box)(({ theme })=> ({
  display: "flex",
  alignItems: "center",
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#DFF2EB",
}));

export default Banner;
