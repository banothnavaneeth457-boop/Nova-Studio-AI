import Card from "../common/Card";

function OutputType({ outputType, setOutputType }) {
  const options = [
    "Image",
    "Reel",
    "Video",
    "Voice",
  ];

  return (
    <Card title="Output Type">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {options.map((item) => (
          <button
            key={item}
            onClick={() => setOutputType(item)}
            className={`rounded-xl p-5 transition-all duration-300 border text-lg font-semibold ${
              outputType === item
                ? "bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/30 scale-105"
                : "bg-black border-zinc-700 hover:border-purple-500 hover:scale-105"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

    </Card>
  );
}

export default OutputType;