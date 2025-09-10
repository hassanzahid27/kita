"use client";
import { useState } from "react";
import Image from "next/image";

const days = [
  { id: 1, day: "Mon", date: 16 },
  { id: 2, day: "Tue", date: 17 },
  { id: 3, day: "Wed", date: 18 },
  { id: 4, day: "Thu", date: 19 },
  { id: 5, day: "Fri", date: 20 },
  { id: 6, day: "Sat", date: 21 },
  { id: 7, day: "Sun", date: 22 },
];

const events = [
  {
    id: 1,
    title: "Medieval History",
    time: "8:00 - 9:00",
    slot: "8:00PM",
    status: "In Progress",
    participants: [
      "/avatar1.png",
      "/avatar2.png",
      "/avatar3.png",
      "/avatar4.png",
    ],
    extra: "+60 More",
  },
  {
    id: 2,
    title: "Mathematics III",
    time: "9:00 - 10:00",
    slot: "9:00PM",
    status: "Upcoming",
    participants: ["/avatar2.png", "/avatar3.png", "/avatar4.png"],
    extra: "+25 More",
  },
  {
    id: 3,
    title: "Physics Lab",
    time: "10:00 - 11:00",
    slot: "10:00PM",
    status: "Completed",
    participants: ["/avatar1.png", "/avatar4.png"],
    extra: "+10 More",
  },
  {
    id: 4,
    title: "Chemistry Quiz",
    time: "11:00 - 12:00",
    slot: "11:00PM",
    status: "In Progress",
    participants: ["/avatar1.png", "/avatar2.png", "/avatar3.png"],
    extra: "+45 More",
  },
];

export default function Calendar() {
  const [selected, setSelected] = useState(4);

  return (
    <div className="bg-white rounded-2xl shadow p-4 max-w-[600px] mx-auto">
      {/* Heading */}
      <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
        <span role="img" aria-label="calendar">
          📅
        </span>
        Calendar
      </h2>

      {/* Days Bar */}
      <div className="flex  justify-between mb-6">
        {days.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelected(d.id)}
            className={`flex flex-col items-center px-8 py-4 rounded-lg w-12 ${
              selected === d.id
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-gray-700"
            }`}
          >
            <span className="text-sm font-medium">{d.day}</span>
            <span className="  mt-2  font-montserrat font-bold text-2xl leading-none tracking-normal">
              {d.date}
            </span>
          </button>
        ))}
      </div>

      {/* Scrollable Events */}
      <div className="max-h-80 overflow-y-auto pr-2 space-y-6 scrollbar-hide">
        {events.map((event) => (
          <div key={event.id}>
            {/* Time Label */}
            <p className="  font-montserrat font-medium text-base leading-none tracking-normal mb-2">
              {event.slot}
            </p>

            {/* Event Card */}
            <div className="bg-blue-50 border md:ml-14 ml-8 border-blue-100 rounded-xl p-4  flex justify-between">
              {/* Left: Title + Time */}
              <div className="flex flex-col gap-8">
                <h3 className="text-gray-800 font-medium">{event.title}</h3>
                <p className=" font-montserrat font-medium text-base leading-none tracking-normal">
                  {event.time}
                </p>
              </div>

              {/* Right: Avatars + More + Status */}
              <div className="flex flex-col items-end gap-3">
                {/* Avatars */}
                <div className="flex -space-x-2 mb-1">
                  {event.participants.map((p, i) => (
                    <Image
                      key={i}
                      src={p}
                      alt="avatar"
                      width={18}
                      height={1}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                  {/* "+ More" text */}
                  <span className="text-xs text-gray-600 mb-1">
                    {event.extra}
                  </span>{" "}
                </div>

                {/* Status */}
                <span
                  className={`px-3 py-1 text-sm rounded ${
                    event.status === "In Progress"
                      ? "bg-blue-500 text-white"
                      : event.status === "Upcoming"
                      ? "bg-yellow-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {event.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
