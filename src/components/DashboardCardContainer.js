import { People, TrendingDown, TrendingUp } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardCardContainer = () => {
  return (
    <Box sx={{ marginBottom: "1.5em" }}>
      <Grid container spacing={3}>
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
  );
};

export default DashboardCardContainer;
