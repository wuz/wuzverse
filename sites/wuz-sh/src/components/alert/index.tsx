import type { ReactNode } from "react";

type AlertProps = {
	children: ReactNode;
};

const Alert = ({ children }: AlertProps) => {
	return <div className="bg-brand/20 text-brand p-4 rounded-small">{children}</div>;
};

export default Alert;
