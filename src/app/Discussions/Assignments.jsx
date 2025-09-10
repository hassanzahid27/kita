"use client";
import { useState } from "react";
import { IoEllipsisHorizontal, IoChevronDown } from "react-icons/io5";

const initialAssignments = [
  {
    id: 1,
    title: "Assignment 4: Answer Writing",
    course: "Medieval History",
    details: [
      "Write a 5-page essay analyzing the key factors that led to...",
      "Include at least three scholarly sources.",
      "Follow the MLA format.",
    ],
    dueDate: "2024-08-20",
    status: "Pending Grading",
  },
  {
    id: 2,
    title: "Assignment 3: Research Project",
    course: "World History",
    details: [
      "Prepare a presentation on trade routes in the Middle Ages.",
      "Include maps and primary sources.",
    ],
    dueDate: "2024-08-25",
    status: "Pending Grading",
  },
  {
    id: 3,
    title: "Assignment 2: Essay",
    course: "Modern History",
    details: [
      "Write a comparative essay on revolutions in the 18th century.",
      "Minimum 1500 words.",
    ],
    dueDate: "2024-08-15",
    status: "Pending Grading",
  },
];

export default function AssignmentsCard() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [sortBy, setSortBy] = useState("dueDate");
  const [showSort, setShowSort] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    course: "",
    details: "",
    dueDate: "",
    status: "Pending Grading",
  });

  // Sorting
  const sortedAssignments = [...assignments].sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0;
  });

  // Submit new assignment
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.course && formData.dueDate) {
      setAssignments([
        {
          id: Date.now(),
          title: formData.title,
          course: formData.course,
          details: formData.details
            ? formData.details.split("\n") // split multiline input into list
            : [],
          dueDate: formData.dueDate,
          status: formData.status,
        },
        ...assignments,
      ]);
      setFormData({
        title: "",
        course: "",
        details: "",
        dueDate: "",
        status: "Pending Grading",
      });
      setShowModal(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-2xl p-5 max-w-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg flex items-center gap-2">
          📑 Assignments
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-gray-500 font-medium text-sm"
        >
          + New Assignment
        </button>
      </div>

      {/* Subtitle + Sort */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 font-medium">Pending Submission</p>

        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className="flex items-center gap-1  rounded-lg px-3 py-1 text-sm text-gray-700 "
          >
            Sort By:{" "}
            <span className="font-medium bg-blue-200 text-gray-500 flex gap-2 items-center">
              {sortBy === "dueDate" ? "Due Date" : "Default"}
              <IoChevronDown />{" "}
            </span>
          </button>

          {/* Dropdown */}
          {showSort && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-32 text-sm">
              <button
                onClick={() => {
                  setSortBy("dueDate");
                  setShowSort(false);
                }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                Due Date
              </button>
              <button
                onClick={() => {
                  setSortBy("default");
                  setShowSort(false);
                }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                Default
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Assignments List */}
      <div className="max-h-64 overflow-y-auto pr-2 scrollbar-hide space-y-4">
        {sortedAssignments.map((a) => (
          <div
            key={a.id}
            className="p-4 rounded-xl border bg-white flex justify-between items-start"
          >
            {/* Left Side */}
            <div>
              <h3 className="font-light">{a.title}</h3>
              <p className="font-semibold mt-1">{a.course}</p>

              {/* Details */}
              <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                {a.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Status */}
              <span className="mt-2 inline-block text-xs bg-gray-100 px-2 py-1 rounded-md">
                {a.status}
              </span>
            </div>

            {/* Right Side */}
            <div className="text-right">
              <p className="text-xs text-gray-500">Due Date:</p>
              <p className="text-sm font-medium text-gray-700">
                {new Date(a.dueDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h3 className="font-semibold text-lg mb-4">New Assignment</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Assignment Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Course Name"
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <textarea
                placeholder="Assignment Details (one per line)"
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 text-sm rounded-lg border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 text-sm rounded-lg bg-blue-600 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
