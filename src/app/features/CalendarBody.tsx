"use client";
import "../styles/CalendarBody.css";
import CalendarDatePicker from "../components/CalendarDatePicker";

export default function CalendarBody() {
  return (
    <div className="calendar-body">
      <CalendarDatePicker />
    </div>
  );
}
