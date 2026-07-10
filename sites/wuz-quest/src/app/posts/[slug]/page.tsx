import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { FaReddit } from "react-icons/fa";

export default async function Post({ params }: Params) {
  const post = getPostBySlug((await params).slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <link rel="octo:octothorpes" href="ttrpg" />
      <div className="space-y-4 orchestration">
        {post.reddit && (
          <Link
            href={post.reddit}
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaReddit /> Join the Discussion on Reddit
          </Link>
        )}
        {post.formattedDate && (
          <time className="font-mono text-sm text-foreground-faded">
            {post.formattedDate}
          </time>
        )}
        <h1 className="font-emphasis font-bold text-3xl uppercase">
          {post.title}
        </h1>
        <div
          className="markdown orchestration"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized by remark/rehype pipeline
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} - Has Been Wizard`;

  return {
    title,
    description: post.excerpt ?? "",
    openGraph: {
      title,
      description: post.excerpt ?? "",
      type: "article",
      url: `https://wuz.quest/posts/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
