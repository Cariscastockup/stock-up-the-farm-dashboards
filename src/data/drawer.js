import {
  Dashboard,
  Payments,
  Groups,
  Receipt,
  Paid,
  Settings,
  Support,
  Downloading,
} from "@mui/icons-material";

export const menu = [
  { label: "Dashboard", Icon: <Dashboard />, link: "/dashboard" },
  { label: "Cooperatives", Icon: <Groups />, link: "/cooperatives" },
  { label: "Buyers", Icon: <Payments />, link: "/buyers" },
  { label: "Orders", Icon: <Receipt />, link: "/orders" },
  { label: "Transactions", Icon: <Paid />, link: "/transactions" },
];

export const supportMenu = [
  { label: "Settings", Icon: <Settings />, link: "/settings" },
  { label: "Support", Icon: <Support />, link: "/support" },
  { label: "Logout", Icon: <Downloading />, link: null },
];
