import React from "react";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
import { Shuffle } from "@mui/icons-material/";

const TransactionDetailsTableHeader = ({ senderName, recipientName }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: theme.palette.common.lightXs,
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
              <Typography variant="subtitle2">Sender</Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight={"bold"}>{senderName}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Shuffle />
        </Grid>
        <Grid item xs={5}>
          <Grid container flexDirection={"column"} rowSpacing={1}>
            <Grid item>
              <Typography variant="subtitle2">Recipient</Typography>
            </Grid>
            <Grid item>
              <Typography fontWeight={"bold"}>{recipientName}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransactionDetailsTableHeader;
