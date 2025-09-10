"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
const data = [
  { id: 1, title: "Answer Writing", due: "02:56:02", status: "Submitted" },
  { id: 2, title: "Answer Writing", due: "02:56:02", status: "In Progress" },
  { id: 3, title: "Answer Writing", due: "00:00:00", status: "Not Started" },
  { id: 4, title: "Answer Writing", due: "00:00:00", status: "Not Started" },
  { id: 5, title: "Answer Writing", due: "00:00:00", status: "Not Started" },
];

export default function SubmissionStatus() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? data : data.filter((d) => d.status === filter);

  const splitTime = (time) => {
    const [h, m, s] = time.split(":");
    return { h, m, s };
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      {/* Top filter */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative inline-block">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-[rgba(32,101,255,1)] text-white rounded-lg px-4 py-2 w-52 "
          >
            <option value="All">Submission Status</option>
            <option value="Submitted">Submitted</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
          </select>
          <IoChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
        </div>

        <p>View all</p>
      </div>

      {/* Scrollable container */}
      <div className="max-h-60 overflow-y-auto pr-2 scrollbar-hide">
        {/* Horizontal scroll wrapper */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[600px]">
            {/* Column headers */}
            <div className="grid grid-cols-4 font-semibold text-gray-700  pb-2 mb-2 text-sm pt-2">
              <span>Assignment</span>
              <span>Title</span>
              <span className="">Due Date</span>
              <span className="text-center">Status</span>
            </div>

            {/* Data rows */}
            {filtered.map((d) => {
              const { h, m, s } = splitTime(d.due);
              return (
                <div
                  key={d.id}
                  className="grid grid-cols-4 items-center   py-3 text-sm"
                >
                  {/* Assignment */}
                  <span>Assignment</span>

                  {/* Title */}
                  <span>{d.title}</span>

                  {/* Due Date */}

                  {/* Due Date */}
                  <div className="flex items-end   gap-1">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Hours</p>
                      <div className="bg-[rgba(239,244,255,1)] w-fit rounded-md px-2 py-1 font-medium">
                        {h}
                      </div>
                    </div>
                    <span className="pb-2">:</span>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Minutes</p>
                      <div className="bg-[rgba(239,244,255,1)] w-fit rounded-md px-2 py-1 font-medium">
                        {m}
                      </div>
                    </div>
                    <span className="pb-2">:</span>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Seconds</p>
                      <div className="bg-[rgba(239,244,255,1)] w-fit rounded-md px-2 py-1 font-medium">
                        {s}
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`px-2 py-1 text-xs rounded-lg text-center ${
                      d.status === "Submitted"
                        ? "  text-green-600"
                        : d.status === "In Progress"
                        ? "  text-yellow-600"
                        : "  text-red-600"
                    }`}
                  >
                    {d.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
