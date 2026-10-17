import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "White Paper",
  description: `The HopeCoin ($HOPE) white paper — mission, tokenomics, the ${site.feeShare} creator-fee charity commitment, roadmap, and risks.`,
};

export default function WhitepaperPage() {
  return (
    <main>
      <PageHero
        kicker="White Paper"
        title="Soon."
        lede="The HopeCoin white paper is being prepared. Check back here when it goes public."
      />

      <section className="shell pb-28">
        <Reveal>
          <div className="max-w-xl rounded-[1.6rem] border border-ink/12 bg-sand/50 px-8 py-10 md:px-10 md:py-12">
            <p className="kicker">Coming next</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Mission, tokenomics, the {site.feeShare} creator-fee charity
              commitment, roadmap, and risks — published here when ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/token" className="btn btn-ink">
                Token page
              </Link>
              <Link href="/community" className="btn btn-ghost">
                Community
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
