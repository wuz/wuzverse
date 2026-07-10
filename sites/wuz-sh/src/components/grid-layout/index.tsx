import type { ReactNode } from "react";

type ChildrenProps = {
	children: ReactNode;
};

export const GridLayout = ({ children }: ChildrenProps) => {
	return (
		<div className="grid w-full max-w-full gap-6 grid-cols-[30%_50px_1fr_50px] max-md:grid-cols-1">
			{children}
		</div>
	);
};

export const GridLeft = ({ children }: ChildrenProps) => {
	return <div className="col-[1] max-md:col-[1]">{children}</div>;
};

export const GridRight = ({ children }: ChildrenProps) => {
	return <div className="col-[3] max-md:col-[1]">{children}</div>;
};

export const GridBreakout = ({ children }: ChildrenProps) => {
	return <div className="col-[2_/_span_4] max-md:col-[1]">{children}</div>;
};

export const GridFull = ({ children }: ChildrenProps) => {
	return <div className="col-[1_/_span_4] max-md:col-[1]">{children}</div>;
};
