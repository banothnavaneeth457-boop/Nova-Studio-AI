import Card from "../common/Card";

function StyleSelector({ style, setStyle }) {
  const styles = [
    "Realistic",
    "Cinematic",
    "Pixar",
    "Anime",
    "3D",
    "Ghibli",
  ];

  return (
    <Card title="Style">

      <div className="flex flex-wrap gap-4">

        {styles.map((item) => (

          <button
            key={item}
            onClick={() => setStyle(item)}
            className={`px-6 py-3 rounded-xl transition-all duration-300 border font-semibold
            ${
              style === item
                ? "bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/30 scale-105"
                : "bg-black border-zinc-700 hover:border-purple-500 hover:scale-105"
            }
            `}
          >
            {item}
          </button>

        ))}

      </div>

    </Card>
  );
}

export default StyleSelector;