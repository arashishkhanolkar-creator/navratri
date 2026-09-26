"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import EventCard from "@/components/EventCard";
import { getAllEvents } from "@/lib/events";
import { getSavedKeys, onSavedChange } from "@/lib/saved";

export default function SavedPage() {
  const [savedKeys, setSavedKeys] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Same hydration-safe pattern as SaveButton — localStorage only exists
    // client-side, so this has to run post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSavedKeys(getSavedKeys());
    setHydrated(true);
    return onSavedChange(() => setSavedKeys(getSavedKeys()));
  }, []);

  const savedEvents = getAllEvents().filter((e) =>
    savedKeys.includes(`${e.city}/${e.slug}`)
  );

  return (
    <div className="px-4 py-4 md:px-8 md:py-6 lg:px-10">
      <h1 className="text-xl font-extrabold">Saved Events</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
        Tap the bookmark icon on any event to save it here — stored only on
        this device.
      </p>

      {!hydrated ? null : savedEvents.length === 0 ? (
        <div
          className="mt-8 flex flex-col items-center gap-3 rounded-[20px] py-14 text-center"
          style={{ background: "var(--surface)", boxShadow: "var(--card-shadow)" }}
        >
          <Bookmark size={28} style={{ color: "var(--muted)" }} />
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            No saved events yet.
          </p>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
          {savedEvents.map((event) => (
            <EventCard key={`${event.city}-${event.slug}`} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
