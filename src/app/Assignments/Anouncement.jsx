"use client";
import React from "react";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      date: "August 20, 2024",
      author: "Prof. Jane Smith",
      content:
        "The deadline for Assignment 3 has been extended to The deadline for Assignment...",
    },
    {
      id: 2,
      date: "August 20, 2024",
      author: "Prof. Jane Smith",
      content:
        "The deadline for Assignment 3 has been extended to The deadline for Assignment...",
    },
    {
      id: 3,
      date: "August 20, 2024",
      author: "Prof. Jane Smith",
      content:
        "The deadline for Assignment 3 has been extended to The deadline for Assignment...",
    },
  ];

  return (
    <div className="bg-white shadow rounded-2xl p-5 max-w-[650px] h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-hide">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">📢 Announcements</h2>
        <button className="text-sm text-indigo-600">View All</button>
      </div>

      <h3 className="text-gray-400 mb-4 border-b pb-2">Assignment Updates</h3>

      {/* Scrollable content */}
      <div className="space-y-6">
        {announcements.map((a) => (
          <div key={a.id} className="border-b pb-4">
            <p className="text-xs text-gray-500">{a.date}</p>
            <h4 className="font-semibold">{a.author}</h4>
            <p className="text-sm text-gray-600">{a.content}</p>
            <a href="#" className="text-blue-600 text-sm">
              Read More
            </a>
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
    </div>
  );
}
