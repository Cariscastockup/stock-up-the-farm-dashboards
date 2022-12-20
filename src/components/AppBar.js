import React, { memo, useContext } from "react";
import {
  AppBar as MuiAppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Menu, Notifications } from "@mui/icons-material";
import { AppContext } from "../context/AppContext";
import { Box } from "@mui/system";

const AppBar = () => {
  const theme = useTheme();
  const { drawerWidth, drawerOpen, setDrawerOpen } = useContext(AppContext);

  return (
    <Box>
      <MuiAppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.common.white,
          boxShadow: `0 0 0 1px rgba(0, 0, 0, 0.1)`,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(drawerOpen && {
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth})`,
          }),
        }}
      >
        <Toolbar>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <IconButton
                disableRipple
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
                <Menu />
              </IconButton>
            </Grid>

            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <IconButton onClick={() => {}}>
                    <Notifications />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      width: "1px",
                      height: "24px",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Grid>

                <Grid item>
                  <Avatar src="none" />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Stock Up</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </MuiAppBar>
      <Box sx={{ marginBottom: "4em" }} />
    </Box>
  );
};

export default memo(AppBar);
