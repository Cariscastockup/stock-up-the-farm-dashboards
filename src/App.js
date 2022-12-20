import React from "react";
import { Box } from "@mui/material";
import AppDrawer from "./components/AppDrawer";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import AppContextComponent from "./context/AppContext";
import Main from "./components/Main";

function App() {
  return (
    <AppContextComponent>
      <ThemeProvider theme={theme}>
        <Box>
          
          <AppDrawer />
          <Main>Hello World</Main>
        </Box>
      </ThemeProvider>
    </AppContextComponent>
  );
}

export default App;
