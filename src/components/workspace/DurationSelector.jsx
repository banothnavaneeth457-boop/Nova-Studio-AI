import Card from "../common/Card";

function DurationSelector({ duration, setDuration }) {
  const durations = [
    "15 sec",
    "30 sec",
    "60 sec",
    "Custom",
  ];

  return (
    <Card title="Duration">

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

    </Card>
  );
}

export default DurationSelector;