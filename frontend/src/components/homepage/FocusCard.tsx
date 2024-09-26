import React from "react";

const FocusCard = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-violet-300 to-purple-300 rounded-3xl p-12">
      <p className="font-semibold text-white text-2xl">Evening Night Out</p>
      <p className=" text-white text-lg italic">with JPM Colleagues</p>
      <p className="font-bold text-white text-7xl mt-6">$378.99</p>
      <div className="flex gap-2 mt-8">
        <button className="bg-violet-800 rounded-3xl p-3">
          <p className="text-white">Split Now</p>
        </button>
        <button className="bg-white rounded-3xl p-3">
          <p className="text-violet-900">All Outstanding Bills</p>
        </button>
      </div>
    </div>
  );
};

export default FocusCard;
