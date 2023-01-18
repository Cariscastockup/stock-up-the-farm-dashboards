import React from "react";
import { Box } from "@mui/material";

import AppTable from "./AppTable";

const CooperativesTableContainer = () => {
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
      label: "Major Products",
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
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "2",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "3",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "4",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "5",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "6",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "7",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "8",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "9",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
    {
      _id: "10",
      name: "Cooperative A",
      location: "Kumasi",
      majorProducts: "Apple, Orange, Kiwi",
      minorProducts: "Pineaple, Pear",
      dateJoined: "12/09/2022",
    },
  ];
  return (
    <AppTable
      columns={columns}
      data={data}
      rowKeyProp="_id"
      tableBodyCellStyle={{ border: "none" }}
    />
  );
};

export default CooperativesTableContainer;
