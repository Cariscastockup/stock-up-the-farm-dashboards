import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import AppSearchBox from "./AppSearchBox";
import AppSelect from "./AppSelect";

const TransactionsTableToolbar = () => {
  const [statusOptionsValue, setStatusOptionsValue] = useState("none");
  const statusOptions = [
    { _id: "none", label: "All" },
    { _id: "1", label: "Pending" },
    { _id: "2", label: "Processing" },
    { _id: "3", label: "Completed" },
    { _id: "5", label: "Failed" },
  ];

  const handleStatusSelect = (value) => setStatusOptionsValue(value);

  return (
    <Box sx={{ padding: "1em 0", margin: 0 }}>
      <Grid
        alignItems="center"
        container
        justifyContent={"space-between"}
        spacing={2}
      >
        <Grid item lg={4} md={6} sm={5} xs={12}>
          <AppSearchBox placeholder="Search Transactions by Invoice ID..." />
        </Grid>

        <Grid md={4} sm={4} xs={12} item>
          <Grid
            alignItems="center"
            container
            justifyContent={"flex-end"}
            spacing={1}
          >
            <Grid item md={5} xs={5}>
              <AppSelect
                labelProp="label"
                valueProp="_id"
                value={statusOptionsValue}
                options={statusOptions}
                onItemSelect={handleStatusSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionsTableToolbar;
