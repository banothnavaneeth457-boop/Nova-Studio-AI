export default function Card({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 shadow-lg">
      {title && (
        <h2 className="text-lg font-semibold text-white mb-5">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}