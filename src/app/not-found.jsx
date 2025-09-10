"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
      {/* Heading */}
      <h1 className="text-9xl font-bold text-blue-100 mb-9">Opps</h1>
      <p className="text-gray-500 text-lg mb-8">Page Not Found</p>

      {/* 404 Illustration (3 images side by side) */}
      <div className="flex items-center justify-center  mb-10">
        <div className="relative  md:w-[160px] md:h-[240px] lg:w-[220px] lg:h-[280px]  w-[120px] h-[180px]">
          <Image
            src="/4.png" // <-- First image placeholder
            alt="4 Illustration"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative md:w-[160px] md:h-[240px] lg:w-[220px] lg:h-[280px]  w-[120px] h-[180px]">
          <Image
            src="/0.png" // <-- Middle 0 image placeholder
            alt="0 Illustration"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative md:w-[160px] md:h-[240px] lg:w-[220px] lg:h-[280px]  w-[120px] h-[180px]">
          <Image
            src="/4..png" // <-- Last 4 image placeholder
            alt="4 Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white  shadow hover:bg-blue-700 transition"
      >
        Go To Homepage
      </Link>
    </div>
  );
}
