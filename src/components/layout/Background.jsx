export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-70 grid-overlay" />

      {/* glow blobs */}
      <div
        className="absolute -left-40 -top-44 h-520px w-520px rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.55), transparent 60%)",
          animation: "floaty 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-40 top-24 h-560px w-560px rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(34,197,94,0.55), transparent 62%)",
          animation: "floaty 8.5s ease-in-out infinite",
        }}
      />

      {/* bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/55 to-transparent" />
    </div>
  );
}
