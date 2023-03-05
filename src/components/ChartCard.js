import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React, { memo } from "react";

const ChartCard = ({ title, data }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.common.lightXs}`,
        padding: theme.spacing(2),
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <Typography fontWeight={"bold"} gutterBottom variant="h6">
            {title}
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            sx={{ height: "20em" }}
          >
            <Grid item>Chart Here</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(ChartCard);
