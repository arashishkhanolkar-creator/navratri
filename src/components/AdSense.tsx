export default function AdSense() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return null;

  // Plain <script>, not next/script — AdSense's own site-verification check
  // looks for this tag literally inside <head>...</head>, and next/script's
  // "afterInteractive" strategy injects into <body> instead, which failed
  // verification.
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
