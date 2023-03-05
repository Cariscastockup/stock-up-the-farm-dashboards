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
      darkgreen: "#005555",
    },
    primary: {
      main: "#94B405",
      lightMd: "#B8CD58",
      lightSm: "rgba(148, 180, 5, 0.08)",
    },
  },
});

export default theme;
