"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/CalendarDatePicker.css";

export default function CalendarDatePicker() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();

  const go = (delta: number) => {
    const d = new Date(month);
    d.setMonth(d.getMonth() + delta);
    setMonth(d);
  };

  return (
    <section className="cal-screen">
      <header className="cal-header">
        <button
          className="hdr-btn"
          aria-label="Previous"
          onClick={() => go(-1)}
        >
          ‹
        </button>

        <div className="hdr-center">
          <div className="hdr-sub">Calendar</div>
          <h1 className="hdr-title">
            {month.toLocaleDateString("en-GB", { month: "long" })}
          </h1>
        </div>

        <button className="hdr-btn" aria-label="Next" onClick={() => go(+1)}>
          ›
        </button>
      </header>

      <div className="cal-main">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          month={month}
          onMonthChange={setMonth}
          showOutsideDays
          fixedWeeks
          weekStartsOn={0}
          disableNavigation /* we use our own chevrons */
        />
      </div>

      {/* Optional footer area for upcoming list etc.
      <footer className="cal-footer">Upcoming …</footer>
      */}
    </section>
  );
}
