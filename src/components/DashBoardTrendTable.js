import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo } from "react";
import AppTable from "./AppTable";

const DashBoardTrendTable = ({ columns, data, title }) => {
  return (
    <Box>
      <Box>
        {title && (
          <Box sx={{ marginBottom: "1em" }}>
            <Typography
              fontWeight={"bold"}
              sx={{ margin: "10px 0" }}
              variant="body2"
            >
              {title}
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={(theme) => ({
          border: `1px solid ${theme.palette.common.lightXs}`,
          padding: "0.5em 1em",
        })}
      >
        <Box sx={{ height: "16em", overflow: "auto" }}>
          <AppTable
            tableBodyCellStyle={{ borderColor: "rgba(0, 0, 0, 0)" }}
            rowKeyProp={"_id"}
            columns={columns}
            data={data}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(DashBoardTrendTable);
