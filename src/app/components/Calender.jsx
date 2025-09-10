"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarCard() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <h2 className="font-semibold text-lg mb-3">📅 Upcoming Deadline</h2>
      <Calendar
        onChange={setValue}
        value={value}
        className="rounded-lg  w-full"
      />
    </div>
  );
}
