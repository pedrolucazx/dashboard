import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import "./sidebar.scss";
export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <hr />
      <nav className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Usuários</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Produtos</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Encomendas</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className="icon" />
            <span>Estatísticas</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notificações</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>Saúde do sistema</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Configurações</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Sair</span>
          </li>
        </ul>
      </nav>
      <div className="buttom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </aside>
  );
}
