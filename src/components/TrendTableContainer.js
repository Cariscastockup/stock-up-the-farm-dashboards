import { Box, Grid } from "@mui/material";
import React from "react";
import DashBoardTrendTable from "./DashBoardTrendTable";

const TrendTableContainer = () => {
  const topProductsColumns = [
    {
      label: "Product",
      dataIndex: "product",
    },
    { align: "right", label: "Cooperative Name", dataIndex: "cooperativeName" },
  ];

  const topProductsData = [
    { _id: "1", product: "Product", cooperativeName: "Cooperative's Name" },
    { _id: "2", product: "Product", cooperativeName: "Cooperative's Name" },
    { _id: "3", product: "Product", cooperativeName: "Cooperative's Name" },
  ];

  const topCooperativesColumns = [
    {
      label: "Name",
      dataIndex: "name",
    },
    { align: "right", label: "Ranking", dataIndex: "ranking" },
  ];

  const topCooperativessData = [
    { _id: "1", name: "Cooperative A", ranking: "1" },
    { _id: "2", name: "Cooperative B", ranking: "2" },
    // { _id: "3", name: "Cooperative C", ranking: "3" },
  ];

  const topBuyerColumns = [
    {
      label: "Name",
      dataIndex: "name",
    },
    { align: "right", label: "Ranking", dataIndex: "ranking" },
  ];

  const topBuyersData = [
    { _id: "1", name: "Customer A", ranking: "1" },
    { _id: "2", name: "Customer B", ranking: "2" },
    { _id: "3", name: "Customer C", ranking: "3" },
  ];

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <DashBoardTrendTable
            title="Top Products"
            columns={topProductsColumns}
            data={topProductsData}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DashBoardTrendTable
            title="Top Cooperatives"
            columns={topCooperativesColumns}
            data={topCooperativessData}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DashBoardTrendTable
            title="Top Buyers"
            columns={topBuyerColumns}
            data={topBuyersData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrendTableContainer;
