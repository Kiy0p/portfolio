import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Lalezar"],
    fontSize: 16
  },
  palette: {
    main: "#FDFFEF",
  },
});

export default responsiveFontSizes(theme);