import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import PromptEditor from "../components/workspace/PromptEditor";
import OutputType from "../components/workspace/OutputType";
import StyleSelector from "../components/workspace/StyleSelector";
import AspectRatio from "../components/workspace/AspectRatio";
import DurationSelector from "../components/workspace/DurationSelector";
import Watermark from "../components/workspace/Watermark";
import GenerateButton from "../components/workspace/GenerateButton";

function Workspace() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Topbar />

        <h1 className="text-4xl font-bold mt-8">
          AI Workspace
        </h1>

        <p className="text-zinc-400 mt-2">
          Create amazing AI content from a single prompt.
        </p>

        <div className="mt-8">
          <PromptEditor />
          <OutputType />
          <StyleSelector />
          <AspectRatio />
          <DurationSelector />
          <Watermark />
          <GenerateButton />
        </div>

      </main>
    </div>
  );
}

export default Workspace;