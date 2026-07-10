"use client";
import { usePathname } from "next/navigation";

const Octothorpes = () => {
	const pathname = usePathname();
	return (
		<link
			rel="preload"
			as="fetch"
			href={`https://octothorp.es/?uri=https://wuz.quest${pathname}`}
		/>
	);
};

export default Octothorpes;
