import type { Metadata } from "next";
import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";
import { ContractBox } from "@/components/ContractBox";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Token",
  description: `$HOPE on Solana, through ${site.launchVenue}. ${site.feeShare} of creator fees support children battling cancer.`,
};

const facts = [
  { label: "Chain", value: site.chain },
  { label: "Launch", value: site.launchVenue },
  { label: "Ticker", value: `$${site.ticker}` },
  { label: "Creator fees", value: `${site.feeShare} to impact` },
];

export default function TokenPage() {
  return (
    <main>
      <PageHero
        kicker="Token"
        title="Get $HOPE."
        italic="Use this page."
        lede={`HopeCoin lives on ${site.chain} and launches through ${site.launchVenue}. The official contract is published here. If it is not on this page, it is not ours.`}
      />

      <section className="shell pb-6">
        <Reveal>
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <BuyLink />
            <Link href="/impact" className="btn btn-ghost">
              Public ledger
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="shell pb-16 pt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((item, index) => (
            <Reveal key={item.label} delay={index * 60}>
              <article className="rounded-[1.4rem] border border-ink/12 bg-ivory px-6 py-7">
                <p className="kicker">{item.label}</p>
                <p className="mt-4 font-serif text-2xl tracking-tight">{item.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="h-full rounded-[1.8rem] bg-sand/75 px-8 py-10 md:px-12 md:py-14">
              <p className="kicker">How value moves</p>
              <h2 className="display display-md mt-5">
                Creator fees become the help.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {site.feeShare} of creator fees support children battling
                cancer, through a verified charitable partner. The path is
                simple on purpose: trade generates fees, fees become gifts,
                gifts are listed in the ledger.
              </p>
              <Link href="/impact" className="link-quiet mt-8 text-sm">
                Follow every gift
                <Arrow className="h-3 w-3" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ContractBox />
          </Reveal>
        </div>
      </section>

      <section className="shell pb-24">
        <Reveal>
          <p className="kicker">Read this once</p>
          <h2 className="display display-md mt-5 max-w-3xl">
            A coin. Not a guarantee.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            {
              title: "Price can go to zero",
              body: "Digital assets are volatile. Nothing on this site is financial advice, and nobody here will sell you a fantasy to win a follow.",
            },
            {
              title: "One official address",
              body: "The contract is published on this page. Screenshots, DMs, and lookalike tickers are not a source of truth.",
            },
            {
              title: "Help you can check",
              body: "The interesting number is the fee split and the public ledger — not a maze of allocations invented to look sophisticated.",
            },
            {
              title: "Grown in public",
              body: "Community, consistency, and creativity. That is slower than a rented launch. It is also the only version that lasts.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="border-t border-ink/12 pt-6">
                <h3 className="font-serif text-3xl tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
