import GitHub from "../assets/github.svg?react";
import X from "../assets/x.svg?react";
import IconLink from "./IconLink";

export default function Footer() {
  return (
    <footer className="absolute bottom-4 right-4 flex gap-2 items-center">
      <IconLink href="https://github.com/by-aw/figma-pinned-plugins-bar">
        <GitHub className="w-6 h-6" />
      </IconLink>
      <IconLink href="https://x.com/@byallwhite">
        <X className="w-6 h-6" />
      </IconLink>
    </footer>
  );
}
