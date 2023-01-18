import { Box, Button } from "@mui/material";
import React from "react";
import AppTable from "./AppTable";
import OrdersTableToolbar from "./OrdersTableToolbar";

const OrdersTable = () => {
  const columns = [
    {
      label: "Order ID (#)",
      dataIndex: "orderId",
    },
    {
      label: "Product",
      dataIndex: "product",
    },
    {
      label: "Destination",
      dataIndex: "destination",
    },
    {
      label: "Buyer",
      dataIndex: "buyer",
    },
    {
      label: "Cooperatives",
      dataIndex: "cooperatives",
    },
    {
      label: "Cooperatives",
      render: (item) => (
        <Button
          sx={{ textTransform: "none" }}
          onClick={() => console.log(item)}
          size="small"
          variant="contained"
          disableElevation
        >
          Track Order
        </Button>
      ),
    },
  ];

  const data = [
    {
      _id: "1",
      destination: "Kumasi",
      orderId: "679023",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "2",
      destination: "Kumasi",
      orderId: "092389",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "3",
      destination: "Kumasi",
      orderId: "672390",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "4",
      destination: "Kumasi",
      orderId: "347812",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "5",
      destination: "Kumasi",
      orderId: "093283",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "6",
      destination: "Kumasi",
      orderId: "323689",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "7",
      destination: "Kumasi",
      orderId: "102390",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "8",
      destination: "Kumasi",
      orderId: "568012",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
    {
      _id: "9",
      destination: "Kumasi",
      orderId: "560921",
      product: "Apple, Orange, Kiwi",
      buyer: "ABC Company Ltd",
      cooperatives: "Pineapple, Pear",
    },
  ];

  return (
    <Box>
      <OrdersTableToolbar />
      <AppTable
        tableBodyCellStyle={{ border: "none" }}
        columns={columns}
        data={data}
      />
    </Box>
  );
};

export default OrdersTable;
