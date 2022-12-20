import React, { createContext, useState } from "react";

export const AppContext = createContext(null);
const AppContextComponent = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const drawerWidth = "15em";

  return (
    <AppContext.Provider value={{ drawerOpen, setDrawerOpen, drawerWidth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
