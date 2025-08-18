import "../styles/AnnualLeaveBody.css";

type LeaveItem = {
  id: number;
  month: string;
  day: string;
  title: string;
  meta: string;
};

const mock_data: LeaveItem[] = [
  { id: 1, month: "MAR", day: "14", title: "Annual leave", meta: "All day" },
  { id: 2, month: "MAY", day: "10", title: "Training", meta: "09:30" },
  { id: 3, month: "MAY", day: "16", title: "Annual leave", meta: "12:00 –" },
  { id: 4, month: "JUN", day: "02", title: "Business trip", meta: "2 days" },
  { id: 5, month: "JUL", day: "08", title: "Sick leave", meta: "All day" },
  { id: 6, month: "AUG", day: "21", title: "Annual leave", meta: "All day" },
  { id: 7, month: "SEP", day: "05", title: "Training", meta: "13:00" },
];

export default function AnnualLeaveBody() {
  return (
    <section className="annual-leave-body">
      <header className="upcoming-header">
        <h2 className="upcoming-title">Upcoming leave</h2>
        <button className="view-more">View more &gt;</button>
      </header>

      <div className="leave-viewport" aria-label="Upcoming leave list">
        <div className="leave-grid">
          {mock_data.map((item) => (
            <div key={item.id} className="leave-card">
              <div className="date-col">
                <span className="month">{item.month}</span>
                <span className="day">{item.day}</span>
              </div>
              <div className="details">
                <div className="title">{item.title}</div>
                <div className="meta">{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
