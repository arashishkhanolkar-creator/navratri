"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { isSaved, toggleSaved, onSavedChange } from "@/lib/saved";

export default function SaveButton({
  city,
  slug,
  size = 16,
  variant = "overlay",
  containerSize = 32,
}: {
  city: string;
  slug: string;
  size?: number;
  variant?: "overlay" | "plain";
  containerSize?: number;
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // localStorage isn't available during SSR, so the saved state can only
    // be read after mount — the resulting one-frame flash is intentional
    // and unavoidable for this hydration-safe pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(isSaved(city, slug));
    return onSavedChange(() => setSaved(isSaved(city, slug)));
  }, [city, slug]);

  const isOverlay = variant === "overlay";
  const iconColor = isOverlay ? "#ffffff" : "var(--accent)";

  return (
    <button
      type="button"
      aria-label={saved ? "Remove from saved" : "Save event"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setSaved(toggleSaved(city, slug));
      }}
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: containerSize,
        height: containerSize,
        ...(isOverlay
          ? { background: "rgba(0,0,0,0.4)" }
          : { background: "var(--surface)", boxShadow: "var(--card-shadow)" }),
      }}
    >
      <Bookmark
        size={size}
        color={iconColor}
        fill={saved ? iconColor : "none"}
        strokeWidth={2}
      />
    </button>
  );
}
