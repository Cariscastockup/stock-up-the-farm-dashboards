import React, { memo } from "react";
import { Container, Box, Grid, useTheme } from "@mui/material";

import DashboardCard from "../components/DashboardCard";
import { People, TrendingDown, TrendingUp } from "@mui/icons-material";

const OverallDashboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: `${theme.spacing(2)}`,
        paddingTop: theme.spacing(4),
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Grid container rowSpacing={5} columnSpacing={5}>
            <Grid xs={12} md={4} lg={3} item>
              <DashboardCard
                Icon={<People />}
                title="Number of cooperatives"
                value={240}
                ChipIcon={<TrendingDown fontSize="1em" />}
                chipValue="+21%"
                chipBackgroundColor={"#BFBEBE"}
              />
            </Grid>
            <Grid xs={12} md={4} lg={3} item>
              <DashboardCard
                Icon={<People />}
                title="Number of buyers"
                value={120}
                ChipIcon={<TrendingUp fontSize="1em" />}
                chipValue="+21%"
                chipBackgroundColor={"#BFBEBE"}
              />
            </Grid>
            <Grid xs={12} md={4} lg={3} item>
              <DashboardCard
                Icon={<People />}
                title="Total Income"
                value={"Ghc12,000"}
                ChipIcon={<TrendingUp fontSize="1em" />}
                chipValue="+21%"
                chipBackgroundColor={"#BFBEBE"}
              />
            </Grid>
            <Grid xs={12} md={4} lg={3} item>
              <DashboardCard
                Icon={<People />}
                title="Total Visit"
                value={3600}
                ChipIcon={<TrendingUp fontSize="1em" />}
                chipValue="+21%"
                chipBackgroundColor={"#BFBEBE"}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(OverallDashboard);
