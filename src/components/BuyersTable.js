import { Box } from "@mui/material";
import React from "react";
import AppTable from "./AppTable";
import BuyerTableToolbar from "./BuyersTableToolbar";

const BuyersTable = () => {
  const columns = [
    {
      label: "Name",
      dataIndex: "name",
    },
    {
      label: "Location",
      dataIndex: "location",
    },
    {
      label: "Products Purchased",
      dataIndex: "majorProducts",
    },
    {
      label: "Minor Products",
      dataIndex: "minorProducts",
    },
    {
      label: "Date Joined",
      dataIndex: "dateJoined",
    },
  ];

  const data = [
    {
      _id: "1",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "2",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "3",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "4",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "5",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "6",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "7",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "8",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "9",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "10",
      name: "Buyer A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
  ];

  return (
    <Box>
      <BuyerTableToolbar />
      <AppTable
        tableBodyCellStyle={{ border: "none" }}
        columns={columns}
        data={data}
      />
    </Box>
  );
};

export default BuyersTable;
