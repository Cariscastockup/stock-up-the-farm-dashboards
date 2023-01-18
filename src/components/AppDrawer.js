import React, { memo, useContext } from "react";
import { Box, Drawer, List, Typography } from "@mui/material";

import AppListItem from "./AppListItem";
import { useTheme } from "@mui/material";
import { menu, supportMenu } from "../data/drawer";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const AppDrawer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { drawerOpen, drawerWidth } = useContext(AppContext);

  const handleRouteChange = (link = null) => {
    navigate(link)
  };

  return (
    <Drawer
      open={drawerOpen}
      PaperProps={{
        sx: { width: drawerWidth, backgroundColor: theme.palette.primary.main },
      }}
      variant="persistent"
    >
      <Box sx={{ marginBottom: "3em" }}>
        <Typography variant="h6" color="secondary" align="center">
          Logo
        </Typography>
      </Box>

      <Box sx={{ marginBottom: "5em" }}>
        <List>
          {menu.map((item, index) => (
            <AppListItem
              key={index.toString()}
              Icon={item.Icon}
              title={item.label}
              onClick={() => handleRouteChange(item?.link)}
            />
          ))}
        </List>
      </Box>

      <Box sx={{ marginBottom: "5em" }}>
        <List>
          {supportMenu.map((item, index) => (
            <AppListItem
              key={index.toString()}
              Icon={item.Icon}
              title={item.label}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default memo(AppDrawer);
