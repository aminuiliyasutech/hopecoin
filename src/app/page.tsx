import Image from "next/image";
import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";
import { CountStat } from "@/components/CountStat";
import { Arrow } from "@/components/Icons";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Join the community",
    body: "Meet the people around Hopey. Share the work. Belong to a culture that can joke — and still mean it.",
    href: "/community#join",
    label: "Enter the room",
  },
  {
    n: "02",
    title: "Get $HOPE",
    body: `On ${site.chain}, through ${site.launchVenue}. One official contract, published here. Nowhere else.`,
    href: "/token",
    label: "Open the token",
  },
  {
    n: "03",
    title: "Watch it matter",
    body: `${site.feeShare} of creator fees support children battling cancer. Every fee share is written into the public record.`,
    href: "/impact",
    label: "Follow creator fees",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-[72px] lg:min-h-[100svh]">
        <div className="shell relative z-10 grid items-center gap-10 py-10 lg:min-h-[calc(100svh-72px)] lg:grid-cols-12 lg:py-0">
          <Reveal className="lg:col-span-6 lg:pr-12">
            <p className="kicker">Solana charity meme coin</p>
            <div className="hairline mt-6 max-w-20" />
            <h1 className="display display-xl mt-7">
              Where memes
              <br />
              <em>meet meaning.</em>
            </h1>
            <p className="lede mt-8">
              HopeCoin is a community on Solana — memes, culture, and a clear
              line from creator fees to children battling cancer.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-wrap">
                <Link href="/community#join" className="btn btn-ink">
                  Join the community
                  <Arrow />
                </Link>
                <BuyLink className="btn btn-ghost" />
              </div>
              <SocialLinks />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:hidden">
            <figure>
              <div className="img-frame aspect-[4/5] rounded-[2rem] shadow-soft">
                <Image
                  src="/images/hopey-portrait.jpg"
                  alt="Hopey, the HopeCoin mascot — a Shiba Inu wearing a gold childhood-cancer awareness ribbon"
                  width={1100}
                  height={1400}
                  priority
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-sm text-muted">
                <span>Hopey</span>
                <span>Courage · Kindness · Hope</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="absolute bottom-0 right-0 top-[72px] hidden w-[46vw] lg:block">
          <div className="img-frame h-full rounded-l-[2.4rem] rounded-r-none shadow-soft">
            <Image
              src="/images/hopey-portrait.jpg"
              alt="Hopey, the HopeCoin mascot — a Shiba Inu wearing a gold childhood-cancer awareness ribbon"
              fill
              priority
              sizes="46vw"
              className="object-cover object-[center_20%]"
            />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="bg-espresso text-ivory">
        <div className="shell section">
          <Reveal>
            <p className="kicker text-gold-soft">The idea</p>
            <blockquote className="display display-md mt-8 max-w-5xl text-ivory">
              Crypto can be fun. Communities can be powerful. Together, we can
              make a real difference.
            </blockquote>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/62">
              A meme coin with a memory. Hopey at the center. A gold ribbon that
              already means childhood cancer awareness — and a community that
              treats it that way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">How it works</p>
            <h2 className="display display-lg mt-6">
              Three steps.
              <br />
              <em>That is the whole site.</em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede !max-w-lg">
              Join the people. Hold the coin. Follow the help. Everything else
              is decoration.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {steps.map((item, index) => (
            <Reveal key={item.n} delay={index * 70}>
              <article className="grid gap-5 py-10 md:grid-cols-[92px_1fr_auto] md:items-center">
                <p className="step-index">{item.n}</p>
                <div className="max-w-2xl">
                  <h3 className="font-serif text-3xl tracking-tight md:text-[2.1rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                </div>
                <Link href={item.href} className="link-quiet w-fit text-sm">
                  {item.label}
                  <Arrow className="h-3 w-3" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[clamp(1.25rem,4.5vw,4.5rem)] pb-8">
        <div className="mx-auto grid max-w-page items-center gap-10 overflow-hidden rounded-[1.6rem] bg-sand/80 px-5 py-10 md:grid-cols-2 md:rounded-[2rem] md:px-14 md:py-16">
          <Reveal>
            <p className="kicker">Creator fees</p>
            <CountStat value={50} />
            <p className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">
              of creator fees support children battling cancer.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-muted">
              A verified destination for the charity share of creator fees.
              The joke can be loud. The fee record stays quiet, and exact.
            </p>
            <Link href="/impact" className="btn btn-ghost mt-8">
              Follow creator fees
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <figure className="img-frame aspect-[4/5] rounded-[2rem] md:aspect-[4/3]">
              <Image
                src="/images/hopey-room.jpg"
                alt="Hopey sitting in a sunlit room with a gold awareness ribbon"
                width={1400}
                height={1050}
              />
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker">The face</p>
            <h2 className="display display-md mt-5">
              Hopey. A Shiba Inu with a gold ribbon.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Courage, kindness, and hope. The ribbon is not costume. It is the
              mark the world already uses for childhood cancer awareness —
              worn so the meme has somewhere to land.
            </p>
            <Link href="/hopey" className="link-quiet mt-8 text-sm">
              Meet Hopey
              <Arrow className="h-3 w-3" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hopey-horizon.jpg"
            alt=""
            fill
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-espresso/25" />
        </div>
        <div className="shell relative py-28 md:py-36">
          <Reveal>
            <p className="kicker text-gold-soft">On chain</p>
            <h2 className="display display-md mt-6 max-w-3xl text-ivory">
              {site.launchVenue} on {site.chain}. Fair. Public. Built to be
              held with a straight face.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/78">
              Growth through community, consistency, and creativity. The
              official contract is published on this site. If it is not here,
              it is not HopeCoin.
            </p>
            <BuyLink className="btn btn-gold mt-8" />
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <Reveal>
          <div className="rounded-[1.6rem] bg-espresso px-6 py-12 text-ivory md:rounded-[2rem] md:px-16 md:py-20">
            <p className="kicker text-gold-soft">A clear line</p>
            <h2 className="display display-md mt-6 max-w-4xl">
              We are not promising overnight riches. We are building something
              we can be proud of, together.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/62">
              Build the community. Spread the hope. Make a difference.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex flex-wrap gap-3">
                <Link href="/community#join" className="btn btn-gold">
                  Join
                  <Arrow />
                </Link>
                <Link href="/mission" className="btn btn-ghost border-ivory/20 text-ivory hover:border-ivory/50">
                  Read the mission
                </Link>
              </div>
              <SocialLinks tone="ivory" />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
