function Features() {
  const features = [
    {
      icon: "🎬",
      title: "AI Reel Generator",
      description: "Create viral reels in seconds."
    },
    {
      icon: "🖼️",
      title: "AI Image Generator",
      description: "Generate stunning AI images."
    },
    {
      icon: "🎥",
      title: "AI Video Generator",
      description: "Turn ideas into cinematic videos."
    },
    {
      icon: "🎙️",
      title: "AI Voice Generator",
      description: "Create natural AI voices."
    },
    {
      icon: "👤",
      title: "Character Studio",
      description: "Keep your character consistent."
    },
    {
      icon: "✨",
      title: "Prompt Enhancer",
      description: "Improve prompts automatically."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center">
        Everything You Need
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-16">
        One platform for all your AI creativity.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
          >

            <div className="text-5xl mb-6">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;