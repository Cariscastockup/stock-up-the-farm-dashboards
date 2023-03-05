import React, { memo, useContext } from "react";
import { Box, Drawer, Grid, List } from "@mui/material";

import AppListItem from "./AppListItem";
import { useTheme } from "@mui/material";
import { menu, supportMenu } from "../data/drawer";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ChangeHistory } from "@mui/icons-material";

const AppDrawer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { drawerOpen, drawerWidth } = useContext(AppContext);

  const handleRouteChange = (link = null) => {
    navigate(link);
  };

  return (
    <Drawer
      open={drawerOpen}
      PaperProps={{
        sx: {
          width: drawerWidth,
          backgroundColor: theme.palette.primary.main,
          border: "none",
        },
      }}
      variant="persistent"
    >
      <Box sx={{ marginBottom: "0.5em" }}>
        <Grid
          alignItems="center"
          container
          justifyContent={"center"}
          sx={{ padding: "1em" }}
        >
          <Grid item>
            <ChangeHistory
              sx={{ fontSize: "5em", color: theme.palette.common.white }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginBottom: "3em" }}>
        <List>
          {menu.map((item, index) => (
            <AppListItem
              key={index.toString()}
              Icon={item.Icon}
              title={item.label}
              onClick={() => handleRouteChange(item?.link)}
              sx={{
                color: theme.palette.common.white,
                ...(location.pathname === item?.link && {
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.primary.main,
                    opacity: 0.9,
                  },
                }),
              }}
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
              onClick={() => handleRouteChange(item?.link)}
              sx={{
                color: theme.palette.common.white,
                ...(location.pathname === item?.link && {
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.primary.main,
                    opacity: 0.9,
                  },
                }),
              }}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default memo(AppDrawer);
