import React, { memo } from "react";
import { Container } from "@mui/material";

import PageContainer from "../components/PageContainer";
import TrendTableContainer from "../components/TrendTableContainer";
import DashboardCardContainer from "../components/DashboardCardContainer";
import DashboardChartContainer from "../components/DashboardChartContainer";

const OverallDashboard = () => {

  return (
    <PageContainer>
      <Container maxWidth="xl">
        <DashboardCardContainer />
        <DashboardChartContainer />
        <TrendTableContainer />
      </Container>
    </PageContainer>
  );
};

export default memo(OverallDashboard);
