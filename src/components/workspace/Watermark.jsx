import Card from "../common/Card";

function Watermark() {
  return (
    <Card title="Watermark">

      <input
        type="text"
        placeholder="Leave empty for no watermark..."
        className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-purple-500"
      />

    </Card>
  );
}

export default Watermark;