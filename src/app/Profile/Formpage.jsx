"use client";
import React, { useState } from "react";
import { Search, Filter, Pin, Check, MessageCircle, Heart } from "lucide-react";

const postsData = [
  {
    id: 1,
    title: "Welcome! 👋",
    pinned: true,
    category: "General",
    author: "Scott Maxwell",
    time: "4h",
    content:
      "This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...",
  },
  {
    id: 2,
    title: "Medieval History.",
    pinned: false,
    category: "General",
    author: "Scott Maxwell",
    time: "4h",
    content:
      "This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...",
  },
  {
    id: 3,
    title: "Medieval History.",
    pinned: false,
    category: "General",
    author: "Scott Maxwell",
    time: "4h",
    content:
      "This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...",
  },
  {
    id: 4,
    title: "Medieval History.",
    pinned: false,
    category: "General",
    author: "Scott Maxwell",
    time: "4h",
    content:
      "This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels. In order to have a result that is...",
  },
];

export default function ForumPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white h-screen flex flex-col">
      {/* Search + Filter */}
      <div className="flex items-center mb-4 gap-2">
        <div className="flex flex-1 bg-white border rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 focus:outline-none"
          />
          <button className="bg-blue-600 p-2 flex items-center justify-center">
            <Search className="text-white w-5 h-5" />
          </button>
        </div>
        <button
          onClick={() => setFilterActive(!filterActive)}
          className="p-2 border rounded-lg"
        >
          <Filter className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Scrollable cards */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-hide">
        {/* Pinned Section */}
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-2">
            <Pin className="w-4 h-4 text-red-500 rotate-45" /> Pinned
          </h3>
          {filteredPosts
            .filter((p) => p.pinned)
            .map((post) => (
              <div
                key={post.id}
                className="bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-100"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-gray-900">
                    {post.title}
                  </h4>
                  <Pin className="text-red-500 w-4 h-4 rotate-45" />
                </div>
                <p className="text-gray-600 text-sm mt-2">{post.content}</p>
                <div className="flex gap-2 mt-3 flex-wrap text-xs">
                  <span className="bg-white text-blue-600 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className=" bg-white text-gray-600 px-2 py-1">
                    {post.author}
                  </span>
                  <span className=" bg-white text-gray-500 px-2 py-1">
                    {post.time}
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* This Week Section */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">This Week</h3>
          {filteredPosts
            .filter((p) => !p.pinned)
            .map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-1">
                    ❓ {post.title}
                  </h4>
                  <Check className="text-green-500 w-4 h-4" />
                </div>
                <p className="text-gray-600 text-sm mt-2">{post.content}</p>
                <div className="flex justify-between items-center mt-3 text-xs">
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-600 px-2 py-1 bg-blue-200">
                      {post.author}
                    </span>
                    <span className="text-gray-500 px-2 py-1 bg-blue-200">
                      {post.time}
                    </span>
                  </div>
                  <div className="flex gap-4 text-gray-500">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" /> 5
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" /> 8
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
