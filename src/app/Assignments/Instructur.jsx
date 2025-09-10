"use client";
import { Mail, Phone, Info } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    title: "Instructor of USA Government University",
    phone: "+1 (123) 456-7890",
    email: "jane.doe@university.edu",
    avatarUrl: "1.jpg", // <-- put your image URL here later
  },
  {
    id: 2,
    name: "Prof. Emily Davis",
    title: "Instructor of USA Government University",
    phone: "+1 (123) 456-7890",
    email: "jane.doe@university.edu",
    avatarUrl: "2.jpg", // no image -> shows initials
  },
  {
    id: 3,
    name: "Prof. Jane Smith",
    title: "Instructor of USA Government University",
    phone: "+1 (123) 456-7890",
    email: "jane.doe@university.edu",
    avatarUrl: "3.jpg", // no image -> shows initials
  },
  {
    id: 4,
    name: "Dr. Jane Doe",
    title: "Instructor of USA Government University",
    phone: "+1 (123) 456-7890",
    email: "jane.doe@university.edu",
    avatarUrl: "4.jpg", // no image -> shows initials
  },
];

function Avatar({ src, name }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-12 h-12 rounded-full object-cover ring-1 ring-gray-200"
      />
    );
  }
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Placeholder circle (will be replaced when you add src above)
  return (
    <div className="w-12 h-12 rounded-full bg-gray-200 ring-1 ring-gray-200 grid place-items-center text-gray-600 font-semibold">
      {initials}
    </div>
  );
}

export default function InstructorList() {
  return (
    <div className="max-w-[550px] mx-auto bg-white rounded-2xl shadow">
      {/* Header */}
      <div className="flex items-center gap-2   px-5 py-3">
        <Info className="text-gray-600" size={18} />
        <h2 className="font-semibold text-gray-800">
          Instructor’s Information
        </h2>
      </div>

      {/* Scrollable list */}
      <div className="max-h-72 overflow-y-auto px-5 py-2 scrollbar-hide">
        {instructors.map((inst, idx) => (
          <div
            key={inst.id}
            className={`flex items-center justify-between gap-3 py-4 ${
              idx !== instructors.length - 1 ? "" : ""
            }`}
          >
            {/* Avatar placeholder */}
            <Avatar src={inst.avatarUrl} name={inst.name} />

            {/* Left: name + title */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {inst.name}
              </h3>
              <p className="text-sm text-gray-500 truncate">{inst.title}</p>
            </div>

            {/* Right: contact */}
            <div className="flex flex-col text-sm text-gray-700 shrink-0">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>{inst.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span className="truncate">{inst.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
