import React from "react";
import { Typography } from "@mui/material";

import PageContainer from "../components/PageContainer";
import CooperativesTable from "../components/CooperativesTable";

const CooperativesPage = () => {
  return (
    <PageContainer>
      <Typography fontWeight={"bold"} variant="h6">
        Cooperatives(43)
      </Typography>
      <CooperativesTable />
    </PageContainer>
  );
};

export default CooperativesPage;
