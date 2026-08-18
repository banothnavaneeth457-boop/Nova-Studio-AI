export default function Topbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-[#09090B] flex items-center justify-between px-8">
      <h2 className="text-white text-2xl font-bold">
        Nova Studio AI
      </h2>

      <input
        placeholder="Search..."
        className="w-80 rounded-xl bg-white/5 px-4 py-2 outline-none text-white border border-white/10"
      />

      <div className="text-white font-medium">
        Credits: 100
      </div>
    </header>
  );
}