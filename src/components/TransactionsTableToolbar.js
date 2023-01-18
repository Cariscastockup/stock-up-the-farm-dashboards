import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import AppSearchBox from "./AppSearchBox";
import AppSelect from "./AppSelect";

const TransactionsTableToolbar = () => {
  const [productOptionsValue, setProductOptionsValue] = useState("none");
  const productOptions = [
    { _id: "none", label: "All" },
    { _id: "1", label: "Cocoa" },
    { _id: "2", label: "Cashew" },
    { _id: "3", label: "Kiwi" },
    { _id: "4", label: "Oil Palm Fruits" },
    { _id: "5", label: "Onion" },
    { _id: "6", label: "Shea nut" },
  ];

  const handleProductSelect = (value) => setProductOptionsValue(value);

  return (
    <Box sx={{ padding: "1em 0", margin: 0 }}>
      <Grid
        alignItems="center"
        container
        justifyContent={"space-between"}
        spacing={2}
      >
        <Grid item lg={4} md={6} sm={5} xs={12}>
          <AppSearchBox placeholder="Search Buyers..." />
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
                value={productOptionsValue}
                options={productOptions}
                onItemSelect={handleProductSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionsTableToolbar;
