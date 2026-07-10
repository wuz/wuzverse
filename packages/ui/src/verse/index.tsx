import Link from "next/link";
import LastFmNowPlaying from "../lastfm-now-playing/index";

type Site = "software" | "quest";

const Verse = ({ currentSite }: { currentSite: Site }) => {
  return (
    <aside className="h-9 w-screen fixed top-0 left-0 right-0 z-50 bg-background flex items-center justify-between text-[0.75em] font-emphasis">
      <div className="flex items-center justify-between w-full max-w-360 mx-auto px-[2%]">
        <nav className="verse-nav flex items-center gap-2">
          <div className="flex items-baseline">
            worlds of{" "}
            <span className="font-mono uppercase font-black text-relay-red ml-1 translate-y-px">
              wuz
            </span>
            :
          </div>
          <Link
            href="https://wuz.sh"
            className={currentSite === "software" ? "current" : ""}
          >
            SOFTWARE
          </Link>
          <Link
            href="https://wuz.quest"
            className={currentSite === "quest" ? "current" : ""}
          >
            QUEST
          </Link>
        </nav>
        <LastFmNowPlaying />
      </div>
    </aside>
  );
};

export default Verse;
