import { Reveal } from "@/components/Reveal";

export function PageHero({
  kicker,
  title,
  italic,
  lede,
}: {
  kicker: string;
  title: string;
  italic?: string;
  lede: string;
}) {
  return (
    <section className="shell pb-8 pt-36 md:pb-12 md:pt-44">
      <Reveal>
        <p className="kicker">{kicker}</p>
        <div className="hairline mt-6 max-w-24" />
        <h1 className="display display-lg mt-7 max-w-5xl">
          {title}
          {italic ? (
            <>
              {" "}
              <em>{italic}</em>
            </>
          ) : null}
        </h1>
        <p className="lede mt-8">{lede}</p>
      </Reveal>
    </section>
  );
}
