import { type MouseEvent, type ReactNode } from "react";

interface PlaceholderLinkProps {
  children: ReactNode;
  className: string;
}

/**
 * Displays an unfinished link without navigating away from the demonstration.
 * Using an anchor preserves familiar link semantics and keyboard focus.
 */
export function PlaceholderLink({
  children,
  className,
}: PlaceholderLinkProps) {
  function preventNavigation(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
  }

  return (
    <a className={className} href="#" onClick={preventNavigation}>
      {children}
    </a>
  );
}
