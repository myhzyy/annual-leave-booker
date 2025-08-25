import "../styles/NotificationPanel.css";

export default function NotificationPanel() {
  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <h2>Today</h2>

      <div className="notification-alerts-container">
        <div className="holiday-decision-container">
          <div className="approved-status">
            <p>✅</p>
            <h1>Approved!</h1>
          </div>

          <div className="approved-status-type">
            <h2>17-18 Oct 2025</h2>
            <h3>Holiday request</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
