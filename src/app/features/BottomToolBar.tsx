"use client";
import "../styles/BottomToolBar.css";

import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

export default function BottomNav() {
  return (
    <footer
      className="btm-shell"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <button className="fab" aria-label="Request">
        <AddIcon fontSize="inherit" />
      </button>

      <nav className="dock">
        <button className="nav-item" aria-current="page">
          <HomeIcon className="nav-icon" />
          <span className="nav-label">Home</span>
        </button>

        <button className="nav-item">
          <CalendarMonthIcon className="nav-icon" />
          <span className="nav-label">Calendar</span>
        </button>

        <span className="dock-spacer" aria-hidden />

        <button className="nav-item">
          <NotificationsIcon className="nav-icon" />
          <span className="nav-label">Notifications</span>
        </button>

        <button className="nav-item">
          <SettingsIcon className="nav-icon" />
          <span className="nav-label">Settings</span>
        </button>
      </nav>
    </footer>
  );
}
