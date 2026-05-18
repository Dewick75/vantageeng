import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Vantage Engineering | Precision Integrated Systems",
  description: "We deliver high-precision engineering solutions across Sri Lanka, merging advanced automation with structural integrity for commercial and industrial excellence.",
  keywords: [
    "Vantage Engineering",
    "Industrial Automation",
    "PLC Programming",
    "Smart Home Sri Lanka",
    "CCTV Security Systems",
    "Panel Fabrication Colombo",
    "IoT Energy Monitoring",
    "Electrical Engineering Sri Lanka"
  ],
  authors: [{ name: "Vantage Engineering" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback if localStorage is disabled
                }
              })()
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-on-background font-body-md text-body-md overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
