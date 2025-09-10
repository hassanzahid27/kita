import { Bell, MoreVertical, Menu } from "lucide-react";

export default function UserCard() {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg ">
      {/* --- Mobile view (only logo + hamburger menu) --- */}

      <div className="flex items-end justify-end w-full sm:hidden bg-gradient-to-tr from-[#D620FF] to-[#0D6CFF]">
        {/* Logo */}
        <div className="flex flex-col items-center  pr-5 py-2">
          <img src="1.png" alt="logo" className="w-12 h-12 " />
          <h1 className=" text-white text-lg font-inter font-extrabold uppercase">
            K I T A H U B
          </h1>
        </div>

        {/* Hamburger Menu */}
      </div>

      {/* --- Desktop view (notification, user info, options) --- */}
      <div className="hidden sm:flex items-center gap-4 w-full justify-end  px-8 p-3">
        {/* Notification */}
        <button className="relative">
          <Bell className="w-5 h-5 text-yellow-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
            1
          </span>
        </button>

        {/* User info */}
        <div className="flex items-center gap-2">
          {/* Profile image */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="stu.jpg"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="font-medium text-sm">Maya Thompson</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>

        {/* More options */}
        <button>
          <MoreVertical className="w-5 h-5 text-purple-500" />
        </button>
      </div>
    </div>
  );
}
