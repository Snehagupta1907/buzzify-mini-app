"use client";
import Post from "../../../components/Post";
import Tabs from "../../../components/Tabs";
import React, { useState } from "react";

const CreatorsPage = () => {
  const [selectedTab, setSelectedTab] = useState("pools");

  const renderContent = () => {
    switch (selectedTab) {
      case "pools":
        return (
          <div className="grid grid-cols-2 gap-4">
            {/* Example Pool Posts */}
            <Post
              image="https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              title="Pool 1"
              betsPlaced={25}
              totalAmount="$500"
              endDate="2024-11-20"
              status="live"
            />
            {/* Repeat for other pools */}
          </div>
        );
      case "highlights":
        return (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Engagement Highlights</h3>
            <div className="bg-gray-200 h-48 rounded-lg shadow-md flex items-center justify-center">
              Graph Placeholder
            </div>
          </div>
        );
      case "stats":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">History Stats</h3>
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Engagement</th>
                  <th className="border border-gray-300 p-2">Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">2024-11-10</td>
                  <td className="border border-gray-300 p-2">5,000</td>
                  <td className="border border-gray-300 p-2">+10%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2024-11-11</td>
                  <td className="border border-gray-300 p-2">6,000</td>
                  <td className="border border-gray-300 p-2">+15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 pb-[100px]">
      {/* Profile Section */}
      <div className="text-center mb-6 space-y-4">
        <img
          src="https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Creator"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold">Creator Name</h2>
        

        {/* Wallet Address */}
        <p className="text-gray-500 text-xs">Wallet Address: 0x123...456</p>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-2">
          Passionate about gaming and NFTs. Join my community to stay updated!
        </p>

        {/* Follower and Following Counts */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="text-sm">
            <p className="font-semibold">10K</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">120</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>

        {/* Highlight Div for Last Pool Score */}
        {/* <div className="mt-4">
          <h3 className="text-lg font-semibold">Last Pool Score</h3>
          <div className="bg-gray-200 h-20 rounded-lg shadow-md flex items-center justify-center">
            Last pool score: 10K
          </div>
        </div> */}
      </div>

      {/* Tabs */}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div>{renderContent()}</div>
    </div>
  );
};

export default CreatorsPage;
