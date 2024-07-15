import Bookmark from "../../assets/figma/bookmark.svg?react";

export default function Action({
  name,
  icon,
  bookmarked,
  subtext,
}: {
  name: string;
  icon: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  bookmarked?: boolean;
  subtext?: string;
}) {
  return (
    <div className="hover:bg-secondary p-1 gap-2 flex items-center rounded-[5px]">
      {typeof icon == "string" && (
        <img
          onDragStart={(e) => {
            e.dataTransfer.setData("text", JSON.stringify({ name, icon }));
          }}
          draggable={true}
          className="h-6 w-6"
          src={icon}
        />
      )}
      {typeof icon == "function" &&
        // @ts-ignore
        icon()}

      <span className="text-sm">{name}</span>
      {bookmarked && (
        <div className="h-6 w-6 ml-auto flex justify-center items-center hover:bg-secondary rounded-[5px]">
          <Bookmark />
        </div>
      )}
      {subtext && <span className="ml-auto text-xs">{subtext}</span>}
    </div>
  );
}
