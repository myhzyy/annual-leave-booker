"use client";
import "../styles/Header2.css";

export default function Header2() {
  const today = new Date();
  const day = today.getDate();
  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });
  const month = today.toLocaleDateString("en-GB", { month: "long" });

  return (
    <header className="med-header">
      <div className="med-card">
        <p className="hello">
          Hello, <strong>Jacob</strong> 👋
        </p>

        <div className="meta-row">
          <span className="pill success">Home</span>
          <span className="meta">
            {weekday}, {month} {day}
          </span>
        </div>
      </div>
    </header>
  );
}
