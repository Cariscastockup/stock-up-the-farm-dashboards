import { Typography } from "@mui/material";
import React from "react";

import PageContainer from "../components/PageContainer";
import TransactionsTable from "../components/TransactionsTable";
import TransactionsTableToolbar from "../components/TransactionsTableToolbar";

const TransactionsPage = () => {
  return (
    <PageContainer>
      <Typography variant="h6" fontWeight="bold">
        Transactions (23)
      </Typography>

      <TransactionsTableToolbar />

      <TransactionsTable />
    </PageContainer>
  );
};

export default TransactionsPage;
