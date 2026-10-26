import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { DonationDashboard } from "@/components/DonationDashboard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description: `${site.feeShare} of HopeCoin creator fees support children battling cancer. Open-source Solana donation tracking dashboard with public proofs.`,
};

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        kicker="Impact"
        title="Help you can"
        italic="actually follow."
        lede={`${site.feeShare} of creator fees support children battling cancer. An open-source Solana donation dashboard tracks every gift with public proofs.`}
      />

      <section className="shell pb-20">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <figure className="img-frame aspect-[4/3] rounded-[2rem]">
              <Image
                src="/images/gold-ribbon.jpg"
                alt="Gold childhood cancer awareness ribbon"
                width={1400}
                height={1050}
                priority
              />
            </figure>
            <div>
              <p className="kicker">The ribbon</p>
              <h2 className="display display-md mt-5">
                Gold already means childhood cancer awareness.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We are not inventing a cause to decorate a token. The gold ribbon
                is a symbol families already know. HopeCoin’s job is to treat it
                with enough seriousness that a donation record can sit next to a
                meme — and both still make sense.
              </p>
              <a href="#dashboard" className="link-quiet mt-8 text-sm">
                Open the donation dashboard
                <Arrow className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="shell section">
          <Reveal>
            <p className="kicker text-gold-soft">The path</p>
            <h2 className="display display-md mt-6 max-w-4xl">
              Fees become gifts. Gifts become a line in the ledger.
            </h2>
            <div className="mt-16 grid gap-12 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Creator fees",
                  body: `Trading $HOPE generates creator fees. ${site.feeShare} of those fees are directed to children’s cancer support.`,
                },
                {
                  n: "02",
                  title: "Verified partner",
                  body: "A charitable organization that works with children battling cancer receives the gift. Named only when verified.",
                },
                {
                  n: "03",
                  title: "Public record",
                  body: "Every gift has a date, amount, destination, status, and Solana proof when available — tracked in the open dashboard below.",
                },
              ].map((item) => (
                <article key={item.n}>
                  <p className="font-serif text-2xl text-gold-soft">{item.n}</p>
                  <h3 className="mt-4 font-serif text-3xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ivory/62">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <DonationDashboard />
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <Link href="/community#join" className="btn btn-ghost">
            Join the community
            <Arrow />
          </Link>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
