import Card from "../common/Card";

function PromptEditor({ prompt, setPrompt }) {
  return (
    <Card title="Prompt">

      <textarea
        rows={8}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want Nova to create..."
        className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none resize-none focus:border-purple-500"
      />

    </Card>
  );
}

export default PromptEditor;