import React, { memo } from "react";
import { Box } from "@mui/material";

import AppBar from "./components/AppBar";
import AppDrawer from "./components/AppDrawer";
import AppContextComponent from "./context/AppContext";
import AppRoutesContainer from "./components/AppRoutesContainer";
import Main from "./components/Main";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";


function App() {
  return (
    <AppContextComponent>
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar />
          <AppDrawer />
          <Main>
            <AppRoutesContainer />
          </Main>
        </Box>
      </ThemeProvider>
    </AppContextComponent>
  );
}

export default memo(App);
