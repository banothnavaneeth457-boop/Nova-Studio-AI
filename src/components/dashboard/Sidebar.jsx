import {
  House,
  Sparkles,
  FolderOpen,
  Users,
  Image,
  Music,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menu = [
    { icon: House, label: "Home" },
    { icon: Sparkles, label: "AI Workspace" },
    { icon: FolderOpen, label: "Projects" },
    { icon: Users, label: "Characters" },
    { icon: Image, label: "Assets" },
    { icon: Music, label: "Music" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-72 h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-2xl font-bold text-purple-500 mb-10">
        🌌 Nova Studio AI
      </h1>

      <div className="space-y-2">
        {menu.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-900 transition-all duration-200"
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;