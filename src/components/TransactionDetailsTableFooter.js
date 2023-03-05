import { Box, Grid, Typography } from "@mui/material";
import React, { memo } from "react";

const TransactionDetailsTableFooter = ({ total }) => {
  return (
    <Box sx={{ padding: 2, marginTop: "1.5em" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems={"center"}
        spacing={3}
      >
        <Grid item xs={5}>
          <Grid container flexDirection={"column"}>
            <Grid item>
              <Typography fontSize="1.2em">{"Total"}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Grid
            container
            flexDirection={"column"}
            sx={{ paddingLeft: "0.5em" }}
          >
            <Grid item>
              <Typography fontSize="1.2em" fontWeight={"bold"}>
                {total}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(TransactionDetailsTableFooter);
