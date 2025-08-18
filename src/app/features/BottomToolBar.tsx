import "../styles/BottomToolBar.css";

import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function BottomNav() {
  return (
    <nav className="toolbar-wrapper">
      <div className="icon-wrapper">
        Home <HomeIcon />
      </div>

      <div className="icon-wrapper">
        Calendar <CalendarMonthIcon />
      </div>

      <div className="icon-wrapper">
        Circle <AddCircleIcon />
      </div>

      <div className="icon-wrapper">
        Notifications <NotificationsIcon />
      </div>

      <div className="icon-wrapper">
        Settings <SettingsIcon />
      </div>
    </nav>
  );
}
