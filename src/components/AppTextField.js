import { Box, InputLabel, TextField, useTheme } from "@mui/material";
import React from "react";

const AppTextField = ({ label, name, fullWidth, inputLabel, ...rest }) => {
  const theme = useTheme();
  return (
    <>
      <InputLabel shrink htmlFor={name} labelId={name}>
        {label}
      </InputLabel>
      <TextField
        id={name}
        fullWidth={fullWidth}
        InputProps={{ disableUnderline: true }}
        InputLabelProps={{
          shrink: true,
          hidden: true,
        }}
        sx={{
          "label + &": {
            marginTop: theme.spacing(1),
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            "&:focus": {
              backgroundColor: "rgba(0, 0, 0, 0)",
            },
          },
          "& .MuiInputBase-input": {
            position: "relative",
            padding: "0.8em",
            borderRadius: "6px",
            backgroundColor: "#fcfcfc",
            border: `1px solid ${theme.palette.primary.main}`,
            transition: theme.transitions.create("box-shadow"),
            "&:focus": {
              boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
            },
          },
        }}
        label={null}
        variant="filled"
        {...rest}
      />
    </>
  );
};

export default AppTextField;
