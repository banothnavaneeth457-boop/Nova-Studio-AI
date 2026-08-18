import { useState } from "react";

import PromptEditor from "../components/workspace/PromptEditor";
import ReferenceCharacter from "../components/workspace/ReferenceCharacter";
import StyleSelector from "../components/workspace/StyleSelector";
import AspectRatio from "../components/workspace/AspectRatio";
import DurationSelector from "../components/workspace/DurationSelector";
import OutputType from "../components/workspace/OutputType";
import Watermark from "../components/workspace/Watermark";
import GenerateButton from "../components/workspace/GenerateButton";

export default function Workspace() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [ratio, setRatio] = useState("9:16");
  const [duration, setDuration] = useState("30 sec");
  const [outputType, setOutputType] = useState("Image");
  const [loading, setLoading] = useState(false);
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter what you want Nova to create.");
      return;
    }

    setLoading(true);
    setEnhancedPrompt("");
    setGeneratedImage(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/enhance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            style,
            ratio,
            duration,
            outputType,
          }),
        }
      );

      const data = await response.json();

      console.log("Nova Response:", data);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Nova generation failed"
        );
      }

      setEnhancedPrompt(data.prompt || "");

      // ==========================================
      // DISPLAY GENERATED IMAGE
      // ==========================================

      if (data.image?.data) {
        const mimeType =
          data.image.mimeType || "image/png";

        const imageSrc =
          `data:${mimeType};base64,${data.image.data}`;

        setGeneratedImage(imageSrc);

        console.log(
          "✅ Nova image received and displayed."
        );
      } else {
        console.warn(
          "Nova response did not contain an image."
        );
      }

    } catch (error) {
      console.error("Nova Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">

      <PromptEditor
        prompt={prompt}
        setPrompt={setPrompt}
      />

      <ReferenceCharacter />

      <StyleSelector
        style={style}
        setStyle={setStyle}
      />

      <div className="grid grid-cols-2 gap-6">

        <AspectRatio
          ratio={ratio}
          setRatio={setRatio}
        />

        <DurationSelector
          duration={duration}
          setDuration={setDuration}
        />

      </div>

      <div className="grid grid-cols-2 gap-6">

        <OutputType
          outputType={outputType}
          setOutputType={setOutputType}
        />

        <Watermark />

      </div>

      <GenerateButton
        onGenerate={handleGenerate}
        loading={loading}
      />

      {/* ==========================================
          GENERATED IMAGE
          ========================================== */}

      {generatedImage && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">

          <h2 className="text-2xl font-bold mb-4 text-white">
            ✨ Nova Generated Image
          </h2>

          <div className="flex justify-center">

            <img
              src={generatedImage}
              alt="Nova generated"
              className="max-w-full max-h-[700px] rounded-xl object-contain"
            />

          </div>

        </div>
      )}

      {enhancedPrompt && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">

          <h2 className="text-2xl font-bold mb-4 text-white">
            ✨ Nova Enhanced Prompt
          </h2>

          <p className="text-zinc-300 leading-7">
            {enhancedPrompt}
          </p>

        </div>
      )}

    </div>
  );
}