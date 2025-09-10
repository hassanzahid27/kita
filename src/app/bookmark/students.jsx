"use client";
import React from "react";
import { Phone, MessageSquare, MoreHorizontal } from "lucide-react";

export default function StudentsList() {
  // Fake students data
  const students = Array(15).fill({
    name: "John Doe",
    performance: "Performance: A- / 90%",
    avatar: "/john.jpg", // replace with your avatar path
  });

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-gray-800">Students</h2>
        <span className="text-sm text-gray-500">1.2K Active</span>
      </div>

      {/* Scrollable Students List */}
      <div className="max-h-80 overflow-y-auto pr-2 scrollbar-hide">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b last:border-none"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{student.name}</p>
                <p className="text-xs text-gray-500">{student.performance}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 text-gray-400">
              <Phone className="w-4 h-4 cursor-pointer hover:text-gray-600" />
              <MessageSquare className="w-4 h-4 cursor-pointer hover:text-gray-600" />
              <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
