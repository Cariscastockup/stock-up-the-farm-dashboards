import React, { memo, useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const Main = ({ children }) => {
  const theme = useTheme();
  const { drawerWidth, drawerOpen } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

export default memo(Main);
