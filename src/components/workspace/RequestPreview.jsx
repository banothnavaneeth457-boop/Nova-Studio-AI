function RequestPreview({
  prompt,
  outputType,
  style,
  ratio,
  duration,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        🤖 Nova AI Request
      </h2>

      <div className="space-y-4 text-lg">

        <p>
          <span className="font-semibold text-purple-400">
            Prompt:
          </span>{" "}
          {prompt || "No prompt entered"}
        </p>

        <p>
          <span className="font-semibold text-purple-400">
            Output:
          </span>{" "}
          {outputType}
        </p>

        <p>
          <span className="font-semibold text-purple-400">
            Style:
          </span>{" "}
          {style}
        </p>

        <p>
          <span className="font-semibold text-purple-400">
            Aspect Ratio:
          </span>{" "}
          {ratio}
        </p>

        <p>
          <span className="font-semibold text-purple-400">
            Duration:
          </span>{" "}
          {duration}
        </p>

        <p className="text-green-400 font-semibold">
          ✅ Ready to Generate
        </p>

      </div>

    </div>
  );
}

export default RequestPreview;