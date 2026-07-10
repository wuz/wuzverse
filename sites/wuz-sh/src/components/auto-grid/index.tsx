import type { ReactNode } from "react";

type AutoGridProps = {
	children: ReactNode;
};

const AutoGrid = ({ children }: AutoGridProps) => {
	return (
		<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">{children}</div>
	);
};

export default AutoGrid;
