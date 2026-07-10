"use client";
import { SiLastdotfm } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { LastFmTrack } from "./actions";

async function fetchNowPlaying(): Promise<LastFmTrack | null> {
	try {
		const res = await fetch("/api/now-playing");
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
}

export default function LastFmNowPlaying() {
	const [track, setTrack] = useState<LastFmTrack | null>(null);
	const interval = useRef<ReturnType<typeof setInterval>>(null);

	useEffect(() => {
		fetchNowPlaying().then(setTrack);
		interval.current = setInterval(() => fetchNowPlaying().then(setTrack), 60_000);
		return () => {
			if (interval.current) clearInterval(interval.current);
		};
	}, []);

	if (!track) return null;

	return (
		<Link
			href={track.url}
			target="_blank"
			rel="noreferrer"
			aria-label={`Now playing: ${track.name} by ${track.artist["#text"]}`}
			className="inline-flex items-center gap-2 no-underline"
		>
			<SiLastdotfm className="shrink-0" size={16} />
			<span className="truncate">
				<span className="font-medium font-mono">{track.name}</span>
				{" — "}
				<span className="opacity-70 font-emphasis">{track.artist["#text"]}</span>
			</span>
		</Link>
	);
}
