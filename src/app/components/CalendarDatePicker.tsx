"use client";

import { useState, useMemo } from "react";
import "../styles/CalendarDatePicker.css";

interface DateRange {
  from?: Date;
  to?: Date;
}

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();

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

  const { daysInMonth, firstDayOfMonth, today } = useMemo(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
    const today = new Date();

    return { daysInMonth, firstDayOfMonth, today };
  }, [month]);

  const navigateMonth = (direction: "prev" | "next") => {
    setMonth((prev) => {
      const newMonth = new Date(prev);
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(month.getFullYear(), month.getMonth(), day);

    if (!range?.from || (range.from && range.to)) {
      setRange({ from: clickedDate });
    } else if (range.from && !range.to) {
      const from = range.from;
      const to = clickedDate;

      if (from <= to) {
        setRange({ from, to });
      } else {
        setRange({ from: to, to: from });
      }
    }
  };

  const isDateSelected = (day: number): boolean => {
    if (!range?.from) return false;

    const date = new Date(month.getFullYear(), month.getMonth(), day);

    if (range.from && range.to) {
      return date >= range.from && date <= range.to;
    }

    return date.toDateString() === range.from.toDateString();
  };

  const isDateInRange = (day: number): boolean => {
    if (!range?.from || !range?.to) return false;

    const date = new Date(month.getFullYear(), month.getMonth(), day);
    return date > range.from && date < range.to;
  };

  const isDateRangeStart = (day: number): boolean => {
    if (!range?.from) return false;

    const date = new Date(month.getFullYear(), month.getMonth(), day);
    return range.from.toDateString() === date.toDateString();
  };

  const isDateRangeEnd = (day: number): boolean => {
    if (!range?.to) return false;

    const date = new Date(month.getFullYear(), month.getMonth(), day);
    return range.to.toDateString() === date.toDateString();
  };

  const isToday = (day: number): boolean => {
    const date = new Date(month.getFullYear(), month.getMonth(), day);
    return date.toDateString() === today.toDateString();
  };

  const renderCalendarDays = () => {
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="cal-empty" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayClasses = ["cal-day"];

      if (isToday(day) && !isDateSelected(day)) {
        dayClasses.push("cal-day--today");
      }

      if (isDateRangeStart(day)) {
        dayClasses.push("cal-day--range-start");
      }

      if (isDateRangeEnd(day)) {
        dayClasses.push("cal-day--range-end");
      }

      if (isDateInRange(day)) {
        dayClasses.push("cal-day--in-range");
      }

      if (isDateSelected(day)) {
        dayClasses.push("cal-day--selected");
      }

      days.push(
        <button
          key={day}
          className={dayClasses.join(" ")}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <main className="cal-wrap cal-wrap--full">
      <div className="cal-container">
        <header className="cal-head">
          <div className="cal-head-content">
            <svg
              className="cal-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div>
              <h2 className="cal-title">Calendar</h2>
              <p className="cal-sub">Pick a date range</p>
            </div>
          </div>
          <button className="cal-today" onClick={() => setMonth(new Date())}>
            Today
          </button>
        </header>

        <div className="cal-nav">
          <button className="cal-nav-btn" onClick={() => navigateMonth("prev")}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <h3 className="cal-month-year">
            {months[month.getMonth()]} {month.getFullYear()}
          </h3>
          <button className="cal-nav-btn" onClick={() => navigateMonth("next")}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>

        <section className="cal-card">
          <div className="cal-grid">
            {weekDays.map((day) => (
              <div key={day} className="cal-weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="cal-grid">{renderCalendarDays()}</div>
        </section>

        {range?.from && (
          <div className="cal-selected">
            <p className="cal-selected-label">Selected:</p>
            <p className="cal-selected-date">
              {range.from.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              {range.to
                ? ` - ${range.to.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}`
                : " (select end date)"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
