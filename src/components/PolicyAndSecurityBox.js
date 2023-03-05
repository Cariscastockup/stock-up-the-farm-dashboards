import React, { memo } from "react";

import { Button, Grid, Typography } from "@mui/material";
import AppTextField from "./AppTextField";
import { useTheme } from "@emotion/react";

const PolicyAndSecurityBox = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginBottom: theme.spacing(3) }}
      >
        Policy And Security
      </Typography>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <AppTextField fullWidth label="Old Password" />
        </Grid>
        <Grid item xs={12}>
          <AppTextField fullWidth label="New Password" />
        </Grid>
        <Grid item xs={12}>
          <AppTextField fullWidth label="Confirm New Password" />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              backgroundColor: theme.palette.common.darkgreen,
              color: theme.palette.common.white,
            }}
            size="large"
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(PolicyAndSecurityBox);
