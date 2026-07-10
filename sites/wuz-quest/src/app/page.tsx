import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
	const posts = getAllPosts().filter((post) => !post.preview);
	return (
		<div className="space-y-6">
			<h1 className="font-emphasis font-bold text-2xl">Posts</h1>
			<ul className="space-y-4">
				{posts.map((post) => (
					<li className="grid grid-cols-[auto_1fr] gap-4 items-center" key={post.slug}>
						<time className="text-sm font-mono text-foreground-faded whitespace-nowrap">
							{post.formattedDate}
						</time>
						<Link href={`/posts/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
