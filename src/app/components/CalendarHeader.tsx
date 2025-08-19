import "../styles/CalendarHeader.css";

export default function CalendarBody() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-GB", options);
  return (
    <div className="header-container">
      <div>
        <h1>{formattedDate}</h1>
      </div>
      <div className="arrow-container">
        <div className="arrow-btn">‹</div>
        <div className="arrow-btn">›</div>
      </div>
    </div>
  );
}
