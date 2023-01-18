import React from "react";
import { Typography } from "@mui/material";

import PageContainer from "../components/PageContainer";
import CooperativeTableToolbar from "../components/CooperativeTableToolbar";
import CooperativesTable from "../components/CooperativesTable";
import { Container } from "@mui/system";

const CooperativesPage = () => {
  return (
    <PageContainer>
      <Container maxWidth="xl">
        <Typography fontWeight={"bold"} variant="h6">
          Cooperatives(43)
        </Typography>
        <CooperativeTableToolbar />
        <CooperativesTable />
      </Container>
    </PageContainer>
  );
};

export default CooperativesPage;
