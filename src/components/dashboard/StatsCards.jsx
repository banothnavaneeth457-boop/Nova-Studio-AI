import { FolderOpen, Video, Image, Clock } from "lucide-react";

function StatsCards() {
  const stats = [
    {
      title: "Projects",
      value: "24",
      icon: FolderOpen,
    },
    {
      title: "Videos",
      value: "156",
      icon: Video,
    },
    {
      title: "Images",
      value: "830",
      icon: Image,
    },
    {
      title: "Hours Saved",
      value: "42",
      icon: Clock,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {stats.map((card) => (
        <div
          key={card.title}
          className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500 transition-all"
        >
          <card.icon className="text-purple-500 mb-4" size={30} />

          <h2 className="text-zinc-400">{card.title}</h2>

          <p className="text-4xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;