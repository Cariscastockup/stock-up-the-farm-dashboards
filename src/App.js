import React from "react";
import { Box } from "@mui/material";
import AppDrawer from "./components/AppDrawer";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import AppContextComponent from "./context/AppContext";
import Main from "./components/Main";
import AppBar from "./components/AppBar";

function App() {
  return (
    <AppContextComponent>
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar />
          <AppDrawer />
          <Main>Hello World</Main>
        </Box>
      </ThemeProvider>
    </AppContextComponent>
  );
}

export default App;
