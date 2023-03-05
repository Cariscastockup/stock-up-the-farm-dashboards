import React, { memo } from "react";
import { Box, useTheme } from "@mui/material";

import AppTable from "./AppTable";
import CooperativeTableToolbar from "./CooperativeTableToolbar";

const CooperativesTableContainer = () => {
  const theme = useTheme();
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
    <Box>
      <CooperativeTableToolbar />
      <AppTable
        columns={columns}
        data={data}
        rowKeyProp="_id"
        tableHeadStyle={{ backgroundColor: theme.palette.primary.lightSm }}
      />
    </Box>
  );
};

export default memo(CooperativesTableContainer);
