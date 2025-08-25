"use client";
import "../styles/NotificationPanel.css";

export default function NotificationPanel() {
  const total = 30;
  const remaining = 9;
  const used = Math.max(total - remaining, 0);
  const pct = Math.max(Math.min(remaining / total, 1), 0); // 0..1

  const size = 46;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * pct;

  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <h2 className="today-sub">Today</h2>

      <div className="leave-container">
        <button>All leave</button>
        <button>Pending</button>
      </div>

      <div className="holiday-card-container">
        {/* Holiday summary card */}
        <div className="holiday-card">
          <div className="hc-head">
            <span className="hc-title">Holiday</span>
            <button className="hc-info" aria-label="Info about holiday balance">
              i
            </button>
          </div>

          <div className="hc-grid">
            {/* Remaining (with ring) */}
            <div className="hc-remaining">
              <span className="hc-label">Remaining</span>

              <div className="ring">
                <svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                  className="ring-svg"
                  aria-hidden
                >
                  {/* background track */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    className="ring-track"
                  />
                  {/* progress arc */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    className="ring-progress"
                    style={{
                      strokeDasharray: `${dash} ${c}`,
                      strokeDashoffset: 0,
                    }}
                  />
                </svg>

                <div className="ring-text">
                  <span className="ring-number">{remaining}</span>
                  <span className="ring-unit">days</span>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="hc-total">
              <span className="hc-label">Total</span>
              <span className="hc-total-num">{total}</span>
            </div>
          </div>
        </div>

        <div className="holiday-card">
          <div className="hc-head">
            <span className="hc-title">Holiday</span>
            <button className="hc-info" aria-label="Info about holiday balance">
              i
            </button>
          </div>

          <div className="hc-grid">
            {/* Remaining (with ring) */}
            <div className="hc-remaining">
              <span className="hc-label">Remaining</span>

              <div className="ring">
                <svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                  className="ring-svg"
                  aria-hidden
                >
                  {/* background track */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    className="ring-track"
                  />
                  {/* progress arc */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    className="ring-progress"
                    style={{
                      strokeDasharray: `${dash} ${c}`,
                      strokeDashoffset: 0,
                    }}
                  />
                </svg>

                <div className="ring-text">
                  <span className="ring-number">{remaining}</span>
                  <span className="ring-unit">days</span>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="hc-total">
              <span className="hc-label">Total</span>
              <span className="hc-total-num">{total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}

      {/* Alerts */}
      <div className="notification-alerts-container">
        <div className="holiday-decision-container">
          <div className="approved-status">
            <p>✅</p>
            <h1>Approved!</h1>
          </div>

          <div className="approved-status-type">
            <h2>17–18 Oct 2025</h2>
            <h3>Holiday request</h3>
          </div>
        </div>
      </div>

      <div className="notification-alerts-container">
        <div className="holiday-decision-container">
          <div className="approved-status">
            <p>❌</p>
            <h1>Declined!</h1>
          </div>

          <div className="approved-status-type">
            <h2>17–18 Oct 2025</h2>
            <h3>Holiday request</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
