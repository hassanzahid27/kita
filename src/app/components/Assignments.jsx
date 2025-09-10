"use client";
import { useState } from "react";

const assignments = [
  {
    id: 1,
    course: "📖 Medieval History",
    title: "Answer Writing",
    deadline: "02:56:02",
  },
  {
    id: 2,
    course: "📊 Mathematics III",
    title: "Multiple Choice Q...",
    deadline: "02:56:02",
  },
  {
    id: 3,
    course: "📘 English Lesson",
    title: "Question & Answer",
    deadline: "02:56:02",
  },
  {
    id: 4,
    course: "📊 Mathematics III",
    title: "Multiple Choice Q...",
    deadline: "02:56:02",
  },
  { id: 5, course: "🔬 Physics", title: "Lab Report", deadline: "02:56:02" },
];

export default function UpcomingAssignments() {
  // Helper to split deadline into hours, minutes, seconds
  const splitTime = (time) => {
    const [h, m, s] = time.split(":");
    return { h, m, s };
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">📑 Upcoming Assignments</h2>

        <p>View all</p>
      </div>

      {/* Scrollable wrapper */}
      <div className="max-h-60 overflow-y-auto pr-2 scrollbar-hide">
        <div className="overflow-x-auto scrollbar-hide">
          {/* Force minimum width so columns don’t shrink */}
          <div className="min-w-[450px]">
            {/* Column headers */}
            <div className="grid grid-cols-3   text-gray-700  mt-5 pb-2 mb-2 text-sm     font-montserrat font-semibold text-[16px] leading-[100%] tracking-[0]">
              <span>Course</span>
              <span>Title</span>
              <span className="">Deadline</span>
            </div>

            {/* Data rows */}
            {assignments.map((item) => {
              const { h, m, s } = splitTime(item.deadline);
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-3 items-center   py-3 text-sm"
                >
                  {/* Course */}
                  <span className="font-montserrat   text-[16px] leading-[100%] tracking-[0]">
                    {item.course}
                  </span>

                  {/* Title */}
                  <span>{item.title}</span>

                  {/* Deadline with labels above each time box */}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
