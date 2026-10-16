import type { Metadata } from "next";
import Image from "next/image";
import { JoinPanel } from "@/components/JoinPanel";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join HopeCoin. Help build the brand, shape the culture, and grow a community that can make a difference.",
};

export default function CommunityPage() {
  return (
    <main>
      <PageHero
        kicker="Community"
        title="You are not just joining"
        italic="a coin."
        lede="You are helping build the brand, shape the culture, grow the room, and turn an ambitious idea into something that matters."
      />

      <section className="shell pb-20">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <figure className="img-frame aspect-[4/3] rounded-[2rem]">
              <Image
                src="/images/hopey-close.jpg"
                alt="Hopey looking slightly past the camera"
                width={1200}
                height={1200}
                priority
              />
            </figure>
            <div>
              <p className="kicker">Why early</p>
              <h2 className="display display-md mt-5">
                The culture is still being written.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Names, jokes, rituals, art — those get decided while the room can
                still hear itself. Early does not mean secret. It means you can
                still leave a fingerprint.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="join" className="shell scroll-mt-28 pb-24">
        <Reveal>
          <p className="kicker">Enter</p>
          <h2 className="display display-md mt-5 max-w-3xl">
            Come in. Then make something.
          </h2>
          <p className="lede mt-6">
            The official rooms are X, Telegram, and Instagram. If a link is not
            on this page, it is not HopeCoin.
          </p>
        </Reveal>
        <div className="mt-12">
          <JoinPanel />
        </div>
      </section>

      <section className="bg-sand/55">
        <div className="shell section">
          <Reveal>
            <p className="kicker">How to be here</p>
            <h2 className="display display-md mt-5 max-w-3xl">
              The community is the product.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {[
                ["Art", "Hopey drawings, ribbon marks, edits that feel like a brand — not a clip-art pack."],
                ["Voice", "Jokes that stay warm. A timeline that can be loud without turning cruel."],
                ["Care", "Share it with people who would actually care. Quality over a rented crowd."],
              ].map(([title, body]) => (
                <article key={title} className="border-t border-ink/12 pt-6">
                  <h3 className="font-serif text-3xl tracking-tight">{title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
