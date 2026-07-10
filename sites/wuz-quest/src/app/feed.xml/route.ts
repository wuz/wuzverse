import { getAllPosts } from "@/lib/posts";
import RSS from "rss";
import { metadata } from "../layout";
import { NextResponse } from "next/server";

export async function GET() {
	const posts = getAllPosts();
	const site_url =
		process.env.NODE_ENV === "production" ? "https://wuz.quest" : "http://localhost:3000";

	const feedOptions = {
		title: metadata.title?.toString() ?? "Has Been Wizards",
		description: metadata.description ?? "TTRPG ramblings and ravings from a once-wizard",
		site_url: site_url,
		feed_url: `${site_url}/feed.xml`,
		image_url: `${site_url}/logo.svg`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}`,
	};

	const feed = new RSS(feedOptions);

	// Add each individual post to the feed.
	posts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.excerpt,
			url: `${site_url}/posts/${post.slug}`,
			date: post.date,
		});
	});

	return new NextResponse(feed.xml({ indent: true }));
}
