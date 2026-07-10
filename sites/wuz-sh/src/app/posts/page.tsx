// app/posts/[slug]/page.tsx
import { GridLayout, GridLeft, GridRight } from "@/components/grid-layout";
import Header from "@/components/header";
import PostsDisplay from "@/components/posts-display";
import { allPosts } from "content-collections";

export async function generateStaticParams() {
	return allPosts
		.filter((post) => post.published)
		.map((post) => ({
			slug: post._meta.path,
		}));
}

export default async function Page() {
	return (
		<>
			<Header />
			<GridLayout>
				<GridLeft>A collection of things I&apos;ve written.</GridLeft>
				<GridRight>
					<PostsDisplay limit={undefined} />
				</GridRight>
			</GridLayout>
		</>
	);
}
