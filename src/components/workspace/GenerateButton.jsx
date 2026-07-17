function GenerateButton({ onGenerate }) {
  return (
    <button
      onClick={onGenerate}
      className="w-full mt-8 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-2xl py-5 text-xl font-bold"
    >
      ✨ Generate with Nova
    </button>
  );
}

export default GenerateButton;