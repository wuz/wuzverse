import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/recursive";
import "@fontsource-variable/source-code-pro";
import "./tailwind.css";
import { Verse } from "@wuz/ui";
import localFont from "next/font/local";
import type { CSSProperties } from "react";
import Dither from "@/components/background";
import Favicon from "@/components/favicon";

const redaction = localFont({
	src: "../fonts/Redaction_35-Italic.woff2",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Conlin Durbin",
	description: "Senior Frontend Engineer. Typescripter. TTRPG-er",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" style={{ "--font-redaction": redaction.style.fontFamily } as CSSProperties}>
			<head>
				<Favicon />
				<Script
					defer
					data-domain="wuz.sh"
					src="https://plausible.io/js/script.js"
					strategy="afterInteractive"
				/>
			</head>
			<body>
				<Dither
					className="background"
					waveColor={[0.5, 0.5, 0.5]}
					enableMouseInteraction={true}
					mouseRadius={0.3}
					colorNum={4}
					waveAmplitude={0.3}
					waveFrequency={3}
					waveSpeed={0.05}
				/>
				<Verse currentSite="software" />
				<div className="content">{children}</div>
			</body>
		</html>
	);
}
