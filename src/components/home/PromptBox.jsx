function PromptBox() {
  return (
    <div className="mt-12 max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl">

      <textarea
        placeholder="✨ Describe what you want to create..."
        className="w-full h-36 bg-transparent outline-none text-lg resize-none text-white placeholder-gray-500"
      />

      <div className="flex justify-between items-center mt-6">

        <div className="flex gap-3">

          <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
            📎 Upload
          </button>

          <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
            🎤 Voice
          </button>

          <button className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
            ⚙ Settings
          </button>

        </div>

        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold">
          ✨ Create
        </button>

      </div>

    </div>
  );
}

export default PromptBox;