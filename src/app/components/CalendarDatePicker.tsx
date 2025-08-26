"use client";

import { useMemo, useState } from "react";
import "../styles/CalendarDatePicker.css";

interface DateRange {
  from?: Date;
  to?: Date;
}

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();
  const [pickedTime, setPickedTime] = useState<string | null>(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const timeSlots = ["23rd August - 25rd August"];

  const { daysInMonth, firstDayOfMonth, today } = useMemo(() => {
    const y = month.getFullYear();
    const m = month.getMonth();
    return {
      daysInMonth: new Date(y, m + 1, 0).getDate(),
      firstDayOfMonth: new Date(y, m, 1).getDay(),
      today: new Date(),
    };
  }, [month]);

  const navigateMonth = (dir: "prev" | "next") => {
    setMonth((prev) => {
      const d = new Date(prev);
      d.setMonth(prev.getMonth() + (dir === "next" ? 1 : -1));
      return d;
    });
  };

  const handleDateClick = (day: number) => {
    const clicked = new Date(month.getFullYear(), month.getMonth(), day);
    if (!range?.from || (range.from && range.to)) {
      setRange({ from: clicked });
      setPickedTime(null);
    } else if (range.from && !range.to) {
      const from = range.from;
      const to = clicked;
      setRange(from <= to ? { from, to } : { from: to, to: from });
      setPickedTime(null);
    }
  };

  const isToday = (day: number) =>
    new Date(month.getFullYear(), month.getMonth(), day).toDateString() ===
    today.toDateString();

  const sameDay = (a?: Date, b?: Date) =>
    !!a && !!b && a.toDateString() === b.toDateString();

  const inRange = (day: number) => {
    if (!range?.from || !range?.to) return false;
    const d = new Date(month.getFullYear(), month.getMonth(), day);
    return d > range.from && d < range.to;
  };

  const selected = (day: number) => {
    const d = new Date(month.getFullYear(), month.getMonth(), day);
    if (range?.from && range?.to) {
      return d >= range.from && d <= range.to;
    }
    return sameDay(d, range?.from);
  };

  const start = (day: number) =>
    sameDay(new Date(month.getFullYear(), month.getMonth(), day), range?.from);
  const end = (day: number) =>
    sameDay(new Date(month.getFullYear(), month.getMonth(), day), range?.to);

  const renderDays = () => {
    const nodes = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      nodes.push(<div key={`e-${i}`} className="cal-empty" />);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const cls = ["cal-day"];
      if (isToday(d) && !selected(d)) cls.push("cal-day--today");
      if (start(d)) cls.push("cal-day--range-start");
      if (end(d)) cls.push("cal-day--range-end");
      if (inRange(d)) cls.push("cal-day--in-range");
      if (selected(d)) cls.push("cal-day--selected");

      nodes.push(
        <button
          key={d}
          className={cls.join(" ")}
          onClick={() => handleDateClick(d)}
        >
          {d}
        </button>
      );
    }
    return nodes;
  };

  const pretty = (d: Date) =>
    d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  const rightPanelDate =
    range?.from && range?.to
      ? `${pretty(range.from)} – ${pretty(range.to)}`
      : range?.from
      ? pretty(range.from)
      : "Current holiday bookings";

  return (
    <main className="cal-wrap">
      <div className="cal-desktop">
        <div className="cal-grid-3">
          {/* LEFT */}
          <aside className="cal-side">
            <div className="brand-row">
              <div className="brand-badge" />
              <div className="brand-name">ACME Inc.</div>
            </div>

            <div className="host">
              <img
                src="https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png"
                alt="Host avatar"
              />
              <div>
                <div className="name">Jacob Murphu</div>
                <div className="role" style={{ color: "var(--muted)" }}>
                  Employee
                </div>
              </div>
            </div>

            <div className="meta-list">
              <div className="meta-item">⏱️ 30 min</div>
              <div className="meta-item">🟣 Zoom</div>
            </div>
          </aside>

          {/* CENTER */}
          <section className="cal-center">
            <header className="cal-head">
              <div>
                <h2 className="cal-title">
                  Holiday Booking <br />
                  Select a Date & Time
                </h2>
                <p className="cal-sub">July 2024</p>
              </div>
              <button
                className="cal-today"
                onClick={() => setMonth(new Date())}
              >
                Today
              </button>
            </header>

            <div className="cal-nav">
              <button
                className="cal-nav-btn"
                onClick={() => navigateMonth("prev")}
              >
                ‹
              </button>
              <h3 className="cal-month-year">
                {months[month.getMonth()]} {month.getFullYear()}
              </h3>
              <button
                className="cal-nav-btn"
                onClick={() => navigateMonth("next")}
              >
                ›
              </button>
            </div>

            <div className="cal-card">
              <div className="cal-grid">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((w) => (
                  <div key={w} className="cal-weekday">
                    {w}
                  </div>
                ))}
              </div>
              <div className="cal-grid">{renderDays()}</div>
            </div>
          </section>

          {/* RIGHT */}
          <aside className="cal-right">
            <h4 className="cal-title" style={{ margin: 0 }}>
              {rightPanelDate}
            </h4>
            <p className="right-date">Available times</p>

            {timeSlots.map((t) => {
              const active = pickedTime === t;
              return (
                <div key={t} className={`slot ${active ? "active" : ""}`}>
                  <span className="time">{t}</span>
                  <button className="confirm">View</button>
                </div>
              );
            })}

            <div className="timezone">
              🌐 Time zone
              <span style={{ fontWeight: 700, color: "var(--ink)" }}>
                Eastern time – UK
              </span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
