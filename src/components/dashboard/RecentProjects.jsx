import { Play, MoreVertical } from "lucide-react";

function RecentProjects() {
  const projects = [
    {
      title: "Krishna Story Reel",
      type: "AI Reel",
      updated: "2 hours ago",
    },
    {
      title: "Birthday Surprise Video",
      type: "AI Video",
      updated: "Yesterday",
    },
    {
      title: "Instagram Product Ad",
      type: "AI Image",
      updated: "3 days ago",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between hover:border-purple-500 transition"
          >
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>

              <p className="text-zinc-400 text-sm">
                {project.type} • {project.updated}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl flex items-center gap-2">
                <Play size={18} />
                Continue
              </button>

              <button className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;