import React, { memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BuyersPage from "../Pages/BuyersPage";
import CooperativesPage from "../Pages/CooperativesPage";
import OrdersPage from "../Pages/OrdersPage";
import OverallDashboard from "../Pages/OverallDashboard";
import SettingsPage from "../Pages/SettingsPage";
import TransactionsPage from "../Pages/TransactionsPage";
import TransactionDetailsPage from "./TransactionDetailsPage";

const AppRoutesContainer = () => {
  return (
    <Routes>
      <Route path="/buyers" element={<BuyersPage />} />
      <Route path="/cooperatives" element={<CooperativesPage />} />
      <Route path="/dashboard" element={<OverallDashboard />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/transactions/:id" element={<TransactionDetailsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
    </Routes>
  );
};

export default memo(AppRoutesContainer);
