const STORAGE_KEY = "garbago_saved_events";
const CHANGE_EVENT = "garbago-saved-change";

function keyFor(city: string, slug: string): string {
  return `${city}/${slug}`;
}

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function write(keys: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // localStorage unavailable (private browsing etc.) — saving silently no-ops
  }
}

export function isSaved(city: string, slug: string): boolean {
  return read().includes(keyFor(city, slug));
}

export function toggleSaved(city: string, slug: string): boolean {
  const key = keyFor(city, slug);
  const current = read();
  const next = current.includes(key)
    ? current.filter((k) => k !== key)
    : [...current, key];
  write(next);
  return next.includes(key);
}

export function getSavedKeys(): string[] {
  return read();
}

export function onSavedChange(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
