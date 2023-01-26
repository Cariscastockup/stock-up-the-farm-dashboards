import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SettingsPageAccountBox from "../components/SettingsPageAccountBox";
import PolicyAndSecurityBox from "../components/PolicyAndSecurityBox";

const SettingsPage = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <Typography
        fontWeight={"bold"}
        gutterBottom
        variant="h5"
        sx={{ marginBottom: theme.spacing(4) }}
      >
        Settings
      </Typography>

      <Box>
        <Grid container spacing={6}>
          <SettingsPageAccountBox />
          <PolicyAndSecurityBox />
        </Grid>
      </Box>

      <Grid
        container
        justifyContent={"flex-end"}
        sx={{ marginTop: theme.spacing(10) }}
      >
        <Grid item>
          <Button
            size="large"
            sx={{ backgroundColor: theme.palette.primary.dark }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SettingsPage;
