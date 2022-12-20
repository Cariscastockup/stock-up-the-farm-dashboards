import React, { useContext } from "react";
import { Box, Drawer, List, Typography } from "@mui/material";

import AppListItem from "./AppListItem";
import { useTheme } from "@mui/material";
import { menu, supportMenu } from "../data/drawer";
import { AppContext } from "../context/AppContext";


const AppDrawer = () => {
  const theme = useTheme();
  const {drawerOpen, setDrawerOpen, drawerWidth} = useContext(AppContext);

  return (
    <Drawer
      open={drawerOpen}
      PaperProps={{ sx: { width: drawerWidth, backgroundColor: theme.palette.primary.main } }}
      variant="persistent"
    >
      <button onClick={() => setDrawerOpen(!drawerOpen)}>Close</button>
      <Box sx={{ marginBottom: "3em" }}>
        <Typography variant="h6" color="secondary" align="center">
          Logo
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "5em" }}>
        <List>
          {menu.map((item, index) => (
            <AppListItem key={index.toString()} Icon={item.Icon} title={item.label} />
          ))}
        </List>
      </Box>

      <Box sx={{ marginBottom: "5em" }}>
        <List>
          {supportMenu.map((item, index) => (
            <AppListItem key={index.toString()} Icon={item.Icon} title={item.label} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};




export default AppDrawer;
