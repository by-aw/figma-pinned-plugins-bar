import { cx } from "class-variance-authority";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Actions from "../assets/figma/actions.svg?react";
import Comments from "../assets/figma/comments.svg?react";
import Cursor from "../assets/figma/cursor.svg?react";
import Dev from "../assets/figma/dev.svg?react";
import Frame from "../assets/figma/frame.svg?react";
import Pen from "../assets/figma/pen.svg?react";
import Rectangle from "../assets/figma/rectangle.svg?react";
import Text from "../assets/figma/text.svg?react";
import X from "../assets/figma/x.svg?react";
import "./Figma.css";
import { FigmaButton } from "./FigmaButton";

export function FigmaBar({
  actionsShown,
  setActionsShown,
  setWindow,
}: {
  actionsShown: boolean;
  setActionsShown: React.Dispatch<React.SetStateAction<boolean>>;
  setWindow: React.Dispatch<
    React.SetStateAction<null | { name: string; icon: string }>
  >;
}) {
  const [selectedIcon, setSelectedIcon] = useState<string>("Cursor");
  const [devMode, setDevMode] = useState(false);
  const [dragging, setDragging] = useState(false);
  const items = [
    { name: "Cursor", icon: <Cursor />, more: true },
    { name: "Frame", icon: <Frame />, more: true },
    { name: "Rectangle", icon: <Rectangle />, more: true },
    { name: "Pen", icon: <Pen />, more: true },
    { name: "Text", icon: <Text /> },
    { name: "Comments", icon: <Comments /> },
    {
      name: "Actions",
      icon: <Actions />,
      onClick: () => setActionsShown((current) => !current),
    },
  ];
  const [pinnedItems, setPinnedItems] = useState<
    { name: string; icon: string }[]
  >([]);
  useEffect(() => {
    if (!actionsShown) setSelectedIcon("");
  }, [actionsShown]);
  useEffect(() => {
    if (selectedIcon !== "Actions") setActionsShown(false);
  }, [selectedIcon]);
  const [selectedItem, setSelectedItem] = useState("");
  const changeSelectedIcon = (name: string) => {
    setSelectedIcon(name);
  };
  const toggleSelectedItem = (name: string) => {
    setSelectedItem((current) => {
      if (current === name) return "";
      return name;
    });
  };
  const toggleDevMode = () => {
    setDevMode(!devMode);
  };
  return (
    <motion.div
      layout
      transition={{ duration: 0.1 }}
      onDragEnter={(e) => {
        e.preventDefault();
        console.log("enter");
        setDragging(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        console.log("over");
        setDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        console.log("leave");
        setDragging(false);
      }}
      onDragEnd={(e) => {
        e.preventDefault();
        console.log("end");
        setDragging(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        const item = JSON.parse(data);
        setDragging(false);
        if (pinnedItems.find((i) => i.name === item.name)) return;
        setPinnedItems((current) => {
          return [...current, { name: item.name, icon: item.icon }];
        });
        console.log("drop", data);
      }}
      className="figma-bar h-12 flex px-2 gap-2 items-center rounded-[13px] bg-background outline-black/[0.9] w-max "
    >
      {items.map((item) => (
        <FigmaButton
          selected={selectedIcon === item.name}
          key={item.name}
          onClick={() => {
            changeSelectedIcon(item.name);
            item.onClick && item.onClick();
          }}
          more={item.more}
        >
          {item.icon}
        </FigmaButton>
      ))}
      <div className="h-full w-[1px] bg-white opacity-10" />
      <motion.div
        style={{
          width: dragging || pinnedItems.length > 0 ? "max-content" : "0px",
        }}
        className="flex gap-2 items-center h-full"
      >
        {pinnedItems.map((item) => (
          <div className="relative group" key={item.name}>
            <FigmaButton
              secondary
              selected={selectedItem === item.name}
              key={item.name}
              onClick={() => {
                toggleSelectedItem(item.name);
                selectedItem === item.name
                  ? setWindow(null)
                  : setWindow({ name: item.name, icon: item.icon });
              }}
            >
              <img src={item.icon} alt={item.name} />
            </FigmaButton>
            {selectedItem === item.name && (
              <div
                onClick={() => {
                  toggleSelectedItem(item.name);
                  setPinnedItems((current) => {
                    return current.filter((i) => i.name !== item.name);
                  });
                }}
                className="figma-bar group-hover:block hidden absolute top-0 left-[60%] bg-secondary hover:bg-secondaryHover rounded-full"
              >
                <X className="w-5 h-5 opacity-80" />
              </div>
            )}
          </div>
        ))}
        {dragging && <div className="w-8 h-8 bg-secondary rounded-[5px]" />}
        <div className="h-full w-[1px] bg-white opacity-10" />
      </motion.div>
      <div
        onClick={toggleDevMode}
        className={cx(
          "rounded-[5px] w-[38px] h-[22px] flex",
          devMode
            ? "bg-devMode hover:bg-devModeHover"
            : "bg-secondary hover:bg-secondaryHover"
        )}
      >
        <motion.div
          layout
          transition={{ duration: 0.1 }}
          className={cx(
            "dev-mode bg-background rounded-[5px] w-[22px] h-[22px]",
            devMode ? "ml-auto" : "mr-auto"
          )}
        >
          <Dev />
        </motion.div>
      </div>
    </motion.div>
  );
}
