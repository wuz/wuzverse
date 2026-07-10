import { getNowPlaying } from "@wuz/ui/lastfm";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
	const apiKey = process.env.LASTFM_API_KEY;
	if (!apiKey) return NextResponse.json(null);

	const track = await getNowPlaying(apiKey);
	return NextResponse.json(track);
}
