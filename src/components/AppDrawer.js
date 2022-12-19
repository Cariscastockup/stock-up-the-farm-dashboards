import React from "react";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

const AppDrawer = () => {
  return (
    <Drawer
      open={true}
      PaperProps={{ sx: { width: "15em" } }}
      variant="persistent"
    >
      <div>Logo</div>

      <Box>
        <List>
          <ListItem button disableRipple>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </List>
      </Box>

      <div>Another List</div>
    </Drawer>
  );
};

export default AppDrawer;
