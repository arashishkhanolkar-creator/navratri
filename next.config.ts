import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Event poster images come from organizer/ticketing sites we curate in
    // src/data/events.ts (not user input), so a broad allowlist is fine here.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
