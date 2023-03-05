import { Box, Grid } from "@mui/material";
import React, { memo } from "react";
import ChartCard from "./ChartCard";

const DashboardChartContainer = () => {
  return (
    <Box sx={{ marginBottom: "1.5em" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={7}>
          <ChartCard title="Cooperatives Performance (by sales)" />
        </Grid>
        <Grid item xs={12} lg={5}>
          <ChartCard title="Orders by Country" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(DashboardChartContainer);
