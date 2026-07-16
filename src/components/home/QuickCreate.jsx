function QuickCreate() {
  const items = [
    "🎬 Reel",
    "🖼 Image",
    "🎥 Video",
    "🎨 Logo",
    "🎙 Voice",
    "📱 Instagram",
  ];

  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        ⚡ Quick Create
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <button
            key={item}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-xl hover:border-purple-500 hover:scale-105 transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuickCreate;