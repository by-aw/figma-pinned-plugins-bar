import { cx } from "class-variance-authority";
import More from "../assets/figma/more.svg?react";

export function FigmaButton({
  children,
  onClick,
  selected,
  more,
  secondary,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  selected: boolean;
  more?: boolean;
  secondary?: boolean;
}) {
  return (
    <div className="flex">
      <div
        onClick={onClick}
        className={cx(
          "flex items-center justify-center p-[3px] my-2 h-8 w-8 rounded-[5px] ",
          secondary && selected
            ? "bg-secondary outline-1 outline outline-primary hover:opacity-80"
            : "",
          selected && !secondary
            ? "bg-primary text-white hover:opacity-80"
            : "hover:bg-secondary"
        )}
      >
        {children}
      </div>
      {more && (
        <div
          onClick={onClick}
          className={
            "relative p-[3px] my-2 h-8 w-4 hover:bg-secondary rounded-[5px] "
          }
        >
          <More className="m-auto absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" />
        </div>
      )}
    </div>
  );
}
