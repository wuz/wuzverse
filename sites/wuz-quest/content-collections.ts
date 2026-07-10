import { defineCollection, defineConfig } from "@content-collections/core";
import { markdownToHtml } from "@wuz/content";
import { z } from "zod";

const posts = defineCollection({
	name: "posts",
	directory: "_posts",
	include: "**/*.md",
	schema: z.object({
		title: z.string(),
		excerpt: z.string().optional(),
		date: z.string(),
		tags: z.string().optional(),
		reddit: z.string().optional(),
		preview: z.boolean().optional(),
		content: z.string(),
	}),
	transform: async (document) => {
		const html = await markdownToHtml(document.content);
		return {
			...document,
			slug: document._meta.path.replace(/\.md$/, ""),
			html,
		};
	},
});

export default defineConfig({
	content: [posts],
});
