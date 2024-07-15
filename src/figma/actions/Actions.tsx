import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useState } from "react";
import Search from "../../assets/figma/search.svg?react";
import AllTab from "./AllTab";
import AssetsTab from "./AssetsTab";
import PluginsTab from "./PluginsTab";
import TabBar from "./TabBar";

export default function Actions() {
  const tabs = [
    { index: 0, name: "All", content: <AllTab /> },
    { index: 1, name: "Assets", content: <AssetsTab /> },
    { index: 2, name: "Plugins & widgets", content: <PluginsTab /> },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].index);
  const [prevTab, setPrevTab] = useState(tabs[0].index);
  const direction = selectedTab < prevTab ? 1 : -1;
  const pageTransition: Transition = {
    type: "linear",
    duration: 0.125,
  };
  const variants: Variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };
  return (
    <motion.div className="mb-2 flex flex-col gap-2 figma-bar h-[242px] p-2 pb-0 rounded-[13px] bg-background outline-black/[0.9] overflow-clip">
      <div className="items-center h-8 w-full flex gap-1 bg-secondary rounded-[5px] has-[:focus]:ring-2">
        <Search className="" />
        <input
          className="h-full w-full bg-transparent outline-none text-sm"
          placeholder="Search"
        />
      </div>
      <TabBar
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setPrevTab={setPrevTab}
      />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          transition={pageTransition}
          variants={variants}
          custom={direction}
          initial={prevTab !== selectedTab ? "enter" : "center"}
          animate="center"
          exit="exit"
          key={selectedTab}
          className="overflow-scroll"
        >
          {tabs.find((tab) => tab.index === selectedTab)?.content}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
