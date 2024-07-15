import Adjustments from "../../assets/figma/adjustments.png";
import Generator from "../../assets/figma/generator.png";
import GiffyCanvas from "../../assets/figma/giffycanvas.png";
import NoiseAndTexutre from "../../assets/figma/noiseandtexture.png";
import ToPath from "../../assets/figma/topath.png";
import Action from "./Action";

export default function PluginsTab() {
  const plugins = [
    {
      name: "Adjustments",
      icon: Adjustments,
      bookmarked: false,
    },
    {
      name: "Generator",
      icon: Generator,
      bookmarked: false,
    },
    {
      name: "Noise & Texture",
      icon: NoiseAndTexutre,
      bookmarked: false,
    },
    {
      name: "To Path",
      icon: ToPath,
      bookmarked: false,
    },
    {
      name: "GiffyCanvas",
      icon: GiffyCanvas,
      bookmarked: false,
    },
  ];
  return (
    <div className="flex flex-col gap-1">
      {plugins.map((plugin) => (
        <Action
          name={plugin.name}
          icon={plugin.icon}
          bookmarked={plugin.bookmarked}
        />
      ))}
    </div>
  );
}
