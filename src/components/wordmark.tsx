import Link from "next/link";

type WordmarkProps = {
  href?: string;
};

export function Wordmark({ href = "/" }: WordmarkProps) {
  return (
    <Link className="wordmark" href={href} aria-label="Nigma">
      NIGMA
      <span className="wordmark__cut" aria-hidden="true" />
    </Link>
  );
}
