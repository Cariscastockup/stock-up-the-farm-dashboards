import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo } from "react";
import AppTable from "./AppTable";

const DashBoardTrendTable = ({ columns, data, title }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.common.lightXs,
        padding: "1em",
      })}
    >
      {title && (
        <Box sx={{ marginBottom: "0.5em" }}>
          <Divider />
          <Typography
            fontWeight={"bold"}
            sx={{ margin: "5px 0", padding: "0 1em" }}
            variant="body2"
          >
            {title}
          </Typography>
          <Divider />
        </Box>
      )}
      <Box sx={{ height: "16em", overflow: "auto" }}>
        <AppTable
          tableBodyCellStyle={{ borderColor: "rgba(0, 0, 0, 0)" }}
          rowKeyProp={"_id"}
          columns={columns}
          data={data}
        />
      </Box>
    </Box>
  );
};

export default memo(DashBoardTrendTable);
