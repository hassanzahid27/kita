"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

const initialDiscussions = [
  {
    id: 1,
    name: "Maya Thompson",
    class: "Class 7",
    message: "You: List the most recent or active discussion...",
    avatar: "disc.jpg",
    time: "20 minute ago",
  },
  {
    id: 2,
    name: "Maya Thompson",
    class: "Class 9",
    message: "You: List the most recent or active discussion...",
    avatar: "m.jpg",
    time: "12 minute ago",
  },
  {
    id: 3,
    name: "Maya Thompson",
    class: "Class 10",
    message: "You: List the most recent or active discussion...",
    avatar: "n.jpg",
    time: "2 hour ago",
  },
  {
    id: 3,
    name: "Maya Thompson",
    class: "Class 10",
    message: "You: List the most recent or active discussion...",
    avatar: "n.jpg",
    time: "2 hour ago",
  },
  {
    id: 3,
    name: "Maya Thompson",
    class: "Class 10",
    message: "You: List the most recent or active discussion...",
    avatar: "n.jpg",
    time: "2 hour ago",
  },
];

export default function DiscussionBoard() {
  const [discussions, setDiscussions] = useState(initialDiscussions);
  const [search, setSearch] = useState("");
  const [filterRecent, setFilterRecent] = useState(false);

  // modal states
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    message: "",
  });

  const filtered = discussions.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.class.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.class && formData.message) {
      setDiscussions([
        {
          id: Date.now(),
          name: formData.name,
          class: formData.class,
          message: formData.message,
          avatar: "/default-avatar.png",
        },
        ...discussions,
      ]);
      setFormData({ name: "", class: "", message: "" });
      setShowModal(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full lg:max-w-[490px] relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">💬 Discussion Board</h2>
        <button
          onClick={() => setShowModal(true)}
          className="text-gray-600 px-3 py-1 rounded-lg text-sm"
        >
          + New Discussion
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Discussions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[rgba(239,244,255,1)] pl-2 rounded-lg py-1 w-full pr-10"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-gray-500" />
        </div>

        <button
          onClick={() => setFilterRecent(!filterRecent)}
          className="bg-[rgba(239,244,255,1)] px-2 py-1 rounded-lg text-sm flex items-center whitespace-nowrap gap-1 text-gray-800"
        >
          {filterRecent ? "All" : "Most Recent"}
          <IoChevronDown className="text-gray-600" />
        </button>
      </div>

      {/* Discussions List */}
      <div className="max-h-52 overflow-y-auto pr-2 scrollbar-hide">
        {(filterRecent ? [discussions[0]] : filtered).map((d) => (
          <div
            key={d.id}
            className="flex items-center gap-3 p-2 mb-2 rounded-lg"
          >
            {/* Avatar */}
            <img
              src={d.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <div className="flex gap-4">
                <p className="font-medium">{d.name}</p>

                <p className="text-xs mt-1.5   ">{d.time}</p>
              </div>

              <p className="      text-xs text-gray-600 mt-1   font-[Montserrat] font-normal text-[16px] leading-[100%] tracking-[0]">
                {d.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
            <h3 className="font-semibold text-lg mb-4">New Discussion</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Enter Class"
                value={formData.class}
                onChange={(e) =>
                  setFormData({ ...formData, class: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
              <textarea
                placeholder="Enter Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
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
