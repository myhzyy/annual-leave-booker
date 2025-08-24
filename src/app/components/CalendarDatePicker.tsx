"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/CalendarDatePicker.css";

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <main className="cal-wrap cal-wrap--full">
      <header className="cal-head">
        <div>
          <h2 className="cal-title">Calendar</h2>
          <p className="cal-sub">Pick a date range</p>
        </div>
        <button className="cal-today" onClick={() => setMonth(new Date())}>
          Today
        </button>
      </header>

      <section className="cal-card">
        <DayPicker
          className="rdp-nice"
          mode="range"
          selected={range}
          onSelect={setRange}
          month={month}
          onMonthChange={setMonth}
          fixedWeeks
          showOutsideDays
          numberOfMonths={1}
        />
      </section>
    </main>
  );
}
