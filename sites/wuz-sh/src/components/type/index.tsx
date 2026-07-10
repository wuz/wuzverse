import { type ReactNode, createElement } from "react";
import clsx from "clsx";

type LeadProps = {
	children: ReactNode;
};

export const Lead = ({ children }: LeadProps) => {
	return <p className="text-2xl text-wrap-pretty max-w-[40ch]">{children}</p>;
};

type HeadingProps = {
	children: ReactNode;
	level?: "1" | "2" | "3" | "4" | "5" | "6";
	className?: string;
};

export const Heading = ({ children, level, className }: HeadingProps) => {
	const tagName = `h${level}`;
	return createElement(tagName, { className: clsx("font-redaction", className) }, children);
};
