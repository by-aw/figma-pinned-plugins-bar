import Prototype from "../../assets/figma/prototype.svg?react";
import Rename from "../../assets/figma/rename.svg?react";
import Replace from "../../assets/figma/replace.svg?react";
import Action from "./Action";
export default function AllTab() {
  return (
    <div>
      <Action name="Make a prototype" icon={Prototype} />
      <Action name="Rename layers" icon={Rename} />
      <Action name="Replace content" icon={Replace} />
    </div>
  );
}
