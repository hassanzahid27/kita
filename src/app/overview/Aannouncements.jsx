"use client";
import React from "react";

export default function Announcements() {
  return (
    <div className="p-4 pr-0">
      {/* Header */}

      <div className="bg-white shadow rounded-2xl p-5  pb-0 max-w-[665px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg flex items-center gap-2">
            📢 Announcements
          </h2>
          <a
            href="#"
            className=" text-gray-500 font-montserrat font-semibold text-[14px] leading-[100%] tracking-[0] text-sm mr-8"
          >
            View All
          </a>
        </div>

        {/* Cards Wrapper */}
        <div className="flex gap-3 overflow-x-auto lg:overflow-x-hidden">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-[200px] bg-white  rounded-t-2xl shadow p-4 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-2 text-[#6B7280] pb-5">
              Schedule Changes
            </h3>

            {[...Array(12)].map((_, i) => (
              <div key={i} className="mb-4 border p-2 pt-4 rounded-2xl">
                <p className="text-xs text-gray-500">August 18, 2024</p>
                <p className="font-medium">Prof. Emily Davis</p>
                <p className="text-sm text-gray-500 mt-3">
                  The lecture scheduled for August 25 has been canceled due to a
                  departmental meeting. A makeup class will be held on September
                  1.
                </p>

                {/* Overlapping avatars */}
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">+60 more</span>
                </div>
              </div>
            ))}
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-[200px] bg-white rounded-t-2xl shadow p-4 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-2 pb-5">Upcoming Exams</h3>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="mb-4 border rounded-2xl p-2 pt-4 ">
                <p className="text-xs text-gray-500">August 18, 2024</p>
                <p className="font-medium">Dr. John Doe</p>
                <p className="text-sm text-gray-600 mt-3">
                  The Midterm Exam will take place on September 10, 2024, from 9
                  AM.
                </p>

                {/* Read More link stays */}
                <a href="#" className="text-blue-500 text-sm block mt-1">
                  Read More
                </a>

                {/* Overlapping avatars */}
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/22.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/33.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">+60 more</span>
                </div>
              </div>
            ))}
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-[200px] bg-white rounded-t-2xl shadow p-4 h-[320px] overflow-y-auto scrollbar-hide">
            <h3 className="font-semibold mb-2 pb-5">Assignment Updates</h3>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="mb-4 border rounded-2xl p-2 pt-4">
                <p className="text-xs text-gray-500">August 30, 2024</p>
                <p className="font-medium">Prof. Jane Smith</p>
                <p className="text-sm text-gray-600 mt-3">
                  The deadline for Assignment 3 has been extended to September
                  5.
                </p>

                {/* Read More link stays */}
                <a href="#" className="text-blue-500 text-sm block mt-1">
                  Read More
                </a>

                {/* Overlapping avatars */}
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/12.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/24.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/36.jpg"
                      alt="avatar"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">+60 more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
