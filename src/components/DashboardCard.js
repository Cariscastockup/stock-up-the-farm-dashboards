import React, { memo } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const DashboardCard = ({
  Icon,
  title,
  value,
  ChipIcon,
  chipValue,
  chipTintColor,
  chipBackgroundColor,
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          backgroundColor: theme.palette.common.lightXs,
          padding: theme.spacing(2),
          borderRadius: theme.spacing(1),
        }}
      >
        <Grid item>{Icon}</Grid>
        <Grid item>
          <Typography variant="subtitle2">{title}</Typography>
        </Grid>
        <Grid item container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="subtitle2" fontWeight={"bold"}>
              {value}
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                backgroundColor: chipBackgroundColor || "none",
                padding: `2px ${theme.spacing(1)}`,
                borderRadius: "0.5em",
              }}
            >
              <Grid
                container
                spacing={1}
                alignItems="center"
                sx={{ color: chipTintColor || "none" }}
              >
                <Grid item>{ChipIcon}</Grid>
                <Grid item>
                  <Typography variant="subtitle2">{chipValue}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(DashboardCard);
