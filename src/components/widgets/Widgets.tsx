import { ReactNode } from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import "./widgets.scss";

interface IProps {
  type: ReactNode;
}

interface IData {
  title: string;
  isMoney: boolean;
  link: string;
  icon: ReactNode;
}

export function Widgets({ type }: IProps) {
  let data!: IData;

  //! temporary Mock
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              backgroundColor: "#ff000033",
              color: "#dc143c",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        link: "See all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#daa52033",
              color: "#daa520",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "See all earning",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#00800033",
              color: "#008000",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See all balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#80008033",
              color: "#800080",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "R$"} {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage negative">
          <KeyboardArrowDownIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
