import { Bell, Search, UserCircle, Plus } from "lucide-react";

function Topbar() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
        <p className="text-zinc-400 mt-2">
          Ready to create something amazing today?
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl flex items-center gap-2 transition">
          <Plus size={20} />
          Create
        </button>

        <button className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800">
          <Search size={20} />
        </button>

        <button className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800">
          <Bell size={20} />
        </button>

        <button className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800">
          <UserCircle size={24} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;