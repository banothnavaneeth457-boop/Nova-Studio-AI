function DurationSelector({ duration, setDuration }) {
  const durations = [
    "15 sec",
    "30 sec",
    "60 sec",
    "Custom",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Duration
      </h2>

      <div className="flex flex-wrap gap-4">

        {durations.map((item) => (

          <button
            key={item}
            onClick={() => setDuration(item)}
            className={`px-8 py-4 rounded-xl border transition-all duration-300 font-semibold

            ${
              duration === item
                ? "bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/30 scale-105"
                : "bg-black border-zinc-700 hover:border-purple-500 hover:scale-105"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}

export default DurationSelector;