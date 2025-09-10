"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const initialAssignments = [
  {
    id: 1,
    title: "Assignment & Answer Writing",
    course: "Medieval History",
    details: [
      "Write a 5-page essay analyzing the key factors that led to...",
      "Include at least three scholarly sources.",
      "Follow the MLA format.",
    ],
    dueDate: "2024-08-20",
    status: "Pending Submission",
    submissionCount: 13,
  },
  {
    id: 2,
    title: "Assignment & Answer Writing",
    course: "Medieval History",
    details: [
      "Write a 5-page essay analyzing the key factors that led to...",
      "Include at least three scholarly sources.",
      "Follow the MLA format.",
    ],
    dueDate: "2024-08-20",
    status: "Pending Submission",
    submissionCount: 7,
  },
  {
    id: 2,
    title: "Assignment & Answer Writing",
    course: "Medieval History",
    details: [
      "Write a 5-page essay analyzing the key factors that led to...",
      "Include at least three scholarly sources.",
      "Follow the MLA format.",
    ],
    dueDate: "2024-08-20",
    status: "Pending Submission",
    submissionCount: 7,
  },
  {
    id: 2,
    title: "Assignment & Answer Writing",
    course: "Medieval History",
    details: [
      "Write a 5-page essay analyzing the key factors that led to...",
      "Include at least three scholarly sources.",
      "Follow the MLA format.",
    ],
    dueDate: "2024-08-20",
    status: "Pending Submission",
    submissionCount: 7,
  },
];

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [sortBy, setSortBy] = useState("dueDate");
  const [showSort, setShowSort] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    details: "",
    dueDate: "",
    status: "Pending Submission",
    submissionCount: 0,
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
          details: formData.details ? formData.details.split("\n") : [],
          dueDate: formData.dueDate,
          status: formData.status,
          submissionCount: 0,
        },
        ...assignments,
      ]);
      setFormData({
        title: "",
        course: "",
        details: "",
        dueDate: "",
        status: "Pending Submission",
        submissionCount: 0,
      });
      setShowModal(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-2xl p-5 max-w-xl mx-auto h-[50vh] overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Assignments</h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-gray-500 font-medium text-sm"
        >
          + New Assignment
        </button>
      </div>

      {/* Tabs + Sort */}
      <div className="flex justify-between items-center mb-4 text-sm">
        <div className="flex gap-24">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
            Pending Submission
          </button>
          <button className="text-gray-500">Analytics</button>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className="flex items-center gap-1 px-3 py-1 rounded-lg text-gray-700"
          >
            Short By:{" "}
            <span className="font-medium bg-blue-100 px-2 py-0.5 rounded flex items-center gap-1">
              {sortBy === "dueDate" ? "Due Date" : "Default"}
              <IoChevronDown />
            </span>
          </button>

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
      <div className="space-y-4">
        {sortedAssignments.map((a) => (
          <div
            key={a.id}
            className="p-4 rounded-xl border bg-white flex justify-between items-start"
          >
            {/* Left Side */}
            <div>
              <h3 className="font-normal">{a.title}</h3>
              <p className="font-semibold text-gray-800 mt-1">{a.course}</p>
              <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                {a.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <span className="mt-2 inline-block text-xs bg-gray-100 px-2 py-1 rounded-md">
                {a.status}
              </span>
            </div>

            {/* Right Side */}
            <div className="text-left pt-8">
              <p className="text-xs text-gray-500">Due Date</p>
              <p className="text-sm font-medium text-gray-700">
                {new Date(a.dueDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-600 mt-18">
                Pending Submission{" "}
                <span className="font-bold">{a.submissionCount}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
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
