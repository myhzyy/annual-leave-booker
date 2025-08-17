import "../styles/Header.css";

export default function Header() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-GB", options);

  return (
    <div className="header-wrapper">
      <div className="header-layout">
        <div className="date-and-welcome">
          <p>{formattedDate}</p>
          <h1>Welcome back!</h1>
        </div>
      </div>
    </div>
  );
}
