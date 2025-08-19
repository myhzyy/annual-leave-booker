"use client";

import "../styles/CalendarBody.css";
import CalendarHeader from "../components/CalendarHeader";
import CalendarDatePicker from "../components/CalendarDatePicker";

export default function CalendarBody() {
  return (
    <div className="calendar-body">
      <CalendarHeader />
      <CalendarDatePicker />
    </div>
  );
}
