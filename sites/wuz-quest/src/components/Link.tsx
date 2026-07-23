import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

const Link = ({ href, children, ...props }: LinkProps) => {
  let url;
  if (typeof href === "string") {
    url = href;
  } else {
    url = href.toString();
  }
  url = new URL(url);
  url.searchParams.append("via", "wuz.quest");
  const viaUrl = url.toString();
  return (
    <NextLink href={viaUrl} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
