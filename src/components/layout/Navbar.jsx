function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-purple-500">
        🌌 Nova Studio AI
      </h1>

      <div className="flex gap-8">
        <button>Home</button>
        <button>Features</button>
        <button>Learn</button>
        <button>Pricing</button>
      </div>

      <button className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700">
        Login
      </button>
    </nav>
  );
}

export default Navbar;