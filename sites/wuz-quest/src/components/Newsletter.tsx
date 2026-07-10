"use client";

import Link from "next/link";

const Newsletter = () => {
	return (
		<form
			action="https://buttondown.com/api/emails/embed-subscribe/wuz"
			method="post"
			target="popupwindow"
			onSubmit={() => window.open("https://buttondown.com/wuz", "popupwindow")}
			className="embeddable-buttondown-form font-body flex flex-col gap-1 text-sm"
		>
			<p>
				Like the posts here? Check out my newsletter, where you'll find posts like these and more
				in-depth dives into my work with Infinite Citadel.
			</p>
			<div className="py-4 flex flex-col gap-3">
				<label htmlFor="bd-email">Enter your email</label>
				<input
					type="email"
					name="email"
					id="bd-email"
					className="font-mono border-b-1 placeholder:text-muted"
					placeholder="you@awesome.com"
				/>

				<input type="submit" value="Subscribe" className="text-brand" />
			</div>
			<p className="text-center">
				<Link
					href="https://buttondown.com/refer/wuz"
					target="_blank"
					className="text-muted! text-xs"
				>
					Powered by Buttondown.
				</Link>
			</p>
		</form>
	);
};

export default Newsletter;
