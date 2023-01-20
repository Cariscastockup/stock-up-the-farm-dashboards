import { Typography } from "@mui/material";
import React from "react";
import BuyersTable from "../components/BuyersTable";
import PageContainer from "../components/PageContainer";

const BuyersPage = () => {
  return (
    <PageContainer>
      <Typography fontWeight={"bold"} variant="h6">
        Buyers
      </Typography>

      <BuyersTable />
    </PageContainer>
  );
};

export default BuyersPage;
