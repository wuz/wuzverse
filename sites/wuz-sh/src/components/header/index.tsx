import Logo from "@/components/logo";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex w-full max-w-full gap-6 mb-6 items-center">
			<Link href="/" aria-label="Home">
				<Logo />
			</Link>
			<strong className="font-redaction">wuz.sh</strong>
			<nav className="flex gap-6 text-[0.8em]">
				<Link href="/posts">Writing</Link>
				<Link href="/readme">Readme</Link>
				{/* <a href="/uses">/uses</a> */}
				{/* <a href="/now">/now</a> */}
			</nav>
		</header>
	);
};

export default Header;
