import { Box, Button, Container, useTheme } from "@mui/material";
import React from "react";

import AppTable from "../components/AppTable";
import PageContainer from "./PageContainer";
import TransactionDetailsTableHeader from "./TransactionDetailsTableHeader";
import TransactionDetailsTableFooter from "./TransactionDetailsTableFooter";

const TransactionDetailsPage = () => {
  const columns = [{ dataIndex: "label" }, { dataIndex: "value" }];

  const data = [
    { _id: "1", label: "Invice ID", value: "STO234531" },
    { _id: "2", label: "Transaction Date", value: "12/09/2022" },
    { _id: "3", label: "Status", value: "Success" },
    { _id: "4", label: "Product", value: "Shea Butter" },
    { _id: "5", label: "Quantity Purchased", value: "350 bags" },
    { _id: "6", label: "Unit Price", value: "Ghc 100.00" },
    { _id: "7", label: "Shipping Fee", value: "Ghc 23.00" },
  ];

  const theme = useTheme();
  return (
    <PageContainer>
      <Container maxWidth="sm">
        <Box sx={{ marginBottom: theme.spacing(4) }}>
          <Button
            disableElevation
            sx={{ textTransform: "none" }}
            variant="contained"
          >
            Download {"("}CSV{")"}
          </Button>
        </Box>

        <TransactionDetailsTableHeader
          senderName="Cooperative A"
          recipientName="ABC Company Limited"
        />

        <AppTable
          columns={columns}
          data={data}
          tableBodyCellStyle={{ borderTop: "none" }}
        />

        <TransactionDetailsTableFooter total="Ghc 35023.00" />
      </Container>
    </PageContainer>
  );
};

export default TransactionDetailsPage;
