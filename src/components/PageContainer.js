import React from "react";
import { Box, useTheme } from "@mui/material";

const PageContainer = ({
  children,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: `${theme.spacing(2)}`,
        paddingTop: paddingTop || paddingVertical || theme.spacing(4),
        paddingBottom: paddingBottom || paddingVertical || theme.spacing(4),
        paddingLeft: paddingLeft || paddingHorizontal || `${theme.spacing(2)}`,
        paddingRight:
          paddingRight || paddingHorizontal || `${theme.spacing(2)}`,
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
