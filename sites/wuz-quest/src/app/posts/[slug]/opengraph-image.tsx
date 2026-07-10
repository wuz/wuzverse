import { headers } from "next/headers";
import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image({ params: { slug } }: { params: { slug: string } }) {
	const h = await headers();
	const host = h.get("host");
	const proto = h.get("x-forwarded-proto");
	const post = getPostBySlug(slug);
	if (!post) {
		return null;
	}

	const baseUrl = `${proto}://${host}`;

	const commitMono = await fetch(new URL(`${baseUrl}/fonts/CommitMono-400-Regular.woff`)).then(
		(res) => res.arrayBuffer(),
	);

	return new ImageResponse(
		<div
			style={{
				color: "white",
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: 32,
				background: "black",
				position: "relative",
			}}
		>
			<img
				alt=""
				style={{
					opacity: 0.5,
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					objectFit: "cover",
					width: "100vw",
					objectPosition: "center center",
				}}
				src={`${baseUrl}/post-images/${post.slug}/og.jpg`}
			/>
			<h1
				style={{
					textTransform: "uppercase",
				}}
			>
				{post.title}
			</h1>
			{post.excerpt && <h2>{post.excerpt}</h2>}
			<div
				style={{
					background: "#ec4899",
					padding: 16,
					fontWeight: "bold",
				}}
			>
				wuz.quest
			</div>
		</div>,
		{
			...size,
			fonts: [
				{
					name: "Inter",
					data: commitMono,
				},
			],
		},
	);
}
