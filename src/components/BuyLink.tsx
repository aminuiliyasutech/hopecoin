import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { buyHref, buyIsExternal } from "@/lib/site";

export function BuyLink({
  className = "btn btn-gold",
  children = "Get $HOPE",
}: {
  className?: string;
  children?: string;
}) {
  const href = buyHref();
  const label = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (buyIsExternal()) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
