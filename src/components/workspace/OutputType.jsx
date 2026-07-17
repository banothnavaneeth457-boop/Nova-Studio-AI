function OutputType({ outputType, setOutputType }) {
  const options = [
    "Image",
    "Reel",
    "Video",
    "Voice",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        Output Type
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {options.map((item) => (

          <button
            key={item}
            onClick={() => setOutputType(item)}
            className={`rounded-xl p-5 transition-all duration-300 border text-lg font-semibold

            ${
              outputType === item
                ? "bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/30 scale-105"
                : "bg-black border-zinc-700 hover:border-purple-500 hover:scale-105"
            }
            `}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}

export default OutputType;