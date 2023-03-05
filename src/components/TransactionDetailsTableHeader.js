import React, { memo } from "react";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
import { Shuffle } from "@mui/icons-material/";

const TransactionDetailsTableHeader = ({ senderName, recipientName }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: theme.palette.primary.lightMd,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderRadius: theme.spacing(1),
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems={"center"}
        spacing={3}
      >
        <Grid item xs={5}>
          <Grid container flexDirection={"column"} rowSpacing={1}>
            <Grid item>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.common.white }}
              >
                Sender
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight={"bold"} sx={{ color: theme.palette.common.white }}>{senderName}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Shuffle sx={{color: theme.palette.common.white}} />
        </Grid>
        <Grid item xs={5}>
          <Grid container flexDirection={"column"} rowSpacing={1}>
            <Grid item>
              <Typography variant="subtitle2" sx={{ color: theme.palette.common.white }}>Recipient</Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight={"bold"} sx={{ color: theme.palette.common.white }}>{recipientName}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(TransactionDetailsTableHeader);
