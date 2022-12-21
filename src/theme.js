import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["sans", "Special Elite", "Shadows Into Light", "Roboto"].join(","),
  },
  palette: {
    success: { main: "#cfff86" }
  }
});

export default theme;
