import { useTheme } from "@emotion/react";
import { LocationOn, MonetizationOn, People, Receipt, TrendingDown, TrendingUp } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardCardContainer = () => {
  const theme = useTheme();

  const iconStyle = { color: theme.palette.common.lightMd };

  return (
    <Box sx={{ marginBottom: "1.5em" }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<People sx={iconStyle} />}
            title="Number of cooperatives"
            value={240}
            ChipIcon={<TrendingDown fontSize="1em" />}
            chipValue="+21%"
            chipBackgroundColor={"#BFBEBE"}
          />
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<Receipt sx={iconStyle} />}
            title="Number of buyers"
            value={120}
            ChipIcon={<TrendingUp fontSize="1em" />}
            chipValue="+21%"
            chipBackgroundColor={"#BFBEBE"}
          />
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<MonetizationOn sx={iconStyle} />}
            title="Total Income"
            value={"Ghc12,000"}
            ChipIcon={<TrendingUp fontSize="1em" />}
            chipValue="+21%"
            chipBackgroundColor={"#BFBEBE"}
          />
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<LocationOn sx={iconStyle} />}
            title="Total Visit"
            value={3600}
            ChipIcon={<TrendingUp fontSize="1em" />}
            chipValue="+21%"
            chipBackgroundColor={"#BFBEBE"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCardContainer;
