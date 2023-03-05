import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { memo } from "react";

const AppSelect = ({
  label,
  labelProp,
  name,
  onItemSelect,
  options = [],
  value,
  valueProp,
}) => {
  return (
    <FormControl size="small" fullWidth>
      {label && <InputLabel htmlFor={name}>Select</InputLabel>}
      <Select
        labelId={name}
        onChange={({ target: input }) => onItemSelect(input.value)}
        value={value}
      >
        {options.map((item, index) => (
          <MenuItem key={index} value={item[valueProp]}>
            {item[labelProp]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(AppSelect);
