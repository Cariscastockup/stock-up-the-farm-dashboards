import React from "react";
import { Box, Drawer, List } from "@mui/material";
import { menu } from "../data/drawer";
import AppListItem from "./AppListItem";

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
          {menu.map((item) => (
            <AppListItem Icon={item.Icon} title={item.label} />
          ))}
        </List>
      </Box>

      <div>Another List</div>
    </Drawer>
  );
};




export default AppDrawer;
