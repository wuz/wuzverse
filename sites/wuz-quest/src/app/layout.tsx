import type { Metadata } from "next";
import LocalFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/recursive";
import "@fontsource-variable/source-code-pro";
import "./globals.css";
import { Verse } from "@wuz/ui";
import type { CSSProperties } from "react";
import Newsletter from "@/components/Newsletter";
import Octothorpes from "@/components/Octothorpes";
import RouteTracker from "@/components/RouteTracker";
import Logo from "./Logo";

const redaction = LocalFont({
  src: "../fonts/Redaction_35-Italic.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Has Been Wizard",
  description: "TTRPG ramblings and ravings from a once-wizard",
  metadataBase: new URL("https://wuz.quest"),
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={
        { "--font-redaction": redaction.style.fontFamily } as CSSProperties
      }
    >
      <head>
        <Octothorpes />
      </head>
      <body className="antialiased">
        <Verse currentSite="quest" />
        <RouteTracker />
        <div className="font-body max-w-[80ch] w-screen p-8 orchestration">
          <header
            className="space-y-4 text-foreground-faded hover:text-foreground transition-colors"
            style={{ "--stagger": 1 } as CSSProperties}
          >
            <nav className="flex items-center justify-between gap-2">
              <h1 className="font-bold">
                <Link href="/" className="flex items-center gap-2">
                  <Logo />
                  <span className="font-emphasis">Has Been Wizard</span>
                </Link>
              </h1>
            </nav>
            HBW is a blog by <em>Conlin Durbin</em>, a TTRPG designer and
            co-owner at{" "}
            <Link href="https://infinite-citadel.com">Infinite Citadel</Link>.{" "}
            <Link href="https://www.twitch.tv/hasbeenwizards/">
              Twitch streamer
            </Link>
            . Most of his games are available at{" "}
            <Link href="https://infinite-citadel.com">IC</Link>, but you can
            also find a few on <Link href="https://wuz.itch.io">Itch</Link>.
          </header>
          <main
            className="my-8 border-y-1 border-y-shadow-aura py-8"
            style={{ "--stagger": 2 } as CSSProperties}
          >
            {children}
          </main>
          <footer
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 text-center gap-8 md:gap-4 text-foreground-faded hover:text-foreground transition-colors"
            style={{ "--stagger": 3 } as CSSProperties}
          >
            <div className="md:text-left space-y-2">
              <Newsletter />
            </div>

            <div className="md:text-center space-y-2">
              <h3 className="font-emphasis font-semibold">
                Find me on the web
              </h3>
              <ul>
                <li>
                  <Link href="https://www.tiktok.com/@hasbeenwizard">
                    Tiktok
                  </Link>
                </li>
                <li>
                  <Link href="https://bsky.app/profile/wuz.quest">Bluesky</Link>
                </li>
                <li>
                  <Link href="https://instagram.com/hasbeenwizard">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:text-right space-y-2">
              <h3 className="font-emphasis font-semibold">My Games</h3>
              <ul>
                <li>
                  <Link href="https://morksol.com">Mörk Sol</Link>
                </li>
              </ul>
              <div className="flex flex-col items-end gap-2">
                <h3 className="font-emphasis font-semibold">
                  Friends & Communities
                </h3>
                <Link href="https://octothorp.es">
                  <Image
                    src="https://octothorp.es/badge.png"
                    alt="Badge for the Octothorpes main ring"
                    width={88}
                    height={31}
                    unoptimized
                  />
                </Link>
                <h3 className="font-emphasis font-semibold">TTRPG Webring</h3>
                <ul className="flex gap-4 items-center justify-center md:justify-end">
                  <li>
                    <Link href="https://webri.ng/webring/ttrpg/previous?via=https%3A%2F%2Fwuz.quest">
                      Prev
                    </Link>
                  </li>
                  <li>
                    <Link href="https://webri.ng/webring/ttrpg/random?via=https%3A%2F%2Fwuz.quest">
                      Random
                    </Link>
                  </li>
                  <li>
                    <Link href="https://webri.ng/webring/ttrpg/next?via=https%3A%2F%2Fwuz.quest">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
