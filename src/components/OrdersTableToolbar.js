import { Box, Grid } from "@mui/material";
import React, { memo, useState } from "react";
import AppSearchBox from "./AppSearchBox";
import AppSelect from "./AppSelect";

const OrdersTableToolbar = () => {
  const [buyersOptionValue, setBuyersOptionValue] = useState("none");
  const [productsOptionValue, setProductsOptionValue] = useState("none");
  const [cooperativeOptionsValue, setCooperativesOptionsValue] =
    useState("none");

  const cooperativesOptions = [
    { _id: "none", label: "All" },
    { _id: "1", label: "Cooperative 1" },
    { _id: "2", label: "Cooperative 2" },
    { _id: "3", label: "Cooperative 3" },
    { _id: "4", label: "Cooperative 4" },
    { _id: "5", label: "Cooperative 5" },
    { _id: "6", label: "Cooperative 6" },
  ];

  const buyersOptions = [
    { _id: "none", label: "All" },
    { _id: "1", label: "Buyer 1" },
    { _id: "2", label: "Buyer 2" },
    { _id: "3", label: "Buyer 3" },
    { _id: "4", label: "Buyer 4" },
    { _id: "5", label: "Buyer 5" },
    { _id: "6", label: "Buyer 6" },
  ];

  const productOptions = [
    { _id: "none", label: "Fruits" },
    { _id: "1", label: "Cocoa" },
    { _id: "2", label: "Cashew" },
    { _id: "3", label: "Kiwi" },
    { _id: "4", label: "Oil Palm Fruits" },
    { _id: "5", label: "Onion" },
    { _id: "6", label: "Shea nut" },
  ];

  const handleCooperativeSelect = (value) => setCooperativesOptionsValue(value);
  const handleBuyerSelect = (value) => setBuyersOptionValue(value);
  const handleProductSelect = (value) => setProductsOptionValue(value);

  return (
    <Box sx={{ padding: "1em 0", margin: 0 }}>
      <Grid
        alignItems="center"
        container
        justifyContent={"space-between"}
        spacing={2}
      >
        <Grid item lg={4} md={6} sm={5} xs={12}>
          <AppSearchBox placeholder="Search Orders by Order ID..." />
        </Grid>

        <Grid item lg={6} md={4} sm={4} xs={12}>
          <Grid
            alignItems="center"
            container
            justifyContent={"flex-end"}
            spacing={1}
          >
            <Grid item md={3} xs={6}>
              <AppSelect
                labelProp="label"
                valueProp="_id"
                value={productsOptionValue}
                options={productOptions}
                onItemSelect={handleProductSelect}
              />
            </Grid>

            <Grid item md={3} xs={6}>
              <AppSelect
                labelProp="label"
                valueProp="_id"
                value={buyersOptionValue}
                options={buyersOptions}
                onItemSelect={handleBuyerSelect}
              />
            </Grid>

            <Grid item md={3} xs={6}>
              <AppSelect
                labelProp="label"
                valueProp="_id"
                value={cooperativeOptionsValue}
                options={cooperativesOptions}
                onItemSelect={handleCooperativeSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(OrdersTableToolbar);
