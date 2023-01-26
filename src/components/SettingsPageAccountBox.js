import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
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
            <Box
              sx={(theme) => ({
                width: "9em",
                height: "9em",
                backgroundColor: theme.palette.common.lightXs,
                borderRadius: "4.5em",
              })}
            ></Box>
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
          <Button size="large">Save Changes</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SettingsPageAccountBox;
