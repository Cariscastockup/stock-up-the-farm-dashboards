import React, { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import OverallDashboard from "../Pages/OverallDashboard";
import CooperativesPage from "../Pages/CooperativesPage";
import BuyersPage from "../Pages/BuyersPage";
import OrdersPage from "../Pages/OrdersPage";
import TransactionsPage from "../Pages/TransactionsPage";

const AppRoutesContainer = () => {
  return (
    <Routes>
      <Route path="/buyers" element={<BuyersPage />} />
      <Route path="/cooperatives" element={<CooperativesPage />} />
      <Route path="/dashboard" element={<OverallDashboard />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
    </Routes>
  );
};

export default memo(AppRoutesContainer);
