function PromptEditor({ prompt, setPrompt }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Prompt
      </h2>

      <textarea
        rows={8}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want Nova to create..."
        className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none resize-none focus:border-purple-500"
      />
    </div>
  );
}

export default PromptEditor;