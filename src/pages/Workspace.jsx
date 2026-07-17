import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import PromptEditor from "../components/workspace/PromptEditor";
import ReferenceCharacter from "../components/workspace/ReferenceCharacter";
import OutputType from "../components/workspace/OutputType";
import StyleSelector from "../components/workspace/StyleSelector";
import AspectRatio from "../components/workspace/AspectRatio";
import DurationSelector from "../components/workspace/DurationSelector";
import Watermark from "../components/workspace/Watermark";
import GenerateButton from "../components/workspace/GenerateButton";

function Workspace() {
  const [prompt, setPrompt] = useState("");
  const [outputType, setOutputType] = useState("Image");
  const [style, setStyle] = useState("Realistic");
  const [ratio, setRatio] = useState("9:16");
  const [duration, setDuration] = useState("30 sec");

  const handleGenerate = () => {
    const request = {
      prompt,
      outputType,
      style,
      ratio,
      duration,
    };

    console.log(request);
    alert("Nova request created! Check the browser console.");
  };

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
          <PromptEditor
            prompt={prompt}
            setPrompt={setPrompt}
          />

          <ReferenceCharacter />

          <OutputType
            outputType={outputType}
            setOutputType={setOutputType}
          />

          <StyleSelector
            style={style}
            setStyle={setStyle}
          />

          <AspectRatio
            ratio={ratio}
            setRatio={setRatio}
          />

          <DurationSelector
            duration={duration}
            setDuration={setDuration}
          />

          <Watermark />

          <GenerateButton
            onGenerate={handleGenerate}
          />
        </div>
      </main>
    </div>
  );
}

export default Workspace;