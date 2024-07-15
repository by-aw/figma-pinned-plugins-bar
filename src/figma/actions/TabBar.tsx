import { motion } from "framer-motion";
import React, { useState } from "react";
import More from "../../assets/figma/more.svg?react";

export default function TabBar({
  tabs,
  selectedTab,
  setSelectedTab,
  setPrevTab,
}: {
  tabs: { index: number; name: string; content: React.ReactNode }[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  setPrevTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [hoverTab, setHoverTab] = useState(tabs[0].index);
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <label
          key={tab.name}
          onMouseEnter={() => setHoverTab(tab.index)}
          onMouseLeave={() => setHoverTab(selectedTab)}
          className="relative inline-flex items-center rounded-[5px] h-6  cursor-pointer"
        >
          <input
            onChange={() => {
              setPrevTab(selectedTab);
              setSelectedTab(tab.index);
            }}
            checked={selectedTab == tab.index}
            type="checkbox"
            className="hidden peer"
          />
          {hoverTab == tab.index && (
            <motion.span
              transition={{ type: "spring", bounce: 0.2, duration: 0.25 }}
              layoutId="bubble"
              className="w-full h-full absolute rounded-[5px] bg-secondary"
            />
          )}
          <span className="z-10 px-2 text-xs select-none opacity-50 peer-[:checked]:opacity-100">
            {tab.name}
          </span>
        </label>
      ))}
      <div className="ml-auto h-6 px-2 pr-0 border border-secondary rounded-[5px] flex items-center">
        <span className="text-xs select-none">All</span>
        <More />
      </div>
    </div>
  );
}
