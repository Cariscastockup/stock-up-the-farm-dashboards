import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useTheme } from "@mui/material";

const Main = ({ children }) => {
  const theme = useTheme();
  const { drawerWidth, drawerOpen } = useContext(AppContext);

  return (
    <Box
      sx={{
        marginLeft: drawerOpen ? drawerWidth : 0,
        transition: theme.transitions.create(["margin", "width"]),
        width: `calc(100% - ${drawerWidth})px`,
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
