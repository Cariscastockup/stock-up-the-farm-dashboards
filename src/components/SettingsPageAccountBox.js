import { Avatar, Button, Grid, Typography, useTheme } from "@mui/material";
import React, { memo } from "react";
import AppTextField from "./AppTextField";

const SettingsPageAccountBox = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Grid container>
        <Grid item>
          <Typography
            variant="body1"
            fontWeight={"bold"}
            sx={{ marginBottom: theme.spacing(3) }}
          >
            Your Account
          </Typography>
        </Grid>
        <Grid
          item
          container
          columnSpacing={6}
          sx={{ marginBottom: theme.spacing(8) }}
        >
          <Grid item xs={3}>
            <Avatar
              src="../assets/images/profile_pic-2.jpg"
              sx={(theme) => ({
                width: "7em",
                height: "7em",
                backgroundColor: theme.palette.common.lightXs,
                borderRadius: "4.5em",
              })}
            />
          </Grid>
          <Grid
            item
            xs={9}
            container
            direction="column"
            spacing={2}
            justifyContent="center"
          >
            <Grid item>
              <Typography variant="body1" fontWeight={{ fontWeight: "600" }}>
                Full Name
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">example@mail.com</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <AppTextField fullWidth label="Name" />
        </Grid>
        <Grid item xs={12}>
          <AppTextField fullWidth label="Email Address" />
        </Grid>
        <Grid item>
          <Button
            size="large"
            sx={{
              backgroundColor: theme.palette.common.darkgreen,
              color: theme.palette.common.white,
            }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(SettingsPageAccountBox);
