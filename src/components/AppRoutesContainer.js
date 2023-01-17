import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import OverallDashboard from "../Pages/OverallDashboard";
import CooperativesPage from "../Pages/CooperativesPage";

const AppRoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<CooperativesPage />} />
      {/* <Route path="/" element={<OverallDashboard />} /> */}
    </Routes>
  );
};

export default memo(AppRoutesContainer);
