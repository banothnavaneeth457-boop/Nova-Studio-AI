function GenerateButton({ onGenerate, loading }) {
  return (
    <button
      onClick={onGenerate}
      disabled={loading}
      className={`w-full mt-8 rounded-2xl py-5 text-lg font-bold text-white
        border border-purple-400/30
        shadow-xl shadow-purple-900/20
        transition-all duration-300
        ${
          loading
            ? "bg-zinc-700/80 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 hover:scale-[1.01] hover:shadow-purple-500/30"
        }`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-3">
          <span className="animate-spin">◌</span>
          Nova is creating...
        </span>
      ) : (
        "✨ Generate with Nova"
      )}
    </button>
  );
}

export default GenerateButton;