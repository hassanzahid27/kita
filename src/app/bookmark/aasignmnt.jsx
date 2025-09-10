"use client";
import React from "react";

export default function Announcements() {
  return (
    <div className="pr-0">
      {/* Wrapper */}
      <div className="bg-white shadow rounded-2xl p-5 pb-0 max-w-[710px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Assignments Announcements</h2>
          <a href="#" className="text-gray-500 font-semibold text-sm mr-6">
            + Add Announcement
          </a>
        </div>

        {/* Cards Wrapper - flex row */}
        <div className="flex gap-2 overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden">
          {/* Schedule Changes */}
          <div className="flex-shrink-0 w-[220px] bg-white rounded-2xl shadow p-3 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-4 text-[#6B7280]">
              Schedule Changes
            </h3>

            <div className="mb-4 border rounded-2xl p-3 bg-blue-50">
              <p className="text-xs text-gray-500">August 15, 2024</p>
              <p className="text-sm text-blue-700 mt-2">
                The lecture scheduled for August 25 has been canceled due to a
                departmental meeting. A makeup class will be held on September 1
                at the usual time and venue.
              </p>
            </div>

            <div className="mb-4 border rounded-2xl p-3">
              <p className="text-xs text-gray-500">August 15, 2024</p>
              <p className="font-semibold mt-2">Prof. Emily Davis</p>
              <p className="text-sm text-gray-600 mt-1">
                The lecture scheduled for August 25 has been...
              </p>
            </div>
          </div>

          {/* Upcoming Exams */}
          <div className="flex-shrink-0 w-[220px] bg-white rounded-2xl shadow p-3 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-4 text-[#6B7280]">
              Upcoming Exams
            </h3>

            {[
              {
                date: "September 10, 2024",
                details: "Midterm Exam covering Chapters 1–5.",
              },
              {
                date: "September 12, 2024",
                details: "Midterm Exam covering Chapters 1–5.",
              },
              {
                date: "September 15, 2024",
                details: "Midterm Exam covering Chapters 1–5.",
              },
            ].map((exam, i) => (
              <div key={i} className="mb-4 border rounded-2xl p-3">
                <p className="text-xs text-gray-500">{exam.date}</p>
                <p className="text-sm text-gray-700 mt-1">{exam.details}</p>
              </div>
            ))}
          </div>

          {/* Instructor Contact */}
          <div className="flex-shrink-0 w-[220px] bg-white rounded-2xl shadow p-3 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-4 text-[#6B7280]">
              Instructor Contact
            </h3>

            <div className="mb-4 border rounded-2xl p-3">
              <p className="text-xs text-gray-500">August 30, 2024</p>
              <p className="font-semibold">Dr. John Doe</p>
              <p className="text-sm text-gray-600">johndoe@university.edu</p>
              <p className="text-xs text-gray-500 mt-1">
                <span className="font-semibold">Office Hours:</span> Mondays &
                Wednesdays, 2:00 PM – 4:00 PM, Room 101
              </p>
            </div>

            <div className="mb-4 border rounded-2xl p-3">
              <p className="text-xs text-gray-500">August 20, 2024</p>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-600">janesmith@university.edu</p>
              <p className="text-xs text-gray-500 mt-1">
                <span className="font-semibold">Office Hours:</span> Tuesdays,
                10:00 AM – 12:00 PM, Room 102
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
