import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useLocation } from "react-router-dom";

function Sidebar(props) {
  const { pathname } = useLocation();
  return (
    <div className="flex-[1] border-r dark:border-r-neutral-600 min-h-screen">
      <h1 className="h-12 border-b dark:border-b-neutral-600 text-purple-500 w-full font-bold text-xl flex justify-center items-center">
        Admin CMS
      </h1>
      <div className="px-3">
        <ul>
          <p className="text-xs font-bold mt-4 mb-1">MAIN</p>
          <Link to="/">
            <li
              className={`p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded ${
                pathname === "/" && "bg-purple-100 dark:bg-neutral-50"
              }`}
            >
              <DashboardIcon className="text-lg text-purple-400 dark:text-neutral-400" />
              <span className="text-xs font-semibold ml-2">Dashboard</span>
            </li>
          </Link>
          <p className="text-xs font-bold mt-4 mb-1">LISTS</p>
          <Link to="/users">
            <li
              className={`p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded ${
                pathname.includes("users") && "bg-purple-100 dark:bg-neutral-50"
              }`}
            >
              <PersonOutlineIcon className="text-lg text-purple-400 dark:text-neutral-400" />
              <span className="text-xs font-semibold ml-2">Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              className={`p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded ${
                pathname.includes("products") &&
                "bg-purple-100 dark:bg-neutral-50"
              }`}
            >
              <StoreIcon className="text-lg text-purple-400 dark:text-neutral-400" />
              <span className="text-xs font-semibold ml-2">Products</span>
            </li>
          </Link>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <CreditCardIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Orders</span>
          </li>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <LocalShippingIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Delivery</span>
          </li>
          <p className="text-xs font-bold mt-4 mb-1">USEFUL</p>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <InsertChartIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Stats</span>
          </li>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <NotificationsNoneIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Notifications</span>
          </li>
          <p className="text-xs font-bold mt-4 mb-1">SERVICE</p>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <SettingsSystemDaydreamOutlinedIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">System Health</span>
          </li>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <PsychologyOutlinedIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Logs</span>
          </li>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <SettingsApplicationsIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Settings</span>
          </li>
          <p className="text-xs font-bold mt-4 mb-1">USER</p>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <AccountCircleOutlinedIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Profile</span>
          </li>
          <li className="p-1 flex items-center cursor-pointer hover:bg-purple-100 dark:hover:bg-neutral-50 rounded">
            <ExitToAppIcon className="text-lg text-purple-400 dark:text-neutral-400" />
            <span className="text-xs font-semibold ml-2">Logout</span>
          </li>
        </ul>
        <div className="flex items-center m-1 gap-2">
          <div
            onClick={() => {
              localStorage.setItem("isDark", false);
              props.setIsDark(false);
            }}
            className="h-5 w-5 cursor-pointer rounded border border-purple-500 bg-slate-50"
          ></div>
          <div
            onClick={() => {
              localStorage.setItem("isDark", true);
              props.setIsDark(true);
            }}
            className="h-5 w-5 cursor-pointer rounded border border-purple-500 bg-slate-900"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
