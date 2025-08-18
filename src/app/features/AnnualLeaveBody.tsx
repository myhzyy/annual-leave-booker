import "../styles/AnnualLeaveBody.css";

type LeaveItem = {
  id: number;
  month: string;
  day: string;
  title: string;
  meta: string;
};

const MOCK_LEAVE: LeaveItem[] = [
  { id: 1, month: "MAR", day: "14", title: "Annual leave", meta: "All day" },
  { id: 2, month: "MAY", day: "10", title: "Training", meta: "09:30" },
  { id: 3, month: "MAY", day: "16", title: "Annual leave", meta: "12:00 –" },
  { id: 4, month: "JUN", day: "02", title: "Business trip", meta: "2 days" },
  { id: 5, month: "JUL", day: "08", title: "Sick leave", meta: "All day" },
  { id: 6, month: "AUG", day: "21", title: "Annual leave", meta: "All day" },
];

export default function AnnualLeaveBody() {
  return (
    <section className="annual-leave-body">
      <div className="overview-section">
        <h2 className="overview-title">Your overview</h2>

        <div className="entitlement-grid">
          <div className="stat-card">
            <div className="stat-head">
              <span className="stat-title">Entitlement</span>
              <span className="stat-dot" aria-hidden />
            </div>
            <div className="stat-value">20</div>
            <div className="stat-subtitle">Days remaining</div>
          </div>

          <div className="stat-card">
            <div className="stat-head">
              <span className="stat-title">Next holiday</span>
              <span className="stat-dot" aria-hidden />
            </div>
            <div className="stat-value">14</div>
            <div className="stat-subtitle">March</div>
          </div>
        </div>
      </div>

      <header className="upcoming-header">
        <h3 className="upcoming-title">Upcoming leave</h3>
        <button className="view-more" type="button">
          View more &gt;
        </button>
      </header>

      <div className="leave-viewport" aria-label="Upcoming leave">
        <ul className="leave-grid">
          {MOCK_LEAVE.map((item) => (
            <li key={item.id} className="leave-card">
              <div className="date-col">
                <span className="month">{item.month}</span>
                <span className="day">{item.day}</span>
              </div>
              <div className="details">
                <div className="title">{item.title}</div>
                <div className="meta">{item.meta}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
