import {
  Clapperboard,
  Image,
  Video,
  Mic,
  BookOpen,
  Music,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      title: "Create Reel",
      description: "Generate short AI reels",
      icon: Clapperboard,
    },
    {
      title: "Create Image",
      description: "Generate stunning AI images",
      icon: Image,
    },
    {
      title: "Create Video",
      description: "Generate cinematic AI videos",
      icon: Video,
    },
    {
      title: "Voice Over",
      description: "Create AI voiceovers",
      icon: Mic,
    },
    {
      title: "Story Generator",
      description: "Write amazing stories",
      icon: BookOpen,
    },
    {
      title: "Music Generator",
      description: "Generate background music",
      icon: Music,
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Quick Create</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {actions.map((action) => (
          <div
            key={action.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <action.icon className="text-purple-500 mb-4" size={36} />

            <h3 className="text-xl font-semibold">
              {action.title}
            </h3>

            <p className="text-zinc-400 mt-2">
              {action.description}
            </p>

            <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-3 transition">
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;