function Watermark() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">
        Watermark
      </h2>

      <input
        type="text"
        placeholder="Leave empty for no watermark..."
        className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-purple-500"
      />
    </div>
  );
}

export default Watermark;