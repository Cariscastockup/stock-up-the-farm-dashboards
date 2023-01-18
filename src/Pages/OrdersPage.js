import { Typography } from "@mui/material";
import React from "react";
import OrdersTable from "../components/OrdersTable";

import PageContainer from "../components/PageContainer";

const OrdersPage = () => {
  return (
    <PageContainer>
      <Typography variant="h6" fontWeight={"bold"}>
        Orders(23)
      </Typography>

      <OrdersTable />
    </PageContainer>
  );
};

export default OrdersPage;
