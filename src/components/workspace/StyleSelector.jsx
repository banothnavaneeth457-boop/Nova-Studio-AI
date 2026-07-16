function StyleSelector() {
  const styles = [
    "Realistic",
    "Cinematic",
    "Pixar",
    "Anime",
    "3D",
    "Ghibli",
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Style
      </h2>

      <div className="flex flex-wrap gap-3">
        {styles.map((style) => (
          <button
            key={style}
            className="px-5 py-3 rounded-xl bg-black border border-zinc-700 hover:border-purple-500 transition"
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;