import React, { useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";

import PageContainer from "../components/PageContainer";
import { DeleteOutlineSharp } from "@mui/icons-material";
import AppSearchBox from "../components/AppSearchBox";
import AppSelect from "../components/AppSelect";

const CooperativesPage = () => {
  const [value, setValue] = useState("none");

  const options = [
    { _id: "none", label: "Location" },
    { _id: "1", label: "Accra" },
    { _id: "2", label: "Kumasi" },
    { _id: "3", label: "Tamale" },
    { _id: "3", label: "Takoradi" },
    { _id: "3", label: "Ho" },
  ];

  const handleSelect = (value) => {
    setValue(value);
  };
  return (
    <PageContainer>
      <Typography fontWeight={"bold"} variant="h6">
        Cooperatives(69)
      </Typography>

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

          <Grid md={4} sm={5} xs={12} item>
            <Grid
              alignItems="center"
              container
              justifyContent={"flex-end"}
              spacing={2}
            >
              <Grid item>
                <IconButton>
                  <DeleteOutlineSharp />
                </IconButton>
              </Grid>

              <Grid item xs={5}>
                <AppSelect
                  labelProp="label"
                  valueProp="_id"
                  value={value}
                  options={options}
                  onItemSelect={handleSelect}
                />
              </Grid>

              <Grid item xs={5}>
                <AppSelect
                  labelProp="label"
                  valueProp="_id"
                  value={value}
                  options={options}
                  onItemSelect={handleSelect}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default CooperativesPage;
