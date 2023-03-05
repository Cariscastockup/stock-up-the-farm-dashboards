import { useTheme } from "@emotion/react";
import { LocationOn, MonetizationOn, People, Receipt, TrendingDown, TrendingUp } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React, { memo } from "react";
import DashboardCard from "./DashboardCard";

const DashboardCardContainer = () => {
  const theme = useTheme();

  const iconStyle = { color: theme.palette.primary.main };

  const chipColors = {
    numberOfCooperatives: {
      tintColor: "#28B91B",
      backgroundColor: "#C1FFBC",
    },
    numberOfBuyers: {
      tintColor: "#F40909",
      backgroundColor: "rgba(244, 9, 9, 0.1)",
    },
    totalIncome: {
      tintColor: "#28B91B",
      backgroundColor: "#C1FFBC",
    },
    totalVisit: {
      tintColor: "#F40909",
      backgroundColor: "rgba(244, 9, 9, 0.1)",
    },
  };

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
            chipTintColor={chipColors.numberOfCooperatives.tintColor}
            chipBackgroundColor={
              chipColors.numberOfCooperatives.backgroundColor
            }
          />
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<Receipt sx={iconStyle} />}
            title="Number of buyers"
            value={120}
            ChipIcon={<TrendingUp fontSize="1em" />}
            chipValue="+21%"
            chipTintColor={chipColors.numberOfBuyers.tintColor}
            chipBackgroundColor={chipColors.numberOfBuyers.backgroundColor}
          />
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<MonetizationOn sx={iconStyle} />}
            title="Total Income"
            value={"Ghc12,000"}
            ChipIcon={<TrendingUp fontSize="1em" />}
            chipValue="+21%"
            chipTintColor={chipColors.totalIncome.tintColor}
            chipBackgroundColor={chipColors.totalIncome.backgroundColor}
          />
        </Grid>
        <Grid xs={12} md={4} lg={3} item>
          <DashboardCard
            Icon={<LocationOn sx={iconStyle} />}
            title="Total Visit"
            value={3600}
            ChipIcon={<TrendingUp fontSize="1em" />}
            chipValue="+21%"
            chipTintColor={chipColors.totalVisit.tintColor}
            chipBackgroundColor={chipColors.totalVisit.backgroundColor}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(DashboardCardContainer);
