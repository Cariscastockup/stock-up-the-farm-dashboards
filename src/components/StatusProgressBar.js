import React from "react";
import { Box } from "@mui/material";

const StatusProgressBar = ({ value }) => {
  const values = {
    pending: {
      value: "Pending",
      length: 0,
      tintColor: "rgba(192, 119, 34)",
      backgroundColor: "rgba(192, 119, 34, 0.06)",
    },
    processing: {
      value: "Processing",
      length: 10,
      tintColor: "rgba(0, 50, 230)",
      backgroundColor: "rgba(0, 50, 230, 0.5)",
    },
    completed: {
      value: "Completed",
      length: 20,
      tintColor: "rgba(15, 87, 8)",
      backgroundColor: "rgba(15, 87, 8, 0.06)",
    },
    failed: {
      value: "Failed",
      length: -10,
      tintColor: "rgba(255, 0, 0)",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: `${values[value.toLowerCase()].backgroundColor}`,
        borderRadius: "0.3em",
        padding: "0.2em 0",
        paddingLeft: "0.2em",
        width: `${50 + values[value.toLowerCase()].length}%`,
        color: values[value.toLowerCase()].tintColor,
      }}
    >
      {value}
    </Box>
  );
};

export default StatusProgressBar;
