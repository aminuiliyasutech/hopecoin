import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Hopey",
  description:
    "Hopey is HopeCoin’s Shiba Inu mascot. A gold ribbon for courage, kindness, and hope.",
};

export default function HopeyPage() {
  return (
    <main>
      <PageHero
        kicker="Hopey"
        title="He wears the ribbon"
        italic="so we remember why."
        lede="A Shiba Inu. A gold ribbon. Courage, kindness, and hope — and a face for children fighting harder battles than a chart."
      />

      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <figure className="img-frame aspect-[4/5] rounded-[2rem]">
              <Image
                src="/images/hopey-portrait.jpg"
                alt="Editorial portrait of Hopey with a gold ribbon"
                width={1100}
                height={1400}
                priority
              />
            </figure>
          </Reveal>
          <div className="grid gap-5 md:col-span-5">
            <Reveal delay={80}>
              <figure className="img-frame aspect-square rounded-[2rem]">
                <Image
                  src="/images/hopey-close.jpg"
                  alt="Close portrait of Hopey"
                  width={900}
                  height={900}
                />
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <figure className="img-frame aspect-[4/3] rounded-[2rem]">
                <Image
                  src="/images/gold-ribbon.jpg"
                  alt="A gold childhood cancer awareness ribbon on linen"
                  width={1000}
                  height={750}
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell pb-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="kicker">The face</p>
            <h2 className="display display-md mt-5">
              Familiar on purpose.
              <br />
              Serious about the ribbon.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Shiba Inu is already part of crypto’s visual language. Hopey uses
              that familiarity, then changes the ending. The gold ribbon is the
              international mark of childhood cancer awareness. We did not invent
              it. We chose to wear it.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {[
                ["Courage", "Showing up when the fight is long."],
                ["Kindness", "A culture that can joke without turning cruel."],
                ["Hope", "Leaving something better than a ticker."],
              ].map(([title, body]) => (
                <div key={title} className="grid gap-3 py-7 md:grid-cols-[150px_1fr]">
                  <dt className="font-serif text-2xl">{title}</dt>
                  <dd className="text-lg leading-relaxed text-muted">{body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-espresso text-ivory">
        <div className="shell section grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="kicker text-gold-soft">For the community</p>
            <h2 className="display display-md mt-5">
              Draw him. Meme him.
              <br />
              Keep the ribbon.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/68">
              Hopey is the shared face of the coin. Art, stickers, edits, comics
              — all of it. The one request: keep the gold ribbon. That is the
              part that is not a joke.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/community#join" className="btn btn-gold">
                Join and share
                <Arrow />
              </Link>
              <SocialLinks tone="ivory" />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <figure className="img-frame aspect-[4/3] rounded-[2rem]">
              <Image
                src="/images/hopey-room.jpg"
                alt="Hopey in a quiet sunlit room"
                width={1400}
                height={1050}
              />
            </figure>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
