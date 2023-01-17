import { InputBase } from "@mui/material";
import React from "react";

const AppSearchBox = ({ placeholder, fullWidth, ...rest }) => {
  return (
    <InputBase
      fullWidth
      size="small"
      placeholder={placeholder}
      sx={(theme) => ({
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: "0.5em 1.2em",
        paddingBottom: "0.4em",
        borderRadius: 10,
      })}
      {...rest}
    />
  );
};

export default AppSearchBox;
