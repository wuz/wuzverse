import type { Root } from "mdast";
import type { VFile } from "vfile";
export declare const shikiOptions: {
    theme: string;
    transformers: import("shiki").ShikiTransformer[];
};
export declare function ttrpgDirectives(): (tree: Root, file: VFile) => void;
export interface MarkdownToHtmlOptions {
    /** Add --stagger CSS custom property to each top-level element. Default: true. */
    stagger?: boolean;
    /** Include TTRPG directive support. Default: true. */
    ttrpg?: boolean;
    /** Apply syntax highlighting via Shiki. Default: true. */
    highlight?: boolean;
}
/**
 * Converts markdown to HTML with the shared wuz pipeline:
 * remark-parse → GFM → frontmatter → custom-header-id → [directives] → rehype → [shiki] → stringify
 * Wraps top-level elements with --stagger custom property for CSS animations.
 */
export declare function markdownToHtml(markdown: string, options?: MarkdownToHtmlOptions): Promise<string>;
//# sourceMappingURL=markdown.d.ts.map