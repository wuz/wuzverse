import {
  GridBreakout,
  GridLayout,
  GridLeft,
  GridRight,
  GridFull,
} from "@/components/grid-layout";
import me from "./me.jpeg";
import AutoGrid from "@/components/auto-grid";
import PostsDisplay from "@/components/posts-display";
import Header from "@/components/header";
import { Heading, Lead } from "@/components/type";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";
import Link from "next/link";
import SocialGrid from "@/components/social-grid";
import { DitherShader } from "@wuz/ui";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GridLayout>
          <GridLeft>
            <div className="flow">
              <Heading level="1">Conlin Durbin</Heading>
              <Heading level="2">
                Senior Frontend Engineer at{" "}
                <Link
                  href="https://whatnot.com"
                  className="whatnot-yellow underline"
                >
                  Whatnot
                </Link>
                . Typescripter.{" "}
                <Link href="https://infinite-citadel.com" className="underline">
                  TTRPG-er
                </Link>
                .
              </Heading>
            </div>
          </GridLeft>
          <GridRight>
            <div className="flow">
              <Lead>
                Howdy, I&apos;m Conlin. I live in Indianapolis and I love to
                travel. I currently work on App Platform at{" "}
                <Link href="https://whatnot.com">
                  <em>Whatnot</em>
                </Link>
                , building performant, accessible frontends and establishing
                architectural principals for the web platform.
              </Lead>
              <Lead>
                I&apos;ve built frontends for companies like <em>HackerRank</em>
                , <em>Payscale</em>, and <em>Lessonly</em>. I&apos;ve also
                worked for early startups like <em>Agora</em> and <em>Mimir</em>
                .
              </Lead>
              <Lead>
                I love the <em>weird web</em>, I collect{" "}
                <em>physical media formats</em>, I play lots of{" "}
                <em>tabletop roleplaying games</em> and make them with{" "}
                <Link href="https://infinite-citadel.com">
                  <em>Infinite Citadel</em>
                </Link>
                , and I love to cook, especially <em>Korean food</em>. I also
                dabble in{" "}
                <Link href="https://www.flickr.com/photos/192700574@N03/">
                  <em>photography</em>
                </Link>
                .
              </Lead>
            </div>
          </GridRight>
          <GridBreakout>
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <DitherShader
                src={me.src}
                gridSize={2}
                ditherMode="bayer"
                threshold={0.8}
                colorMode="grayscale"
                className="absolute object-cover"
              />
            </div>
          </GridBreakout>
          <GridRight>
            <PostsDisplay />
          </GridRight>
          <GridFull>
            <hr />
          </GridFull>
          <GridFull>
            <AutoGrid>
              <SocialGrid />
              <Projects />
              <WorkHistory />
            </AutoGrid>
          </GridFull>
        </GridLayout>
      </main>
    </>
  );
}
