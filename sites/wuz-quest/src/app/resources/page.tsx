import { Metadata } from "next";
import Link from "@/components/Link";

export const metadata: Metadata = {
  title: "Tabletop Roleplaying Game Design Resources",
  description:
    "Tools and resources for aspiring AND experienced table top game designers",
};

const Resources = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-emphasis font-black py-4">
        Incredible TTRPG Design Resources
      </h1>
      <p className="py-4">
        I've been collecting good game design resources for a while now and now
        you can have them too!
        <br />
        <br />
        All the resources here are human-made and non-AI (there are a few
        disclaimers on specific resources that have any connection to LLM stuff
        that can be avoided)
      </p>
      <h2>Getting Started</h2>
      <ul className="list-disc p-4 space-y-8">
        <li>
          <strong>
            <Link href="https://caput-caprae.blogspot.com/2021/10/how-to-do-zinequest-step-by-step-guide.html?m=1">
              How to do ZineQuest
            </Link>
          </strong>
          <p>
            Great article from a few years ago on how to do ZineQuest - which is
            a great way to get started with making TTRPGs. The zine format is
            perfect for your first game and ZineQuest helps get a lot of eyes on
            your game.
          </p>
        </li>
      </ul>
      <h2>(Game) Design</h2>
      <ul className="list-disc p-4 space-y-8">
        <li>
          <strong>
            <Link href="https://anydice.com/">Anydice</Link>
          </strong>
          <p>
            An awesome tool for checking dice probability. Really great for
            verifying average damage or interesting dice math questions.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://perchance.org/">Perchance</Link>
          </strong>
          <p>
            Quickly and easily create random generators with natural language
            instead of code.
            <br />
            <small>
              Perchance does have a bunch of LLM junk that they've been doing,
              but it is entirely opt-in and they are the best (and, as far as I
              know, only) tool that does this
            </small>
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://www.skeletoncodemachine.com/">
              Skeleton Code Machine
            </Link>
          </strong>
          <p>
            Game design writing from Exeunt Press. Lots of dives, especially
            focused on interesting game mechanics. Exuent Press has made a
            number of great games and this newsletter is phenomenal. Also be
            sure to check out{" "}
            <Link href="https://www.skeletoncodemachine.com/p/tumulus">
              Tumulus
            </Link>
            , a quarterly print compendium by Exeunt Press.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://explorersdesign.substack.com/">
              Explorer's Design
            </Link>
          </strong>
          <p>
            Incredible writing on TTRPG design by Clayton Notestine. Tons of
            great articles with lots of amazing insight.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://legendaryquest.netfirms.com/books/RPG_Design_Patterns_9_13_09.pdf">
              RPG Design Patterns (PDF)
            </Link>
          </strong>
          <p>
            A deep-dive into design patterns in TTRPGs. All kinds of rules and
            mechanics you can mix and match for your game.
          </p>
        </li>
      </ul>
      <h2>Art Resources</h2>
      <ul className="list-disc p-4 space-y-8">
        <li>
          <strong>
            <Link href="https://docs.google.com/spreadsheets/d/14gzKmj4NEDxKbQLmp_YxhbTbDY1XM4WDheH8c4WvCQs/edit?gid=0#gid=0">
              I am not paying Nohr for the cover art (2.0)
            </Link>
          </strong>
          <p>
            Tons of resources for public domain art, textures, and tips for
            finding art for your games without paying a dime.
          </p>
        </li>
      </ul>
      <h2>(Visual) Design</h2>
      <ul className="list-disc p-4 space-y-8">
        <li>
          <strong>
            <Link href="https://homebrewery.naturalcrit.com/">Homebrewery</Link>
          </strong>
          <p>
            Markdown-based tool for creating 5e homebrew layouts. Really great
            way to get started with creating D&D/5e content without needing to
            learn design software.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://anydice.com/">Anydice</Link>
          </strong>
          <p>
            An awesome tool for checking dice probability. Really great for
            verifying average damage or interesting dice math questions.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://homebrewery.naturalcrit.com/">Homebrewery</Link>
          </strong>
          <p>
            Markdown-based tool for creating 5e homebrew layouts. Really great
            way to get started with creating D&D/5e content without needing to
            learn design software.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://docs.google.com/spreadsheets/d/14gzKmj4NEDxKbQLmp_YxhbTbDY1XM4WDheH8c4WvCQs/edit?gid=0#gid=0">
              I am not paying Nohr for the cover art (2.0)
            </Link>
          </strong>
          <p>
            Tons of resources for public domain art, textures, and tips for
            finding art for your games without paying a dime.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://www.affinity.studio/">Affinity Studio</Link>
          </strong>
          <p>
            Great replacement for Adobe suite when you're just starting out.
            Owned by Canva now, but they've made it completely free.
          </p>
        </li>
        <li>
          <strong>
            <Link href="https://perchance.org/">Perchance</Link>
          </strong>
          <p>
            Quickly and easily create random generators with natural language
            instead of code.
            <br />
            <small>
              Perchance does have a bunch of LLM junk that they've been doing,
              but it is entirely opt-in and they are the best (and, as far as I
              know, only) tool that does this
            </small>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
