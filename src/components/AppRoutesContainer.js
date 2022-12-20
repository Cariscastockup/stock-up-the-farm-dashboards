import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import OverallDashboard from "../Pages/OverallDashboard";

const AppRoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<OverallDashboard />} />
    </Routes>
  );
};

export default memo(AppRoutesContainer);
