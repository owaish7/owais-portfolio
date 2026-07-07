import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://owais-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohammad Owais — Software Engineer",
  description:
    "Software Engineer @ Talendy (Tech Japan). I build search platforms that index a quarter-million jobs — and grind 1000+ competitive-programming problems for fun.",
  keywords: [
    "Mohammad Owais",
    "Software Engineer",
    "Competitive Programming",
    "Backend",
    "Search",
    "IIIT Jabalpur",
    "Talendy",
  ],
  authors: [{ name: "Mohammad Owais" }],
  openGraph: {
    title: "Mohammad Owais — Software Engineer",
    description:
      "Search infra by day, competitive programming by night. Talendy (Tech Japan) · IIIT Jabalpur.",
    url: SITE_URL,
    siteName: "Mohammad Owais",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mohammad Owais — Software Engineer",
    description:
      "Search infra by day, competitive programming by night. Talendy (Tech Japan) · IIIT Jabalpur.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

// Runs before paint to set the theme attribute and avoid a flash of the wrong theme.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
