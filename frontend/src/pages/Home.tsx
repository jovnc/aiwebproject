import FocusCard from "@/components/homepage/FocusCard";
import Sidebar from "@/components/nav/Sidebar";
import React from "react";

function Home() {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="flex flex-col px-12 w-full h-full">
        <FocusCard />
        <div className="h-full w-full"></div>
      </div>
    </div>
  );
}

export default Home;
