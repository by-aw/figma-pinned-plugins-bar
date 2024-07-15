import { motion } from "framer-motion";
import { useRef } from "react";
import Adjustments from "../assets/figma/adjustments.png";
import Smile from "../assets/figma/smile.svg?react";
import WindowX from "../assets/figma/windowx.svg?react";

export default function FigmaWindow({
  setWindow,
}: {
  setWindow: React.Dispatch<
    React.SetStateAction<null | { name: string; icon: string }>
  >;
}) {
  const dragConstraint = useRef(null);
  return (
    <div ref={dragConstraint} className="w-full h-full top-0 left-0 absolute">
      <motion.div
        drag
        dragConstraints={dragConstraint}
        className="figma-window absolute z-30 w-[240px] rounded-[13px] bg-background overflow-clip"
      >
        <div className="">
          <section className="flex gap-2 text-white items-center p-1 pl-3 pr-1.5 h-[40px] bg-[#2c2c2c]">
            <img src={Adjustments} className="w-4 h-4 rounded-[25%]" />
            <span className="text-xs font-medium w-full">Adjustments</span>
            <div
              onClick={() => setWindow(null)}
              className="rounded-[5px] w-6 h-6 flex items-center justify-center hover:bg-white/5"
            >
              <WindowX className="w-6 h-3" />
            </div>
          </section>
          <div className="h-[240px] flex flex-col gap-2 items-center justify-center bg-white text-black">
            <Smile className="opacity-50 w-16 h-16" />
            <h1 className="opacity-50 text-xl cursor-pointer hover:opacity-100">
              Just a demo
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
