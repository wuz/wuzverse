import { visit } from "unist-util-visit";
import type { Root } from "mdast";
import type { VFile } from "vfile";
import { match } from "ts-pattern";

function ttrpgDirectives() {
	return (tree: Root, file: VFile) => {
		visit(tree, (node) => {
			if (
				node.type === "containerDirective" ||
				node.type === "leafDirective" ||
				node.type === "textDirective"
			) {
				match(node)
					.with({ name: "statblock" }, () => {
						node.data = node.data ?? {};
						const data = node.data;
						const attributes = node.attributes || {};
						const id = attributes.id;

						if (node.type === "textDirective") {
							file.fail(
								"Unexpected `:statblock` text directive, use two colons for a leaf directive",
								node,
							);
						}

						data.hName = "div";
						data.hProperties = {
							class: "statblock",
							id,
						};
					})
					.with({ name: "fu-content" }, () => {
						node.data = node.data ?? {};
						const data = node.data;
						const attributes = node.attributes || {};
						const id = attributes.id;

						if (node.type === "textDirective") {
							file.fail(
								"Unexpected `:callout` text directive, use two colons for a leaf directive",
								node,
							);
						}

						data.hName = "div";
						data.hProperties = {
							class: "fabula-ultima",
							id,
						};
					})
					.with({ name: "details" }, () => {
						node.data = node.data ?? {};
						const data = node.data;
						const attributes = node.attributes || {};
						const id = attributes.id;

						data.hName = "details";
						data.hProperties = {
							id,
						};
					})
					.with({ name: "summary" }, () => {
						node.data = node.data ?? {};
						const data = node.data;
						const attributes = node.attributes || {};
						const id = attributes.id;

						data.hName = "summary";
						data.hProperties = {
							id,
						};
					})
					.with({ name: "callout" }, () => {
						node.data = node.data ?? {};
						const data = node.data;
						const attributes = node.attributes || {};
						const id = attributes.id;

						if (node.type === "textDirective") {
							file.fail(
								"Unexpected `:callout` text directive, use two colons for a leaf directive",
								node,
							);
						}

						data.hName = "div";
						data.hProperties = {
							class: "callout",
							id,
						};
					});
			}
		});
	};
}

export default ttrpgDirectives;
