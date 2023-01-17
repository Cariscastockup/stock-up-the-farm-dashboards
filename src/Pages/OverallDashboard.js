import React, { memo } from "react";
import { Container, Box, Grid, useTheme, Button } from "@mui/material";

import DashboardCard from "../components/DashboardCard";
import { People, TrendingDown, TrendingUp } from "@mui/icons-material";
import ChartCard from "../components/ChartCard";
import AppTable from "../components/AppTable";
import DashBoardTrendTable from "../components/DashBoardTrendTable";

const OverallDashboard = () => {
  const theme = useTheme();

  const columns = [
    {
      label: "Product",
      dataIndex: "product",
    },
    { align: "right", label: "Cooperative Name", dataIndex: "cooperativeName" },
  ];

  const data = [
    { _id: "1", product: "Product", cooperativeName: "Cooperative's Name" },
    { _id: "2", product: "Product", cooperativeName: "Cooperative's Name" },
    { _id: "3", product: "Product", cooperativeName: "Cooperative's Name" },
    // { _id: "4", product: "Product", cooperativeName: "Cooperative's Name" },
  ];

  return (
    <Box
      sx={{
        padding: `${theme.spacing(2)}`,
        paddingTop: theme.spacing(4),
      }}
    >
      <Container>
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

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <DashBoardTrendTable columns={columns} data={data} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DashBoardTrendTable columns={columns} data={data} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DashBoardTrendTable columns={columns} data={data} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(OverallDashboard);
