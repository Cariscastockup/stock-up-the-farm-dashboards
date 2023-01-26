import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: { textTransform: "none" },
      },
    },
  },
  palette: {
    common: {
      black: "#000000",
      white: "#FFFFFF",
      lightXs: "#EAEAEA",
      lightSm: "",
      lightMd: "#9e9e9e",
      lightLg: "",
    },
    primary: {
      main: "#D9D9D9CC",
    },
  },
});

export default theme;
