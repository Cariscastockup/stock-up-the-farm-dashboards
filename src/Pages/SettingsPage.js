import React from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SettingsPageAccountBox from "../components/SettingsPageAccountBox";
import PolicyAndSecurityBox from "../components/PolicyAndSecurityBox";

const SettingsPage = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <Box
        sx={{
          border: `1px solid ${theme.palette.common.lightXs}`,
          borderRadius: "0.6em",
          padding: "1.5em",
        }}
      >
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
      </Box>

      <Grid
        container
        justifyContent={"flex-end"}
        sx={{ marginTop: theme.spacing(10) }}
      >
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
    </PageContainer>
  );
};

export default SettingsPage;
