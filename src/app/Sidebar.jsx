"use client";
import { useState } from "react";
import {
  FaBook,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaBookmark,
  FaComments,
  FaTachometerAlt,
} from "react-icons/fa";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true); // dropdown toggle
  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar toggle

  // ✅ Toggle functions
  const toggleDropdown = () => setOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* ✅ Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-2 z-50  bg-blue-400 text-white p-2 rounded-md"
      >
        {sidebarOpen ? <HiX size={20} /> : <HiMenu size={40} />}
      </button>

      {/* Sidebar (floats over content) */}
      <aside
        className={`fixed md:static top-0 left-0  h-screen max-h-screen text-white  w-65 bg-[rgba(32,101,255,1)] border-r flex flex-col     transform transition-transform duration-300 z-40
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="py-4">
          {/* Logo */}
          <div className="flex flex-col items-center ">
            <img src="1.png" alt="logo" className="w-12 h-12 " />
            <h1 className=" text-lg font-inter font-extrabold uppercase">
              K I T A H U B
            </h1>
          </div>

          <div className="flex w-full">
            <div className="w-1/2 border-t-2 border-[#BCD4C7]"></div>
            <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
          </div>

          {/* Courses Section */}

          <ul className="space-y-8 pl-[28px]">
            {/* Dropdown Parent */}

            {/* Dropdown Children */}
            {open && (
              <ul className=" mt-[50px] space-y-8 ">
                <Link href="/overview">
                  <li className=" flex gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    <FaTachometerAlt /> Dashboard
                  </li>
                </Link>
                <Link href="/Assignments">
                  <li className=" flex pt-8 gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    <FaBook /> Assignments
                  </li>
                </Link>
                <Link href="/Discussions">
                  <li className=" flex pt-8 gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    <FaComments /> Discussions
                  </li>
                </Link>
                <Link href="/Profile">
                  <li className="pt-8 flex gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    <FaUser /> Profile
                  </li>{" "}
                </Link>
                <Link href="/bookmark">
                  <li className="flex pt-8 gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                    <FaBookmark /> Bookmarks
                  </li>{" "}
                </Link>
                <li className=" flex pt-8 gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                  <FaCog /> Settings
                </li>{" "}
                <li className="flex  gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                  <FaBook /> Courses Overview
                </li>{" "}
                <li className="  flex gap-[13px] cursor-pointer hover:text-blue-600 font-inter font-medium text-[16px] leading-[100%] tracking-[0]">
                  <FaSignOutAlt /> Log Out
                </li>{" "}
              </ul>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
