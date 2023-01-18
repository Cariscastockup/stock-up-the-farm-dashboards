import React from "react";
import { Box } from "@mui/material";
import AppTable from "./AppTable";

const TransactionsTable = () => {
  const columns = [
    {
      label: "Invoice ID (#)",
      dataIndex: "invoiceId",
    },
    {
      label: "Cooperatives",
      dataIndex: "cooperatives",
    },
    {
      label: "Amount",
      dataIndex: "amount",
    },
    {
      label: "Buyer",
      dataIndex: "buyer",
    },
    {
      label: "Status",
      dataIndex: "status",
    },
    {
      label: "Date",
      dataIndex: "date",
    },
  ];

  const data = [
    {
      _id: "1",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Pending",
      date: "12/05/2022",
    },
    {
      _id: "2",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Completed",
      date: "12/05/2022",
    },
    {
      _id: "3",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Failed",
      date: "12/05/2022",
    },
    {
      _id: "4",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Pending",
      date: "12/05/2022",
    },
    {
      _id: "5",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Pending",
      date: "12/05/2022",
    },
    {
      _id: "6",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Completed",
      date: "12/05/2022",
    },
    {
      _id: "7",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Pending",
      date: "12/05/2022",
    },
    {
      _id: "8",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Failed",
      date: "12/05/2022",
    },
    {
      _id: "9",
      invoiceId: "STU4546",
      cooperatives: "Cooperative A",
      amount: "$456.92",
      buyer: "Buyer A",
      status: "Failed",
      date: "12/05/2022",
    },
  ];

  return (
    <Box>
      <AppTable
        columns={columns}
        data={data}
        tableBodyCellStyle={{ border: "none" }}
      />
    </Box>
  );
};

export default TransactionsTable;
