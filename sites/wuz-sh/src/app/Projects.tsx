import { Heading } from "@/components/type";

const Projects = () => {
	return (
		<div>
			<Heading level="3">Projects</Heading>
			<Heading level="4" className="mt-4">
				Tech
			</Heading>
			<ul>
				<li>
					<a href="https://github.com/wuz/prst">prst</a> &mdash; Nix configuration for Darwin and
					beyond
				</li>
				<li>
					<a href="https://github.com/wuz/cantrip.nvim">cantrip.nvim</a> &mdash; Neovim + dark magic
				</li>
				<li>
					<a href="https://dmpad.app">dmpad</a> &mdash; A note taking application for dungeon
					masters.
				</li>
			</ul>
			<Heading level="4">Games</Heading>
			<ul>
				<li>
					<a href="https://infinite-citadel.com">Infinite Citadel</a> &mdash; Side business,
					creating tabletop roleplaying games
				</li>
			</ul>
		</div>
	);
};

export default Projects;
