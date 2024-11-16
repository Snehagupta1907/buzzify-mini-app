import React from "react";
import { FiSearch } from "react-icons/fi";
import ExploreItem from "../../components/Resusable/Explore";

export default function Explore() {
  const creators = [
    {
      id: 1,
      name: "Creator 1",
      imageUrl: "/images/Banner-Buzzify.png",
      description: "Top trending creator",
      followers: 2000,
      platform: "twitter",
    },
    {
      id: 2,
      name: "Creator 2",
      imageUrl: "/images/Banner-Buzzify.png",
      description: "Rising star",
      followers: 1500,
      platform: "instagram",
    },
    {
      id: 3,
      name: "Creator 3",
      imageUrl: "/images/Banner-Buzzify.png",
      description: "Content creator",
      followers: 3000,
      platform: "youtube",
    },
  ];

  return (
    <div className="min-h-screen p-4 pb-[100px]">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-light-1">Explore</h1>
        <p className="text-light-3 text-sm">
          Discover trending posts and creators
        </p>
      </div>

      {/* Top Bar */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full max-w-lg relative">
          <FiSearch className="absolute left-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search creators or trends"
            className="w-full pl-10 py-2 rounded-lg bg-gray-800 text-white placeholder-white outline-none"
          />
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-7">
        {creators.map((creator) => (
          <ExploreItem
            key={creator.id}
            item={creator}
            type="creator"
            fields={[
              { label: "Description", key: "description" },
              { label: "Followers", key: "followers" },
            ]}
            buttonText="Bet on Creator"
            linkBase="/explore"
          />
        ))}
      </div>
    </div>
  );
}
