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

  if (!title) throw new Error("title is a required prop.");
  if (!value) throw new Error("value is a required prop.");

  return (
    <Box>
      <Grid
        container
        direction="column"
        rowSpacing={2}
        sx={{
          border: `1px solid ${theme.palette.grey[300]}`,
          backgroundColor: theme.palette.common.white,
          padding: theme.spacing(2),
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          borderRadius: theme.spacing(1),
        }}
      >
        <Grid item>{Icon}</Grid>
        <Grid item>
          <Typography variant="subtitle2">{title}</Typography>
        </Grid>
        <Grid item container spacing={2} alignItems="center">
          <Grid item>
            <Typography
              fontWeight={"bold"}
              sx={{ fontSize: "1.2em" }}
              variant="subtitle2"
            >
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
