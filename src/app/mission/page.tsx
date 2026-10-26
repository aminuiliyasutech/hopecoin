import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "HopeCoin exists to build a global community through memes and crypto culture while supporting children battling cancer.",
};

export default function MissionPage() {
  return (
    <main>
      <PageHero
        kicker="Mission"
        title="A coin with a reason"
        italic="to exist."
        lede="HopeCoin is a Solana charity meme coin. Culture first. Charity on purpose. Not a slogan taped onto a chart."
      />

      <section className="shell pb-16 md:pb-24">
        <Reveal>
          <figure className="img-frame aspect-[16/10] rounded-[1.4rem] md:aspect-[16/8] md:rounded-[2rem]">
            <Image
              src="/images/hopey-horizon.jpg"
              alt="Hopey standing in warm light, looking toward the horizon"
              width={2000}
              height={1000}
              priority
            />
          </figure>
        </Reveal>
      </section>

      <section className="shell pb-24">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="kicker">Why this</p>
            <h2 className="display display-md mt-5">
              Fun is allowed.
              <br />
              Meaning is required.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Most meme coins ask for attention and leave nothing behind.
                HopeCoin is built the other way around: a community that likes
                the joke, then keeps a promise after the joke lands.
              </p>
              <p>
                The mission is to gather a global room through memes, creativity,
                and crypto culture — while supporting children battling cancer.
                Those two things are not in conflict. They are the whole point.
              </p>
              <p>
                Half of creator fees go to that support. A verified destination
                receives the charity share. The fee share tracker is where you
                can check.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/45">
        <div className="shell section">
          <Reveal>
            <p className="kicker">The three lines</p>
            <h2 className="display display-md mt-5 max-w-3xl">
              Repeat them when the timeline gets loud.
            </h2>
          </Reveal>
          <ol className="mt-16">
            {[
              {
                title: "Build the community",
                body: "People first. A global room of makers, jokes, and patience — the kind of culture a brand can actually keep.",
              },
              {
                title: "Spread the hope",
                body: "Hopey, the gold ribbon, and a tone that stays kind. Culture is how a meme becomes something people return to.",
              },
              {
                title: "Make a difference",
                body: "Half of creator fees support children battling cancer. Records, not vibes. A fee share tracker you can read.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <li className="grid gap-5 border-t border-ink/10 py-10 md:grid-cols-[88px_1fr_1.35fr] md:items-start">
                  <p className="step-index">0{index + 1}</p>
                  <h3 className="font-serif text-3xl tracking-tight">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-muted">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell section">
        <Reveal>
          <p className="kicker">Held plainly</p>
          <h2 className="display display-md mt-6 max-w-4xl">
            No overnight riches. No invented impact. No borrowed trust.
          </h2>
          <p className="lede mt-8">
            If this works, people will remember how it felt to be here — not
            because a candle went vertical, but because the community built
            something it can stand next to.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex flex-wrap gap-3">
              <Link href="/impact" className="btn btn-ink">
                Fee share tracker
                <Arrow />
              </Link>
              <Link href="/community#join" className="btn btn-ghost">
                Join
              </Link>
            </div>
            <SocialLinks />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
