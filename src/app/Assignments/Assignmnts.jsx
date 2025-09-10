"use client";
import React from "react";

export default function Assignments() {
  return (
    <div className="  pr-0">
      {/* Wrapper */}
      <div className="bg-white shadow rounded-2xl p-5 pb-0 max-w-[755px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg flex items-center gap-2">
            📂 Assignments
          </h2>
          <a href="#" className="text-gray-500 font-semibold text-sm mr-6">
            View All
          </a>
        </div>

        {/* Cards Wrapper - flex-row always, horizontal scroll only on sm/md */}
        <div className="flex gap-4 overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden">
          {/* Upcoming Assignments */}
          <div className="flex-shrink-0 w-[225px] bg-white  rounded-t-2xl p-2 h-[320px] shadow overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-4 text-[#6B7280]">
              Upcoming Assignments
            </h3>

            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-4 border rounded-2xl p-3">
                {/* Date + Status */}
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">August {25 + i}, 2024</p>
                  <span className="text-xs bg-green-600  text-white px-2 py-1 rounded">
                    Submitted
                  </span>
                </div>

                <p className="font-medium mt-1">Mathematics III</p>
                <a href="#" className="text-blue-500 text-sm block mt-1">
                  View Assignment Details
                </a>

                {/* Avatars */}
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">+60 more</span>
                </div>
              </div>
            ))}
          </div>

          {/* Past Assignments */}
          <div className="flex-shrink-0 w-[225px] bg-white  rounded-t-2xl shadow p-2 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-4 text-[#6B7280]">
              Past Assignments
            </h3>

            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-4 border rounded-2xl p-3">
                {/* Title + Grade */}
                <div className="flex justify-between items-center">
                  <p className="font-medium">Answer Writing</p>
                  <span className="text-xs text-green-600 font-semibold">
                    Grade: {80 + i}%
                  </span>
                </div>
                <p className="text-xs text-gray-500">July {15 + i}, 2024</p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold text-black">
                    Instructor Feedback:{" "}
                  </span>
                  "Great job on the analysis! However, make sure to cite all
                  sources correctly."
                </p>

                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">+60 more</span>
                </div>
              </div>
            ))}
          </div>

          {/* Assignments Link */}
          <div className="flex-shrink-0 w-[205px] bg-white   rounded-t-2xl shadow p-2 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-4 text-[#6B7280]">
              Assignments Link
            </h3>

            {[...Array(6)].map((_, i) => (
              <div key={i} className="mb-3 border rounded-2xl p-3">
                <p className="font-medium montserrate">
                  Medieval History Assignment {i + 1}
                </p>
                <a href="#" className="text-blue-500 text-sm block mt-1">
                  View Assignment Details
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  September {20 + i}, 2024
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
