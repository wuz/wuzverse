import { GridBreakout, GridLayout, GridLeft, GridRight, GridFull } from "@/components/grid-layout";
import Image from "next/image";
import walkaway from "./walkaway.png";
import AutoGrid from "@/components/auto-grid";
import Header from "@/components/header";
import WorkHistory from "../WorkHistory";
import Projects from "../Projects";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<GridLayout>
					<GridLeft>
						<div className="flow">
							<h1>Tools I'm using</h1>
							<h2>and what I like about them</h2>
						</div>
					</GridLeft>
					<GridRight>
						<div className="flow">
							<h3>Nix</h3>
							<p></p>
							<h3>Neovim</h3>
							<p></p>
							<h3>NextJS</h3>
							<p></p>
							<h3>vanilla-extract</h3>
							<p></p>
							<h3>Apollo GraphQL</h3>
							<p></p>
						</div>
					</GridRight>
					<GridFull>
						<AutoGrid>
							<div>
								<h3>Socials</h3>
								<ul>
									<li>
										<a href="https://linkedin.com/in/wuz">LinkedIn</a>
									</li>
									<li>
										<a href="https://dev.to/wuz">dev.to</a>
									</li>
									<li>
										<a href="https://github.com/wuz">Github</a>
									</li>
									<li>
										<a href="https://twitter.com/itswuz">Twitter / X</a>
									</li>
									<li>
										<a href="https://bsky.app/profile/lich.dad">bluesky</a>
									</li>
								</ul>
							</div>
							<Projects />
							<WorkHistory />
						</AutoGrid>
					</GridFull>
				</GridLayout>
			</main>
		</>
	);
}
