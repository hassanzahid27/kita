"use client";
import React from "react";

export default function QASection() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-sans">
      {/* Question Card */}
      <div className="bg-white shadow rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <img src="g.jpg" alt="Prof" className="w-10 h-10 rounded-full" />
          <div>
            <div className="flex lg:gap-48 md:gap-34 gap-18 xl:gap-54">
              <h2 className="font-semibold">Prof. Jane Smith</h2>

              <div className="flex gap-2 ">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 text-xs rounded">
                  Good
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
                  Not Good
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Lectures • Ert3 • 34 Min Ago
            </p>
          </div>
        </div>

        {/* Question */}
        <h3 className="font-semibold mb-2">Question: 01</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          What is the value of 8×(3+5)−12÷48×(3+5)−12÷48+(3+5)−12÷4?
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-gray-500">
            <button>💬 5</button>
            <button>♡</button>
          </div>
        </div>
      </div>

      {/* Answers */}
      <div>
        <h4 className="font-semibold mb-4">5 Answer</h4>

        {/* Answer 1 */}
        <div className="bg-white shadow rounded-2xl p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <img src="g.jpg" alt="User" className="w-9 h-9 rounded-full" />
            <div>
              <h2 className="font-semibold text-sm">Question: 01</h2>
              <p className="text-xs text-gray-500">
                Lectures • Ert3 • 34 Min Ago
              </p>
            </div>
          </div>
          <div className="text-gray-700 text-sm space-y-1 leading-relaxed">
            <p>8×8−12÷4</p>
            <p>64−364−364−3</p>
            <p>616161</p>
          </div>
          <div className="flex gap-4 text-xs mt-3 text-gray-500">
            <button>3 💬</button>
            <button>♡</button>
          </div>
        </div>

        {/* Threaded Answer */}
        <div className="ml-10   pl-6">
          <div className="bg-white shadow rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <img src="b.jpg" alt="User" className="w-9 h-9 rounded-full" />
              <div>
                <h2 className="font-semibold text-sm">Question: 01</h2>
                <p className="text-xs text-gray-500">
                  Lectures • Ert3 • 34 Min Ago
                </p>
              </div>
            </div>
            <div className="text-gray-700 text-sm space-y-1 leading-relaxed">
              <p>8×8−12÷4</p>
              <p>64−364−364−3</p>
              <p>616161</p>
            </div>
            <div className="flex gap-4 text-xs mt-3 text-gray-500">
              <button>5 💬</button>
              <button>♡</button>
            </div>
          </div>
        </div>

        {/* Another Answer */}
        <div className="bg-white shadow rounded-2xl p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <img src="g.jpg" alt="User" className="w-9 h-9 rounded-full" />
            <div>
              <h2 className="font-semibold text-sm">Question: 01</h2>
              <p className="text-xs text-gray-500">
                Lectures • Ert3 • 34 Min Ago
              </p>
            </div>
          </div>
          <div className="text-gray-700 text-sm space-y-1 leading-relaxed">
            <p>8×8−12÷4</p>
            <p>64−364−364−3</p>
            <p>616161</p>
          </div>
          <div className="flex gap-4 text-xs mt-3 text-gray-500">
            <button>5 💬</button>
            <button>♡</button>
          </div>
        </div>
      </div>
    </div>
  );
}
