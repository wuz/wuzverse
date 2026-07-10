import { Heading } from "@/components/type";
import Link from "next/link";

const WorkHistory = () => {
	return (
		<div>
			<Heading level="3">Work History</Heading>
			<ul className="mt-4">
				<li>
					<Link href="https://whatnot.com">Whatnot</Link> &mdash; Senior Frontend Engineer
				</li>
				<li>
					<Link href="https://roll20.net">Roll20</Link> &mdash; Contract Frontend Engineer
				</li>
				<li>
					<Link href="https://payscale.com">Payscale</Link> &mdash; Tech Lead Manager
				</li>
				<li>
					<Link href="https://www.linkedin.com/company/getagora/">Agora</Link> &mdash; Senior
					Software Engineer
				</li>
				<li>
					<Link href="https://hackerrank.com">HackerRank</Link> &mdash; Senior Software Engineer
				</li>
				<li>
					<Link href="https://www.linkedin.com/company/lesson-ly">Lessonly</Link> &mdash; Software
					Engineer
				</li>
				<li>
					<Link href="https://www.linkedin.com/company/mimirhq">Mimir</Link> &mdash; Founding
					Engineer
				</li>
			</ul>
		</div>
	);
};

export default WorkHistory;
