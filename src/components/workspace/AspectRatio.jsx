function AspectRatio() {
  const ratios = [
    "9:16",
    "16:9",
    "1:1",
    "4:5",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Aspect Ratio
      </h2>

      <div className="flex gap-3 flex-wrap">
        {ratios.map((ratio) => (
          <button
            key={ratio}
            className="px-6 py-3 rounded-xl bg-black border border-zinc-700 hover:border-purple-500 transition"
          >
            {ratio}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AspectRatio;