import "../styles/Header.css";

export default function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header-wrapper">
      <div className="header-card">
        <div className="header-top">
          <div className="date-and-welcome">
            <span className="header-date">{formattedDate}</span>
            <h1 className="header-welcome">Welcome back!</h1>
          </div>

          {/* avatar (optional) */}
          {/* <div className="header-avatar" aria-hidden /> */}
        </div>
      </div>
    </header>
  );
}
