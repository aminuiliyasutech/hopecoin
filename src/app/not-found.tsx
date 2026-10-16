import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { BuyLink } from "@/components/BuyLink";

export default function NotFound() {
  return (
    <main className="flex min-h-[78vh] items-center">
      <div className="shell py-28">
        <p className="kicker">404</p>
        <div className="hairline mt-6 max-w-16" />
        <h1 className="display display-lg mt-7">This page wandered off.</h1>
        <p className="lede mt-6">
          The ribbon is still here. This address is not. Head home, or step
          back into the flow.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-ink">
            Back to HopeCoin
            <Arrow />
          </Link>
          <BuyLink className="btn btn-ghost" />
        </div>
      </div>
    </main>
  );
}
