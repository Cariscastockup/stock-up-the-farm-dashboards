import { DeleteOutlineSharp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, useState } from "react";
import AppSearchBox from "./AppSearchBox";
import AppSelect from "./AppSelect";

const CooperativeTableToolbar = () => {
  const [locationOptionValue, setLocationOptionValue] = useState("none");
  const [productOptionsValue, setProductOptionsValue] = useState("none");

  const locationOptions = [
    { _id: "none", label: "Location" },
    { _id: "1", label: "Accra" },
    { _id: "2", label: "Kumasi" },
    { _id: "3", label: "Tamale" },
    { _id: "4", label: "Takoradi" },
    { _id: "5", label: "Ho" },
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

  const handleLocationSelect = (value) => setLocationOptionValue(value);
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
          <AppSearchBox placeholder="Search for Cooperatives" />
        </Grid>

        <Grid md={4} sm={4} xs={12} item>
          <Grid
            alignItems="center"
            container
            justifyContent={"flex-end"}
            spacing={1}
          >
            <Grid item>
              <IconButton>
                <DeleteOutlineSharp />
              </IconButton>
            </Grid>

            <Grid>
              <Box
                sx={{
                  width: "0.5px",
                  height: "2em",
                  backgroundColor: "green",
                  marginTop: 1,
                  marginRight: 1,
                  marginLeft: 0.4,
                }}
              />
            </Grid>

            <Grid item md={5} xs={5}>
              <AppSelect
                labelProp="label"
                valueProp="_id"
                value={locationOptionValue}
                options={locationOptions}
                onItemSelect={handleLocationSelect}
              />
            </Grid>

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

export default memo(CooperativeTableToolbar);
