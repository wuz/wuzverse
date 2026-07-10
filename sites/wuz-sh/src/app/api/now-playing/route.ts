import { getNowPlaying } from "@wuz/ui/lastfm";

export const runtime = "edge";

const json = (data: unknown, status = 200) =>
	new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});

export async function GET() {
	try {
		const apiKey = process.env.LASTFM_API_KEY;
		if (!apiKey) return json(null);

		const track = await getNowPlaying(apiKey);
		return json(track);
	} catch (err) {
		console.error("[now-playing] error:", err);
		return json(null, 500);
	}
}
