import { allPosts, type Post } from "content-collections";
import { compareDesc, format, isValid } from "date-fns";
import { Heading } from "../type";

const SinglePost = ({ post, date }: { post: Post; date: Date | null }) => {
	return (
		<li className="grid grid-cols-[auto_1fr] gap-4 items-center">
			{date && (
				<time dateTime={date.toISOString()} className="text-sm text-gray-haze font-mono">
					{format(date, "MMM d, yyyy")}
				</time>
			)}
			<a href={post.url}>{post.title}</a>
		</li>
	);
};

type PostsDisplayProps = {
	limit?: number;
};

export default async function PostsDisplay({ limit = 5 }: PostsDisplayProps) {
	const postsWithDates = allPosts
		.filter((post) => post.published && post.date)
		.map((post) => ({ post, date: new Date(post.date as string) }))
		.filter(({ date }) => isValid(date))
		.sort((a, b) => compareDesc(a.date, b.date))
		.slice(0, limit);

	return (
		<div className="flow">
			<Heading level="3">Recent Writing</Heading>
			<ul className="space-y-4 mt-4">
				{postsWithDates.map(({ post, date }) => (
					<SinglePost post={post} date={date} key={post._meta.path} />
				))}
			</ul>
		</div>
	);
}
