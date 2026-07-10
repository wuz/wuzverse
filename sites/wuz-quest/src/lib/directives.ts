import { visit } from "unist-util-visit";
import type { Root, Nodes } from "mdast";
import type {
	ContainerDirective,
	LeafDirective,
	TextDirective,
} from "mdast-util-directive";
import type { VFile } from "vfile";
import { match } from "ts-pattern";

type DirectiveNode = ContainerDirective | LeafDirective | TextDirective;
type DirectiveRoot = Omit<Root, "children"> & {
	children: (Nodes | DirectiveNode)[];
};

function isDirectiveNode(node: Nodes | DirectiveNode): node is DirectiveNode {
	return (
		node.type === "containerDirective" ||
		node.type === "leafDirective" ||
		node.type === "textDirective"
	);
}

function ttrpgDirectives() {
	return (tree: Root, file: VFile) => {
		visit(tree as unknown as DirectiveRoot, (node) => {
			if (!isDirectiveNode(node as Nodes | DirectiveNode)) return;
			const directive = node as DirectiveNode;

			match(directive)
				.with({ name: "statblock" }, () => {
					directive.data = directive.data ?? {};
					const data = directive.data as Record<string, unknown>;
					const attributes = directive.attributes || {};
					const id = attributes.id;

					if (directive.type === "textDirective") {
						file.fail(
							"Unexpected `:statblock` text directive, use two colons for a leaf directive",
							directive,
						);
					}

					data.hName = "div";
					data.hProperties = { class: "statblock", id };
				})
				.with({ name: "fu-content" }, () => {
					directive.data = directive.data ?? {};
					const data = directive.data as Record<string, unknown>;
					const attributes = directive.attributes || {};
					const id = attributes.id;

					if (directive.type === "textDirective") {
						file.fail(
							"Unexpected `:callout` text directive, use two colons for a leaf directive",
							directive,
						);
					}

					data.hName = "div";
					data.hProperties = { class: "fabula-ultima", id };
				})
				.with({ name: "details" }, () => {
					directive.data = directive.data ?? {};
					const data = directive.data as Record<string, unknown>;
					const attributes = directive.attributes || {};
					const id = attributes.id;

					data.hName = "details";
					data.hProperties = { id };
				})
				.with({ name: "summary" }, () => {
					directive.data = directive.data ?? {};
					const data = directive.data as Record<string, unknown>;
					const attributes = directive.attributes || {};
					const id = attributes.id;

					data.hName = "summary";
					data.hProperties = { id };
				})
				.with({ name: "callout" }, () => {
					directive.data = directive.data ?? {};
					const data = directive.data as Record<string, unknown>;
					const attributes = directive.attributes || {};
					const id = attributes.id;

					if (directive.type === "textDirective") {
						file.fail(
							"Unexpected `:callout` text directive, use two colons for a leaf directive",
							directive,
						);
					}

					data.hName = "div";
					data.hProperties = { class: "callout", id };
				});
		});
	};
}

export default ttrpgDirectives;
