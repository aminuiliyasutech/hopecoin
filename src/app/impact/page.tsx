import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { donations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description: `${site.feeShare} of HopeCoin creator fees support children battling cancer. A verified partner. A public ledger.`,
};

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        kicker="Impact"
        title="Help you can"
        italic="actually follow."
        lede={`${site.feeShare} of creator fees support children battling cancer. A verified charitable partner. A public ledger for every gift.`}
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
                  body: "A charitable organization that works with children battling cancer receives the gift. One partner. A name you can read.",
                },
                {
                  n: "03",
                  title: "Public record",
                  body: "Every gift has a date, an amount, a destination, and proof. If it cannot be listed here, it is not part of the story.",
                },
              ].map((item) => (
                <article key={item.n}>
                  <p className="font-serif text-2xl text-gold-soft">{item.n}</p>
                  <h3 className="mt-4 font-serif text-3xl tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-ivory/62">{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="kicker">Public ledger</p>
              <h2 className="display display-md mt-5">Every gift, in one place.</h2>
            </div>
            <p className="max-w-sm text-muted">
              Records appear here as donations are made. This is the source of
              truth for HopeCoin’s charity work.
            </p>
          </div>
          {donations.length === 0 ? (
            <div className="mt-12 overflow-hidden rounded-[1.8rem] border border-ink/10 bg-ivory">
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="img-frame aspect-[4/3] md:aspect-auto">
                  <Image
                    src="/images/gold-ribbon.jpg"
                    alt=""
                    width={900}
                    height={680}
                  />
                </div>
                <div className="flex flex-col justify-center px-8 py-12 md:px-12">
                  <p className="kicker">Awaiting first record</p>
                  <p className="mt-4 font-serif text-3xl tracking-tight">
                    The ledger is live. The first line will be written when the
                    first gift is made.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">
                    Date, amount, partner, proof — nothing decorative, nothing
                    missing.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-ink/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-sand/70 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Amount</th>
                    <th className="px-5 py-4 font-semibold">Partner</th>
                    <th className="px-5 py-4 font-semibold">Proof</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((row) => (
                    <tr key={`${row.date}-${row.amount}`} className="border-t border-ink/10">
                      <td className="px-5 py-4">{row.date}</td>
                      <td className="px-5 py-4">{row.amount}</td>
                      <td className="px-5 py-4">{row.partner}</td>
                      <td className="px-5 py-4">
                        {row.proofUrl ? (
                          <a
                            href={row.proofUrl}
                            className="link-quiet"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {row.proofLabel || "View"}
                          </a>
                        ) : (
                          row.proofLabel || "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/community#join" className="btn btn-ghost">
              Join the community
              <Arrow />
            </Link>
            <SocialLinks />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
