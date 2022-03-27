import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

import { Avatar, Badge } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import "./navbar.scss";

export function Navbar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Pesquisar..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            Português
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <Badge badgeContent={3} color="error">
              <NotificationsNoneOutlinedIcon className="icon" />
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={1} color="error">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
            </Badge>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/3752835/pexels-photo-3752835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
