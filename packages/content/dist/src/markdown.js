import * as cheerio from "cheerio";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import remarkCustomHeaderId from "remark-custom-header-id";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationWordHighlight, transformerMetaHighlight, transformerMetaWordHighlight, } from "@shikijs/transformers";
import { transformerTwoslash } from "@shikijs/twoslash";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { match } from "ts-pattern";
// ── Shiki options ────────────────────────────────────────────────────────────
export const shikiOptions = {
    theme: "rose-pine-moon",
    transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
        transformerTwoslash({ explicitTrigger: true }),
    ],
};
// ── TTRPG directives remark plugin ──────────────────────────────────────────
export function ttrpgDirectives() {
    return (tree, file) => {
        visit(tree, (node) => {
            if (node.type === "containerDirective" ||
                node.type === "leafDirective" ||
                node.type === "textDirective") {
                match(node)
                    .with({ name: "statblock" }, () => {
                    var _a;
                    node.data = (_a = node.data) !== null && _a !== void 0 ? _a : {};
                    const attributes = node.attributes || {};
                    if (node.type === "textDirective")
                        file.fail("Unexpected `:statblock` text directive, use two colons for a leaf directive", node);
                    node.data.hName = "div";
                    node.data.hProperties = { class: "statblock", id: attributes.id };
                })
                    .with({ name: "fu-content" }, () => {
                    var _a;
                    node.data = (_a = node.data) !== null && _a !== void 0 ? _a : {};
                    const attributes = node.attributes || {};
                    if (node.type === "textDirective")
                        file.fail("Unexpected `:callout` text directive, use two colons for a leaf directive", node);
                    node.data.hName = "div";
                    node.data.hProperties = { class: "fabula-ultima", id: attributes.id };
                })
                    .with({ name: "details" }, () => {
                    var _a;
                    node.data = (_a = node.data) !== null && _a !== void 0 ? _a : {};
                    const attributes = node.attributes || {};
                    node.data.hName = "details";
                    node.data.hProperties = { id: attributes.id };
                })
                    .with({ name: "summary" }, () => {
                    var _a;
                    node.data = (_a = node.data) !== null && _a !== void 0 ? _a : {};
                    const attributes = node.attributes || {};
                    node.data.hName = "summary";
                    node.data.hProperties = { id: attributes.id };
                })
                    .with({ name: "callout" }, () => {
                    var _a;
                    node.data = (_a = node.data) !== null && _a !== void 0 ? _a : {};
                    const attributes = node.attributes || {};
                    if (node.type === "textDirective")
                        file.fail("Unexpected `:callout` text directive, use two colons for a leaf directive", node);
                    node.data.hName = "div";
                    node.data.hProperties = { class: "callout", id: attributes.id };
                });
            }
        });
    };
}
/**
 * Converts markdown to HTML with the shared wuz pipeline:
 * remark-parse → GFM → frontmatter → custom-header-id → [directives] → rehype → [shiki] → stringify
 * Wraps top-level elements with --stagger custom property for CSS animations.
 */
export async function markdownToHtml(markdown, options = {}) {
    const { stagger = true, ttrpg = true, highlight = true } = options;
    const processor = unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkGfm)
        .use(remarkCustomHeaderId);
    if (ttrpg) {
        processor.use(remarkDirective).use(ttrpgDirectives);
    }
    processor.use(remarkRehype);
    if (highlight) {
        processor.use(rehypeShiki, shikiOptions);
    }
    processor.use(rehypeStringify);
    const file = await processor.process(markdown);
    if (!stagger) {
        return String(file);
    }
    const $ = cheerio.load(String(file));
    const html = $("body > *")
        .map((i, elem) => {
        $(elem).attr("style", `--stagger: ${i};`);
        return $.html(elem);
    })
        .toArray()
        .join("\n");
    return html;
}
//# sourceMappingURL=markdown.js.map