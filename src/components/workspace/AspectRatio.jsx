function AspectRatio({ ratio, setRatio }) {
  const ratios = [
    "9:16",
    "16:9",
    "1:1",
    "4:5",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Aspect Ratio
      </h2>

      <div className="flex flex-wrap gap-4">

        {ratios.map((item) => (

          <button
            key={item}
            onClick={() => setRatio(item)}
            className={`px-8 py-4 rounded-xl border transition-all duration-300 font-semibold

            ${
              ratio === item
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

export default AspectRatio;