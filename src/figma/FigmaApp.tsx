/// <reference types="vite-plugin-svgr/client" />

import { useState } from "react";

import Actions from "./actions/Actions";
import { FigmaBar } from "./FigmaBar";
import FigmaWindow from "./FigmaWindow";
import Footer from "./Footer";

export default function FigmaApp() {
  const [actionsShown, setActionsShown] = useState(false);
  const [window, setWindow] = useState<null | { name: string; icon: string }>(
    null
  );
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {window && <FigmaWindow setWindow={setWindow} />}
      <div
        onClick={() => setActionsShown(false)}
        className="absolute top-0 left-0 w-full h-full opacity-10"
      />
      <section className="z-10">
        {actionsShown && <Actions />}
        <FigmaBar
          actionsShown={actionsShown}
          setActionsShown={setActionsShown}
          setWindow={setWindow}
        />
      </section>
      <Footer />
    </main>
  );
}
