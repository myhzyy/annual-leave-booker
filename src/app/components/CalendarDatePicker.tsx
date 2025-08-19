"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/CalendarDatePicker.css";

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <main className="calendar-page">
      <section className="calendar-card">
        <div className="calendar-month-shell">
          <DayPicker
            className="rdp-full"
            mode="range"
            selected={range}
            onSelect={setRange}
            month={month}
            onMonthChange={setMonth}
            fixedWeeks
            showOutsideDays
            numberOfMonths={1}
          />
        </div>
      </section>
    </main>
  );
}
