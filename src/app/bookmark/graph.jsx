"use client";
import React from "react";

export default function PerformanceCard() {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 bg-blue-200 px-2 py-3">
        <h2 className="font-semibold text-gray-800">Performance</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1">
          Sort By: <span className="font-medium text-gray-700">Due Date</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side Content */}
        <div>
          <p className="text-gray-600 text-sm">Total Student</p>
          <h1 className="text-3xl font-bold text-gray-800">12,000</h1>
          <p className="text-sm text-gray-500 mb-4">
            From Jan 20, 2022 to July, 2022
          </p>

          {/* Legend */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> Courses
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Grade
              Distributions
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>{" "}
              Progress
            </span>
          </div>

          {/* Placeholder Line Graph */}
          <div className=" h-24 rounded-lg flex items-center justify-center text-gray-400">
            <img src="content.png" alt="" />
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-4 text-center">
            <div>
              <p className="font-semibold text-gray-800">3,526.56</p>
              <p className="text-xs text-gray-500">Net Profit</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">3,526.56</p>
              <p className="text-xs text-gray-500">Net Revenue</p>
            </div>
          </div>
        </div>

        {/* Right Side Placeholder (Bar Chart) */}
        <div className=" h-56 rounded-lg flex items-center justify-center text-gray-400">
          <img src="graph.png" alt="" />
        </div>
      </div>
    </div>
  );
}
