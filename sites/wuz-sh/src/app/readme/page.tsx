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
							<h1>Readme</h1>
							<h2>Get to know Conlin</h2>
						</div>
					</GridLeft>
					<GridRight>
						<div className="flow">
							<h3>About me</h3>
							<p>
								Hello there! I&apos;m Conlin (but some internet folks call me Wuz). I am a senior
								software engineer (with management experience).{" "}
								<strong>
									I&apos;m fascinated by the intersection of art, community and technology.
								</strong>
							</p>
							<p>
								I have about 1000 hobbies and I&apos;m always excited to learn new things. This
								README is my personal &quot;documentation&quot;, a way for you to get to know what I
								care about and where my focus is on any given day.
							</p>
							<h3>Personal Principles</h3>
							<ul>
								<li>
									<strong>Be a prism, not a mirror.</strong> Seek to digest and break apart
									information, not just pass it on to someone else.
								</li>

								<li>
									<strong>Optimize for consensus.</strong> Reject: kings, presidents, and voting.
									Believe in: rough consensus and exploratory tests.
								</li>
								<li>
									<strong>Mistakes are how we learn.</strong> Failure is an opportunity to learn
									something new.
								</li>
								<li>
									<strong>We all want to build a beautiful inn.</strong> Focus on mastery,
									cooperation, and better work over stats-fiddling and game-playing.
								</li>
							</ul>
						</div>
					</GridRight>
					<GridBreakout>
						<div style={{ height: 450, position: "relative" }}>
							<Image
								priority
								src={walkaway}
								alt="If you do things because you want someone else to pat you on the head, you won’t get as good at it as someone who does it for internal satisfaction. We want the best-possible building. If we set up a system that makes people compete for acknowledgment, we invite game-playing and stats-fiddling, even unhealthy stuff like working stupid hours to beat everyone. A crew full of unhappy people doing substandard work. If you build systems that make people focus on mastery, cooperation, and better work, we’ll have a beautiful inn full of happy people working together well."
								fill
								sizes="(min-width: 808px) 50vw, 100vw"
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</GridBreakout>
					<GridRight>
						<div className="flow">
							<h3>
								<a href="https://www.youtube.com/watch?v=r-dAO5OenO8">
									Let&apos;s do this one more time
								</a>
							</h3>
							<p>
								Alright, let&apos;s do this one more time. My name is Conlin Durbin and for the past
								11-ish years I&apos;ve been writing and thinking about code. I started programming
								in high school, building Wordpress websites and creating custom plugins in PHP.
							</p>
							<p>
								I went to college, studied Computer Science, hated it. I switched majors to
								Economics and did software development on the side and fell in love with the range
								of subjects that let me study.
							</p>
							<p>
								I started a company in college, turned it into a consultancy and eventually ended it
								when my business partner graduated. I helped grow and build a coworking space in an
								old church and met some awesome people.
							</p>
							<p>
								After college, I started working at a software company called Mimir in West
								Lafayette, building an application for compiling, running, and grading programming
								homework for college computer science classes. I jumped to Lessonly after that,
								worked on a ton of different products initiatives there - all focused around helping
								people learn and grow in their jobs. I left that job and spent a little over a year
								at HackerRank, which was... a good learning opportunity. After a bunch of
								experiences that pushed me towards looking for a new job, I left and started at a
								startup called Agora in July 2021! Agora was acquired by Payscale in 2022 and they
								unfortunately cut our product and team in 2023. After a couple months of job
								hunting, I am excited to be starting as a Senior Frontend Engineer at Whatnot!
							</p>
							<p>
								I live in Indianapolis, Indiana with my partner Annadele and our three dogs and
								cats. It&apos;s a pretty hectic household at times, but we love it. I love cooking
								and I love playing tabletop RPG&apos;s like Dungeons and Dragons. I even play weekly
								in a live-stream called Sunset over Vengalia.
							</p>
							<h3>Life by the accidents</h3>
							<blockquote>
								You learn about life by the accidents you have, over and over again
								<strong>Kurt Vonnegut</strong>
							</blockquote>
							<p>
								Now that we&apos;re caught up, I&apos;ll explain a bit about myself today! Most of
								my life has been spent jumping from interest to interest, finding the things I like.
								Life by the accidents, if you will. I love learning new things and I have a ton of
								hobbies that include but are not limited to (in no particular order):
							</p>
							<ul>
								<li>Films and TV</li>
								<li>Reading (both fiction and non-fiction)</li>
								<li>Making fermented foods</li>
								<li>Coffee</li>
								<li>Video Games</li>
								<li>Cooking</li>
								<li>Listening to and playing music</li>
								<li>Talking about any of the above things for hours</li>
							</ul>
							<blockquote>
								Technology is the active human interface with the material world.
								<strong>Ursula Le Guin</strong>
							</blockquote>
							<p>
								I spend a lot of my free time thinking and writing about technology and hacking on
								side projects. Most of my side projects these days are focused on Dungeons and
								Dragons. Hopefully, this gives you a bit of an idea of who I am! Come chat with me,
								message me about grabbing a coffee, or just flag me down on Slack! I am always
								interested in chatting and getting to know more about people. The next section
								includes some information about my typical week and how I like to work. If you work
								closely with me, it might give you some more insight into what my job looks like and
								how I approach it. Feel free to skip it if you don&apos;t need to know that
								information!
							</p>
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
										<a href="https://twitter.com/CaffeinatedLich">Twitter / X</a>
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
