import type { ReactNode } from "react";

type ContentGridProps = {
	children: ReactNode;
};

const ContentGrid = ({ children }: ContentGridProps) => {
	return <main className="content-grid grid grid-cols-[1fr_min(60ch,100%)_1fr]">{children}</main>;
};

export default ContentGrid;
