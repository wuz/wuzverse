import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkWrapProse from "@webpro/remark-wrap-prose";

export default {
	plugins: [remarkFrontmatter, remarkGfm, remarkDirective, [remarkWrapProse, { width: 120 }]],
	settings: {
		bullet: "-",
		emphasis: "_",
		strong: "*",
		fence: "`",
		fences: true,
		listItemIndent: "one",
	},
};
