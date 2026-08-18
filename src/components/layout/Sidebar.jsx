import {
  Sparkles,
  FolderOpen,
  Users,
  Image,
  Settings,
} from "lucide-react";

const items = [
  { icon: Sparkles, label: "Create" },
  { icon: FolderOpen, label: "Projects" },
  { icon: Image, label: "Gallery" },
  { icon: Users, label: "Community" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] border-r border-white/10 flex flex-col">

      <div className="p-6 border-b border-white/10">

        <h1 className="text-2xl font-bold text-white">
          ✨ NOVA
        </h1>

        <p className="text-gray-400 text-sm">
          Studio AI
        </p>

      </div>

      <div className="flex-1 p-4">

        {items.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-gray-300 hover:bg-blue-600/20 hover:text-white transition mb-2"
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}

      </div>

    </aside>
  );
}