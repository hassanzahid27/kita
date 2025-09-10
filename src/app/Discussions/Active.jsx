"use client";
import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

const initialCourses = [
  {
    id: 1,
    title: "Medieval History",
    professor: "Prof. Jane Smith",
    enrollment: 60,
    recentActivity: "Discussion posted on August 14, 2024",
    dueDate: "August 20, 2024",
    assignments: 13,
    avatars: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    id: 2,
    title: "Medieval History",
    professor: "Prof. Jane Smith",
    enrollment: 60,
    recentActivity: "Discussion posted on August 14, 2024",
    dueDate: "August 20, 2024",
    assignments: 13,
    avatars: ["1.jpg", "2.jpg", "3.jpg"],
  },
  {
    id: 3,
    title: "World History",
    professor: "Prof. Alan Doe",
    enrollment: 45,
    recentActivity: "Assignment posted on August 10, 2024",
    dueDate: "August 25, 2024",
    assignments: 8,
    avatars: ["1.jpg", "2.jpg", "3.jpg"],
  },
];

export default function ActiveCourses() {
  const [courses, setCourses] = useState(initialCourses);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    professor: "",
    enrollment: 0,
    recentActivity: "",
    dueDate: "",
    assignments: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.professor) {
      setCourses([
        {
          id: Date.now(),
          ...formData,
          avatars: ["student1.png", "student2.png"],
        },
        ...courses,
      ]);
      setFormData({
        title: "",
        professor: "",
        enrollment: 0,
        recentActivity: "",
        dueDate: "",
        assignments: 0,
      });
      setShowModal(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-2xl p-5 max-w-[600px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg flex items-center gap-2">
          📚 Active Courses
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className=" text-gray-500 font-medium text-sm"
        >
          + New Course
        </button>
      </div>

      {/* Scrollable Courses List */}
      <div className="max-h-60 overflow-y-auto pr-2 scrollbar-hide space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="  last:border-none pb-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-base">{course.title}</h3>
                  <p className="text-sm  ">{course.professor}</p>
                </div>
                {/* Enrollment */}
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <span className="flex -space-x-2 text-gray-500">
                    Enrollment:
                    {course.avatars.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt="student"
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                    ))}
                  </span>
                  <span className="text-gray-500">
                    +{course.enrollment} More
                  </span>
                </div>

                {/* Recent Activity */}
                <p className="text-xs text-gray-500 mt-3">
                  Recent Activity: {course.recentActivity}
                </p>
              </div>

              {/* Right Side */}
              <div className="text-right text-sm text-gray-600 flex  flex-col mt-4 gap-4">
                <p>{course.dueDate}</p>
                <p className="mt-1">
                  Assignments:{" "}
                  <span className="font-medium">{course.assignments}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h3 className="font-semibold text-lg mb-4">New Course</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Course Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Professor Name"
                value={formData.professor}
                onChange={(e) =>
                  setFormData({ ...formData, professor: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Recent Activity"
                value={formData.recentActivity}
                onChange={(e) =>
                  setFormData({ ...formData, recentActivity: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="date"
                placeholder="Due Date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                placeholder="Assignments"
                value={formData.assignments}
                onChange={(e) =>
                  setFormData({ ...formData, assignments: e.target.value })
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
