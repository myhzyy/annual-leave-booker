import "../styles/Header2.css";

export default function Header2() {
  const today = new Date();
  const day = today.getDate();
  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });
  const month = today.toLocaleDateString("en-GB", { month: "short" });
  const year = today.getFullYear().toString().slice(-2);

  return (
    <header className="header-black">
      <div className="header-top">
        <div>
          <h1 className="header-day">{day}th</h1>
          <h2 className="header-day">august</h2>
        </div>

        <div className="header-date">
          <span>
            home <span className="date-dot">•</span>
          </span>
          {/* <span>{weekday}</span> */}
        </div>
      </div>

      <div className="header-greeting">
        <p>
          Good morning, <span className="highlight">Alexey</span>.
        </p>
      </div>
    </header>
  );
}
