function OutputType() {
  const outputs = [
    "🖼 Image",
    "🎬 Reel",
    "🎥 Video",
    "🎙 Voice",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Output Type
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {outputs.map((item) => (
          <button
            key={item}
            className="bg-black border border-zinc-700 hover:border-purple-500 rounded-xl py-4 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OutputType;