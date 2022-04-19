import React from "react";
import Widget from "./Widget";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widgets() {
  return (
    <div className="w-full p-5 flex flex-wrap gap-5">
      <Widget
        title="USERS"
        isMoney={false}
        link="See all users"
        amount="100"
        diff="20"
        icon={
          <PersonOutlinedIcon className="text-2xl p-1 rounded self-end text-rose-500 bg-rose-200" />
        }
      />
      <Widget
        title="ORDERS"
        isMoney={false}
        link="View all orders"
        amount="100"
        diff="20"
        icon={
          <ShoppingCartOutlinedIcon className="text-2xl p-1 rounded self-end text-amber-500 bg-amber-200" />
        }
      />
      <Widget
        title="EARNINGS"
        isMoney={true}
        link="View net earnings"
        amount="100"
        diff="20"
        icon={
          <MonetizationOnOutlinedIcon className="text-2xl p-1 rounded self-end text-teal-500 bg-teal-200" />
        }
      />
      <Widget
        title="BALANCE"
        isMoney={true}
        link="See details"
        amount="100"
        diff="20"
        icon={
          <AccountBalanceWalletOutlinedIcon className="text-2xl p-1 rounded self-end text-purple-500 bg-purple-200" />
        }
      />
    </div>
  );
}

export default Widgets;
