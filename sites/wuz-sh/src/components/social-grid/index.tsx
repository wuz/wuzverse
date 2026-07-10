import Link from "next/link";
import {
	SiGithub,
	SiTwitch,
	SiBluesky,
	SiDevdotto,
	SiLetterboxd,
	SiLastdotfm,
	SiThreads,
	SiInstagram,
	SiFlickr,
} from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { Heading } from "@/components/type";
import type { ReactNode } from "react";

const SocialLink = ({
	href,
	label,
	children,
}: {
	href: string;
	label?: string;
	children: ReactNode;
}) => (
	<li>
		<Link href={href} target="_blank" rel="noreferrer" aria-label={label}>
			{children}
		</Link>
	</li>
);

const SocialGrid = () => {
	return (
		<div>
			<Heading level="3">Around the Web</Heading>
			<div className="space-y-4 mt-4">
				<div className="grid grid-cols-[auto_1fr] gap-2">
					<Heading level="4">Work</Heading>
					<ul className="grid grid-cols-5 items-center">
						<SocialLink href="https://github.com/wuz" label="GitHub">
							<SiGithub />
						</SocialLink>
						<SocialLink href="https://linkedin.com/in/wuz" label="LinkedIn">
							<FaLinkedin />
						</SocialLink>
						<SocialLink href="https://dev.to/wuz" label="Dev.to">
							<SiDevdotto />
						</SocialLink>
					</ul>
					<Heading level="4">Socials</Heading>
					<ul className="grid grid-cols-5 items-center">
						<SocialLink href="https://bsky.app/profile/wuz.quest" label="Bluesky profile">
							<SiBluesky />
						</SocialLink>
						<SocialLink href="https://twitch.tv/hasbeenwizard" label="Twitch profile">
							<SiTwitch />
						</SocialLink>
						<SocialLink href="https://threads.net/hasbeenwizard" label="Threads profile">
							<SiThreads />
						</SocialLink>
						<SocialLink href="https://instagram.com/hasbeenwizard" label="Instagram profile">
							<SiInstagram />
						</SocialLink>
						<SocialLink href="https://www.flickr.com/photos/192700574@N03/" label="Flickr profile">
							<SiFlickr />
						</SocialLink>
					</ul>
					<Heading level="4">Stats &amp; Reviews</Heading>
					<ul className="grid grid-cols-5 items-center">
						<SocialLink href="https://letterboxd.com/wuz/" label="Letterboxd">
							<SiLetterboxd />
						</SocialLink>
						<SocialLink href="https://www.last.fm/user/hasbeenwizard" label="Last.fm">
							<SiLastdotfm />
						</SocialLink>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SocialGrid;
