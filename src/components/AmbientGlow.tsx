export default function AmbientGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div className="ambient-orb w-96 h-96 bg-blue-200/50 -top-20 -left-20 animate-pulse" />
      <div className="ambient-orb w-[500px] h-[500px] bg-indigo-200/40 top-[20%] -right-24" />
      <div className="ambient-orb w-96 h-96 bg-purple-200/35 top-[55%] left-10" />
      <div className="ambient-orb w-[600px] h-[600px] bg-blue-100/60 top-[75%] right-10" />
    </div>
  );
}
