import React, { memo } from "react";


import PageContainer from "../components/PageContainer";
import TrendTableContainer from "../components/TrendTableContainer";
import DashboardCardContainer from "../components/DashboardCardContainer";
import DashboardChartContainer from "../components/DashboardChartContainer";

const OverallDashboard = () => {

  return (
    <PageContainer>
      <DashboardCardContainer />
      <DashboardChartContainer />
      <TrendTableContainer />
    </PageContainer>
  );
};

export default memo(OverallDashboard);
