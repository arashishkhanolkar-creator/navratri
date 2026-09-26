export default function DateBadge({
  startDate,
  size = "md",
}: {
  startDate: string;
  size?: "sm" | "md";
}) {
  const date = new Date(startDate);
  const day = date.toLocaleDateString("en-IN", { day: "2-digit" });
  const month = date.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();

  const dims = size === "sm" ? "h-11 w-11" : "h-14 w-14";
  const dayText = size === "sm" ? "text-sm" : "text-lg";
  const monthText = size === "sm" ? "text-[9px]" : "text-[10px]";

  return (
    <div
      className={`flex ${dims} shrink-0 flex-col items-center justify-center rounded-xl text-white`}
      style={{ background: "linear-gradient(160deg, var(--primary), var(--accent))" }}
    >
      <span className={`${monthText} font-semibold leading-none tracking-wide opacity-90`}>
        {month}
      </span>
      <span className={`${dayText} font-bold leading-none`}>{day}</span>
    </div>
  );
}
