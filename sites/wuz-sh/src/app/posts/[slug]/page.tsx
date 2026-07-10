// app/posts/[slug]/page.tsx
import ContentGrid from "@/components/content-grid";
import Header from "@/components/header";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Heading } from "@/components/type";
import { GridFull } from "@/components/grid-layout";
import AutoGrid from "@/components/auto-grid";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post._meta.path,
	}));
}

export async function generateMetadata(props: Props) {
	const params = await props.params;
	const post = allPosts.find((post) => post._meta.path === params.slug);

	if (!post?.content) return {};

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			images: post.coverImage && [
				{
					url: post.coverImage,
				},
			],
		},
	};
}

export default async function Page(props: Props) {
	const params = await props.params;
	const post = allPosts.find((post) => post._meta.path === params.slug);

	if (!post?.content) notFound();

	const date = post.date ? new Date(post.date) : null;

	return (
		<>
			<Header />
			<div className="flow">
				<ContentGrid>
					{post.coverImage && <img src={post.coverImage} alt={post.description} />}
					<Heading level="1">{post.title}</Heading>
					{date && (
						<time dateTime={date.toISOString()} className="mb-2 block text-xs text-gray-600">
							{format(date, "MMM d, yyyy")}
						</time>
					)}
					<MDXContent code={post.mdx} />
				</ContentGrid>
				<hr />
				<GridFull>
					<AutoGrid>
						<div>
							<Heading level="3">Socials</Heading>
							<ul>
								<li>
									<a href="https://linkedin.com/in/wuz">LinkedIn</a>
								</li>
								<li>
									<a href="https://dev.to/wuz">dev.to</a>
								</li>
								<li>
									<a href="https://github.com/wuz">Github</a>
								</li>
								<li>
									<a href="https://twitter.com/CaffeinatedLich">Twitter / X</a>
								</li>
								<li>
									<a href="https://bsky.app/profile/lich.dad">bluesky</a>
								</li>
							</ul>
						</div>
					</AutoGrid>
				</GridFull>
			</div>
		</>
	);
}
