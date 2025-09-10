"use client";
import { useState } from "react";

export default function Resources() {
  const [resources, setResources] = useState([
    {
      week: "Week 1",
      date: "Aug 7, 2024",
      title: "Introduction to Medieval History.",
      link: "#",
    },
    {
      week: "Week 2",
      date: "Aug 14, 2024",
      title: "Introduction to Medieval History.",
      link: "#",
    },
    {
      week: "Week 3",
      date: "Aug 21, 2024",
      title: "Introduction to Medieval History.",
      link: "#",
    },
    {
      week: "Week 3",
      date: "Aug 21, 2024",
      title: "Introduction to Medieval History.",
      link: "#",
    },
    {
      week: "Week 3",
      date: "Aug 21, 2024",
      title: "Introduction to Medieval History.",
      link: "#",
    },
    {
      week: "Week 3",
      date: "Aug 21, 2024",
      title: "Introduction to Medieval History.",
      link: "#",
    },
  ]);

  const [formData, setFormData] = useState({
    week: "",
    date: "",
    title: "",
    link: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.week || !formData.date || !formData.title || !formData.link)
      return;

    setResources([...resources, formData]);
    setFormData({ week: "", date: "", title: "", link: "" });
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center  p-4">
      <div className="bg-white shadow rounded-2xl p-5 w-full  max-w-[420px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Resources</h2>
          <button
            onClick={() => setIsOpen(true)}
            className=" text-gray-500 font-medium px-3 py-1 rounded-lg hover:bg-blue-50"
          >
            + Create a Resource
          </button>
        </div>

        {/* Tabs */}
        <div className="flex lg:space-x-24 md:space-x-18 space-x-12 border-b mb-4">
          <button className=" text-gray-500 font-medium border-b-2   pb-2">
            Lecture Slides
          </button>
          <button className="text-gray-500">Notes</button>
          <button className="text-gray-500">Materials</button>
        </div>

        {/* Scrollable list */}
        <div className="h-[320px] overflow-y-auto pr-2 scrollbar-hide">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="font-medium">
                  {res.week}: {res.date}
                </p>
                <p className="text-sm text-gray-600">{res.title}</p>
              </div>
              <a
                href={res.link}
                target="_blank"
                className="text-blue-600 flex items-center gap-1"
              >
                Download Slides
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-3">
          <strong>Note:</strong> Be sure to regularly check this section for
          updates and newly added materials to support your studies.
        </p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-4">Create a Resource</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Week (e.g. Week 3)"
                value={formData.week}
                onChange={(e) =>
                  setFormData({ ...formData, week: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Date (e.g. Aug 20, 2024)"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
              />
              <textarea
                placeholder="Resource Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="url"
                placeholder="Download Link"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                className="w-full border rounded px-3 py-2"
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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
