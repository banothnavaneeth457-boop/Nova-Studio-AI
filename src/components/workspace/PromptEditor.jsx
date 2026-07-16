function PromptEditor() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Prompt
      </h2>

      <textarea
        rows={8}
        placeholder="Describe what you want Nova to create..."
        className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-purple-500 resize-none"
      />
    </div>
  );
}

export default PromptEditor;