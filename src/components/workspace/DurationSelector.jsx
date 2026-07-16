function DurationSelector() {
  const durations = [
    "15 sec",
    "30 sec",
    "60 sec",
    "Custom",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Duration
      </h2>

      <div className="flex gap-3 flex-wrap">
        {durations.map((duration) => (
          <button
            key={duration}
            className="px-6 py-3 rounded-xl bg-black border border-zinc-700 hover:border-purple-500 transition"
          >
            {duration}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DurationSelector;