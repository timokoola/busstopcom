import Link from "next/link";

export default function LinkBar({ linkUrl, linkText, placement }) {
  return (
    <div className="link-bar" data-state={placement}>
      <Link href={linkUrl}>
        <a>{linkText}</a>
      </Link>
    </div>
  );
}
