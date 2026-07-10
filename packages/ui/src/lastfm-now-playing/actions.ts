const LASTFM_USER = "hasbeenwizard";
const LASTFM_API = "https://ws.audioscrobbler.com/2.0/";

export type LastFmTrack = {
	name: string;
	artist: { "#text": string };
	album: { "#text": string };
	url: string;
	"@attr"?: { nowplaying: string };
};

type LastFmResponse = {
	recenttracks?: {
		track: LastFmTrack[];
	};
};

export async function getNowPlaying(apiKey: string): Promise<LastFmTrack | null> {
	try {
		const res = await fetch(
			`${LASTFM_API}?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${apiKey}&format=json&limit=1`,
			{ next: { revalidate: 60 } },
		);
		if (!res.ok) return null;

		const data: LastFmResponse = await res.json();
		const track = data.recenttracks?.track?.[0];
		if (!track) return null;

		const isNowPlaying = track["@attr"]?.nowplaying === "true";
		return isNowPlaying ? track : null;
	} catch {
		return null;
	}
}
