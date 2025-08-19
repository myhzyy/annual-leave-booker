"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/CalendarDatePicker.css";

export default function CalendarDatePicker() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();

  const goPrev = () => {
    const d = new Date(month);
    d.setMonth(d.getMonth() - 1);
    setMonth(d);
  };

  const goNext = () => {
    const d = new Date(month);
    d.setMonth(d.getMonth() + 1);
    setMonth(d);
  };

  return (
    <div className="calendar-screen">
      <header className="calendar-header">
        <h2 className="calendar-title">
          {month.toLocaleDateString("en-GB", {
            month: "short",
            year: "numeric",
          })}
        </h2>
        <div className="calendar-arrows">
          <button onClick={goPrev} aria-label="Previous month">
            ‹
          </button>
          <button onClick={goNext} aria-label="Next month">
            ›
          </button>
        </div>
      </header>

      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        month={month}
        onMonthChange={setMonth}
        fixedWeeks
        showOutsideDays
        weekStartsOn={0} // Sunday
        disableNavigation
      />

      {range?.from && range?.to && (
        <p className="calendar-helper">
          {range.from.toLocaleDateString("en-GB")} –{" "}
          {range.to.toLocaleDateString("en-GB")}
        </p>
      )}
    </div>
  );
}
