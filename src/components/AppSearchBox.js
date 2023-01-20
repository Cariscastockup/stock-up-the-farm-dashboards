import { Search } from "@mui/icons-material";
import { InputAdornment, InputBase } from "@mui/material";
import React from "react";

const AppSearchBox = ({
  placeholder,
  fullWidth,
  loading,
  active,
  onSearch,
  ...rest
}) => {
  return (
    <InputBase
      fullWidth
      size="small"
      placeholder={placeholder}
      startAdornment={
        <InputAdornment
          position="start"
          sx={{
            marginLeft: "1em",
            marginRight: "0.5em",
            marginBottom: "0.4em",
          }}
        >
          <Search />
        </InputAdornment>
      }
      sx={(theme) => ({
        border: "2px solid rgba(0, 0, 0, 0.1)",
        padding: "0.4em 0em",
        paddingRight: "1.2em",
        paddingBottom: "0.25em",
        borderRadius: 10,
        "&:hover": {
          border: "2px solid rgba(0, 0, 0, 0.15)",
        },
        "$:focus": {
          border: "2px solid rgba(0, 0, 0, 0.2)",
        },
      })}
      {...rest}
    />
  );
};

export default AppSearchBox;
