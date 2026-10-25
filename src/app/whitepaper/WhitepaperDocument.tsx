import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import {
  charitySteps,
  feeAllocation,
  feeExample,
  projectFacts,
  risks,
  roadmap,
  tokenDistribution,
  tokenParams,
  transparencyStates,
  whitepaperMeta,
  whitepaperToc,
} from "@/lib/whitepaper";

function SectionHeading({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <header id={id} className="scroll-mt-28">
      <p className="kicker">{number}</p>
      <h2 className="display display-md mt-4">{title}</h2>
      <div className="hairline mt-6 max-w-20" />
    </header>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted">
      {children}
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: { cells: [string, string]; strong?: boolean }[];
}) {
  return (
    <div className="mt-8 overflow-x-auto rounded-[1.2rem] border border-ink/12 bg-ivory">
      <table className="w-full min-w-[28rem] text-left text-[0.95rem]">
        <thead>
          <tr className="border-b border-ink/10 text-[0.68rem] uppercase tracking-[0.18em] text-gold">
            <th className="px-5 py-4 font-semibold sm:px-6">{headers[0]}</th>
            <th className="px-5 py-4 font-semibold sm:px-6">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.cells[0]}
              className="border-b border-ink/8 last:border-b-0"
            >
              <td
                className={`px-5 py-4 sm:px-6 ${
                  row.strong ? "font-semibold text-ink" : "text-muted"
                }`}
              >
                {row.cells[0]}
              </td>
              <td
                className={`px-5 py-4 sm:px-6 ${
                  row.strong ? "font-semibold text-ink" : "text-ink"
                }`}
              >
                {row.cells[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function WhitepaperDocument() {
  return (
    <main>
      <PageHero
        kicker={`White Paper — ${whitepaperMeta.versionLabel}`}
        title={whitepaperMeta.title}
        italic={whitepaperMeta.subtitle}
        lede={`HopeCoin ($HOPE) — a community-driven Solana meme coin with a proposed ${site.feeShare} creator-fee allocation toward support for children battling cancer. Status: ${whitepaperMeta.status}.`}
      />

      <section className="shell pb-12">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projectFacts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-[1.2rem] border border-ink/12 bg-ivory px-5 py-6"
              >
                <p className="kicker">{fact.label}</p>
                <p className="mt-3 font-serif text-xl tracking-tight">
                  {fact.value}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 text-sm leading-relaxed text-stone">
            Project type: Community-driven meme coin with a charitable mission.
            Token parameters and charitable arrangements are proposed until
            confirmed against the live deployment and published evidence.
          </p>
        </Reveal>
      </section>

      <section className="shell pb-24 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 xl:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <nav
                aria-label="White paper contents"
                className="rounded-[1.4rem] border border-ink/12 bg-sand/50 p-6 md:p-7"
              >
                <p className="kicker">Contents</p>
                <ol className="mt-5 space-y-2.5">
                  {whitepaperToc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-[0.92rem] leading-snug text-muted transition-colors hover:text-ink"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 flex flex-col gap-2 border-t border-ink/10 pt-6">
                  <Link href="/token" className="btn btn-ink !min-h-11 text-sm">
                    Token page
                  </Link>
                  <Link
                    href="/impact"
                    className="btn btn-ghost !min-h-11 text-sm"
                  >
                    Public ledger
                  </Link>
                </div>
              </nav>
            </Reveal>
          </aside>

          <div className="min-w-0 space-y-20 md:space-y-24">
            <Reveal>
              <article>
                <SectionHeading
                  id="executive-summary"
                  number="Section 01"
                  title="Executive Summary"
                />
                <Prose>
                  <p>
                    HopeCoin ($HOPE) is a community-driven meme coin built around
                    a simple but powerful idea: bringing people together through
                    internet culture, cryptocurrency, and compassion to support
                    children battling cancer.
                  </p>
                  <p>
                    We believe cryptocurrency communities can be about more than
                    charts, memes, and profits. They can also create awareness,
                    encourage collective action, and help support meaningful
                    causes.
                  </p>
                  <p>
                    HopeCoin aims to combine the viral nature of meme coins with
                    a charitable mission, using community participation and a
                    proposed creator-fee allocation model to support
                    organizations helping children affected by cancer.
                  </p>
                  <p>
                    Our proposed commitment is to allocate{" "}
                    <strong className="font-semibold text-ink">
                      {site.feeShare} of eligible creator-fee revenue
                    </strong>{" "}
                    received by the project toward charitable support.
                  </p>
                  <p>
                    We intend to build a recognizable brand, a strong community,
                    and a transparent approach to charitable contributions.
                    HopeCoin is not promising overnight wealth. It is a project
                    built around the possibility of turning an online community
                    into a force for good.
                  </p>
                  <p className="font-serif text-2xl tracking-tight text-ink">
                    Our mission: Make memes meaningful. Make hope contagious.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="vision"
                  number="Section 02"
                  title="Our Vision"
                />
                <Prose>
                  <p>
                    We envision a global community where people from different
                    countries, backgrounds, and cultures unite around a shared
                    purpose. HopeCoin aims to become a recognizable symbol of
                    kindness, courage, and hope within the cryptocurrency space.
                  </p>
                  <p>Our vision rests on three core principles:</p>
                </Prose>
                <div className="mt-8 grid gap-4">
                  {[
                    {
                      title: "Community",
                      body: "Build a welcoming global movement through memes, creativity, and participation.",
                    },
                    {
                      title: "Transparency",
                      body: "Make the project’s financial activities and charitable contributions verifiable wherever possible.",
                    },
                    {
                      title: "Impact",
                      body: "Work toward supporting legitimate organizations that help children battling cancer.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.2rem] border border-ink/10 bg-ivory px-6 py-6"
                    >
                      <h3 className="font-serif text-2xl tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
                <Prose>
                  <p>
                    We want supporters to feel that they are participating in a
                    community with a purpose beyond token prices. Our long-term
                    ambition is to demonstrate how online communities can
                    organize around a cause and work toward real-world impact.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="problem"
                  number="Section 03"
                  title="The Problem We Want to Address"
                />
                <Prose>
                  <p>
                    Childhood cancer affects children and families around the
                    world. Treatment can bring emotional, practical, and
                    financial challenges, while many families and organizations
                    need additional support.
                  </p>
                  <p>
                    At the same time, cryptocurrency communities can mobilize
                    people across borders, spread messages rapidly, and
                    coordinate activities through digital platforms. HopeCoin
                    aims to connect these two worlds.
                  </p>
                  <p>
                    We want to explore how a community built through internet
                    culture can help raise awareness and contribute financially
                    to verified charitable causes. We recognize that a
                    cryptocurrency project cannot solve childhood cancer on its
                    own. However, we believe that responsible community
                    participation can contribute to a broader effort to support
                    affected children and families.
                  </p>
                  <p>
                    Our belief is simple: even a small contribution can matter
                    when a community works together.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="solution"
                  number="Section 04"
                  title="The HopeCoin Solution"
                />
                <Prose>
                  <p>
                    HopeCoin proposes a community-first model that combines a
                    meme coin, a recognizable identity, and a transparent
                    charitable mission.
                  </p>
                </Prose>
                <div className="mt-10 space-y-10">
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      4.1 Community-driven growth
                    </h3>
                    <Prose>
                      <p>
                        HopeCoin will use memes, social media, creative
                        campaigns, and community participation to introduce the
                        project to a wider audience. We want supporters to
                        participate because they believe in the mission, enjoy
                        the community, and want to help spread a positive
                        message.
                      </p>
                    </Prose>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      4.2 A proposed charitable revenue model
                    </h3>
                    <Prose>
                      <p>
                        HopeCoin proposes allocating {site.feeShare} of eligible
                        creator-fee revenue received by the project to charitable
                        support for children battling cancer. The allocation will
                        be meaningful only when it is supported by a functioning
                        revenue-tracking and distribution process.
                      </p>
                    </Prose>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      4.3 Transparency and accountability
                    </h3>
                    <Prose>
                      <p>
                        We intend to publish clear information about project
                        progress, eligible creator-fee revenue, charitable
                        allocations, and completed donations. We will distinguish
                        between funds planned for charity and funds actually
                        transferred to verified recipients.
                      </p>
                      <p>
                        Our objective is to earn community trust through
                        evidence, consistent communication, and responsible
                        decision-making.
                      </p>
                    </Prose>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="hopey"
                  number="Section 05"
                  title="The Hopey Mascot"
                />
                <Prose>
                  <p>
                    Meet Hopey, our Shiba Inu mascot wearing a golden awareness
                    ribbon. Hopey represents courage, kindness, optimism, and the
                    determination to keep hope alive.
                  </p>
                  <p>
                    The Shiba Inu connects HopeCoin to familiar internet meme
                    culture, while the golden ribbon represents childhood cancer
                    awareness. Hopey will serve as the project’s visual identity
                    across social media, community campaigns, digital artwork,
                    and promotional materials.
                  </p>
                  <p>
                    We intend to use Hopey to make the project recognizable,
                    approachable, and memorable. Hopey is more than a mascot. It
                    represents the positive message we want the HopeCoin
                    community to spread.
                  </p>
                </Prose>
                <Link href="/hopey" className="link-quiet mt-8 text-sm">
                  Meet Hopey on the site
                </Link>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="token"
                  number="Section 06"
                  title="Token Information"
                />
                <Prose>
                  <p>
                    HopeCoin is planned as a token on the Solana blockchain,
                    with Pump.fun as the intended launch platform. Solana
                    provides a blockchain environment in which supported token
                    transactions can be publicly inspected.
                  </p>
                  <p>
                    The following details describe the proposed setup and must be
                    confirmed against the actual deployed token.
                  </p>
                </Prose>
                <DataTable
                  headers={["Parameter", "Proposed details"]}
                  rows={tokenParams.map((row) => ({
                    cells: [row.label, row.value],
                  }))}
                />
                <Prose>
                  <p>
                    The actual token supply, distribution, liquidity
                    arrangements, and available platform features will be
                    confirmed after launch configuration. No token should be
                    considered live until its creation and address have been
                    verified.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="tokenomics"
                  number="Section 07"
                  title="Tokenomics and Distribution"
                />
                <Prose>
                  <p>
                    HopeCoin’s proposed tokenomics are designed to keep the token
                    model simple while placing the charitable mission at the
                    center of the project’s operating policy.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  7.1 Proposed token supply
                </h3>
                <Prose>
                  <p>
                    The proposed total supply is{" "}
                    <strong className="font-semibold text-ink">
                      1,000,000,000 HOPE
                    </strong>
                    , equivalent to one billion tokens. This is a proposed supply
                    figure and must be confirmed against the final deployed
                    token.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  7.2 Proposed token distribution
                </h3>
                <Prose>
                  <p>
                    HopeCoin intends to pursue a fair-launch approach rather than
                    reserving a separate portion of the token supply for the
                    founding team.
                  </p>
                </Prose>
                <DataTable
                  headers={["Token allocation", "Proposed share"]}
                  rows={tokenDistribution.map((row) => ({
                    cells: [row.label, row.share],
                    strong: row.label === "Total",
                  }))}
                />
                <Prose>
                  <p>
                    These figures describe the intended allocation policy. They
                    do not guarantee that all holders will own equal amounts or
                    that the market will distribute tokens evenly. A public
                    launch does not automatically guarantee fair ownership,
                    permanent liquidity, or protection from large holders. The
                    project will disclose any material changes to this policy.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  7.3 Creator-fee revenue allocation
                </h3>
                <Prose>
                  <p>
                    HopeCoin proposes dividing eligible creator-fee revenue
                    received by the project according to the following model.
                    This allocation is separate from token supply. It does not
                    mean that {site.feeShare} of all tokens, all trading volume,
                    or every transaction is donated.
                  </p>
                </Prose>
                <div className="mt-8 grid gap-4">
                  {feeAllocation.map((item) => (
                    <div
                      key={item.purpose}
                      className="grid gap-2 rounded-[1.2rem] border border-ink/10 bg-ivory px-6 py-6 sm:grid-cols-[5.5rem_1fr] sm:gap-6"
                    >
                      <p className="font-serif text-3xl tracking-tight text-gold-deep">
                        {item.percentage}
                      </p>
                      <div>
                        <h4 className="font-serif text-2xl tracking-tight">
                          {item.purpose}
                        </h4>
                        <p className="mt-2 leading-relaxed text-muted">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Prose>
                  <p>
                    The percentages apply to eligible creator-fee revenue
                    actually received by the project, subject to the final
                    accounting method and implementation. These are proposed
                    allocations, not evidence that revenue has already been
                    received or distributed.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  7.4 Example of revenue allocation
                </h3>
                <Prose>
                  <p>
                    If HopeCoin receives $1,000 in eligible creator-fee revenue,
                    the proposed distribution would be:
                  </p>
                </Prose>
                <DataTable
                  headers={["Purpose", "Amount"]}
                  rows={feeExample.map((row) => ({
                    cells: [row.purpose, row.amount],
                    strong: row.purpose === "Total",
                  }))}
                />
                <Prose>
                  <p>
                    This is an illustrative example only. It is not a forecast of
                    revenue, token price, or future donations. Creator-fee
                    revenue may fluctuate or be zero.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  7.5 No guaranteed returns
                </h3>
                <Prose>
                  <p>
                    HopeCoin does not promise guaranteed profits, price
                    appreciation, or a minimum return to holders. The project’s
                    proposed charitable mission is independent of any expectation
                    that the token’s price will rise.
                  </p>
                  <p>
                    Anyone considering buying $HOPE should understand that meme
                    coins are highly speculative and can lose most or all of
                    their value.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="charity"
                  number="Section 08"
                  title="The 50% Charity Commitment"
                />
                <Prose>
                  <p>
                    Charitable support is intended to be the defining purpose of
                    HopeCoin. Our proposed policy is to allocate {site.feeShare}{" "}
                    of eligible creator-fee revenue received by the project
                    toward supporting children battling cancer through verified
                    charitable organizations.
                  </p>
                  <p>
                    We want to build a model in which the charitable commitment
                    is clear, the calculations are understandable, and completed
                    contributions can be checked.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  8.1 How the proposed model works
                </h3>
                <ol className="mt-8 space-y-5">
                  {charitySteps.map((step, index) => (
                    <li
                      key={step.title}
                      className="grid gap-3 border-t border-ink/10 pt-5 sm:grid-cols-[3rem_1fr]"
                    >
                      <span className="font-serif text-2xl text-gold-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-serif text-2xl tracking-tight">
                          {step.title}
                        </h4>
                        <p className="mt-2 leading-relaxed text-muted">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  8.2 Charitable organizations
                </h3>
                <Prose>
                  <p>
                    HopeCoin intends to explore supporting established
                    organizations that help children battling cancer.
                    Organizations such as St. Jude Children’s Research Hospital
                    may be considered as potential recipients, subject to
                    verification and appropriate donation arrangements.
                  </p>
                  <p>
                    Mentioning an organization does not mean it has partnered
                    with, endorsed, approved, or received money from HopeCoin.
                    Any relationship or completed donation will be announced only
                    when it can be substantiated.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  8.3 Transparency standards
                </h3>
                <Prose>
                  <p>HopeCoin aims to distinguish clearly between:</p>
                </Prose>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {transparencyStates.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.2rem] border border-ink/10 bg-ivory px-5 py-6"
                    >
                      <h4 className="font-serif text-xl tracking-tight">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
                <Prose>
                  <p>
                    We will not describe allocated funds as completed donations.
                    Where practical, we intend to publish supporting records,
                    blockchain transaction links, receipts, and recipient
                    confirmations, while respecting privacy and applicable
                    requirements.
                  </p>
                </Prose>

                <h3 className="mt-12 font-serif text-3xl tracking-tight">
                  8.4 Important limitations
                </h3>
                <Prose>
                  <p>
                    The proposed {site.feeShare} commitment applies only to
                    eligible creator-fee revenue received by the project. It does
                    not apply automatically to all token transactions, and it
                    does not guarantee a minimum donation amount or schedule.
                  </p>
                  <p>
                    The implementation depends on the actual platform
                    arrangements, the project’s ability to receive and account
                    for revenue, and applicable legal and operational
                    requirements. Until the relevant mechanisms are established,
                    the {site.feeShare} commitment remains a proposed policy
                    rather than a claim that donations are already being
                    generated.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="community"
                  number="Section 09"
                  title="Community and Marketing Strategy"
                />
                <Prose>
                  <p>
                    HopeCoin intends to grow through organic participation,
                    recognizable branding, creative content, and consistent
                    communication. We want the community to be entertaining,
                    welcoming, and connected to a meaningful purpose.
                  </p>
                </Prose>
                <div className="mt-10 space-y-10">
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      9.1 X (Twitter)
                    </h3>
                    <Prose>
                      <p>X will be a central platform for sharing:</p>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>HopeCoin memes and Hopey artwork.</li>
                        <li>Project announcements and progress updates.</li>
                        <li>
                          Educational posts about the project and its charitable
                          mission.
                        </li>
                        <li>
                          Community discussions and participation campaigns.
                        </li>
                        <li>
                          Verifiable reports of charitable contributions when
                          available.
                        </li>
                      </ul>
                    </Prose>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      9.2 Instagram
                    </h3>
                    <Prose>
                      <p>
                        Instagram will help communicate the project’s identity
                        through visual storytelling, short videos, artwork,
                        campaign highlights, and community content.
                      </p>
                    </Prose>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      9.3 Community participation
                    </h3>
                    <Prose>
                      <p>
                        Supporters will be encouraged to create memes, contribute
                        ideas, share educational content, and help spread the
                        project’s message. The project aims to recognize
                        constructive community contributions and build a culture
                        based on creativity, kindness, and transparency.
                      </p>
                    </Prose>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl tracking-tight">
                      9.4 Responsible promotion
                    </h3>
                    <Prose>
                      <p>
                        HopeCoin will avoid misleading claims about guaranteed
                        profits, guaranteed exchange listings, confirmed
                        partnerships that do not exist, or charitable donations
                        that have not occurred. The project will focus on
                        communicating its real progress and its clearly stated
                        intentions.
                      </p>
                    </Prose>
                  </div>
                </div>
                <Link href="/community" className="link-quiet mt-10 text-sm">
                  Join the community
                </Link>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="roadmap"
                  number="Section 10"
                  title="Roadmap"
                />
                <Prose>
                  <p>
                    The roadmap describes proposed milestones. Completion dates
                    and outcomes are not guaranteed. Each phase will be
                    communicated honestly. A milestone will not be presented as
                    completed until it has actually been achieved.
                  </p>
                </Prose>
                <div className="mt-10 space-y-6">
                  {roadmap.map((phase) => (
                    <div
                      key={phase.phase}
                      className="rounded-[1.4rem] border border-ink/10 bg-sand/40 px-6 py-8 md:px-8"
                    >
                      <p className="kicker">{phase.phase}</p>
                      <h3 className="mt-3 font-serif text-3xl tracking-tight">
                        {phase.title}
                      </h3>
                      <ul className="mt-6 space-y-3 text-[1.02rem] leading-relaxed text-muted">
                        {phase.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="governance"
                  number="Section 11"
                  title="Governance and Accountability"
                />
                <Prose>
                  <p>
                    HopeCoin aims to operate with clear communication and
                    responsible decision-making. During the project’s early
                    stages, the founding team will be responsible for
                    implementing the published policies and communicating
                    progress.
                  </p>
                  <p>
                    The project intends to provide updates on material changes to
                    tokenomics, charitable arrangements, and project operations.
                    If the proposed allocation model changes, the reasons and
                    implications should be communicated publicly.
                  </p>
                  <p>
                    Any future community voting system or formal governance
                    mechanism will be announced only if it has been implemented
                    and its rules have been documented. The project will not
                    claim that holders possess governance rights that have not
                    actually been established.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="risks"
                  number="Section 12"
                  title="Risks and Disclaimers"
                />
                <Prose>
                  <p>
                    HopeCoin is an early-stage cryptocurrency project with
                    significant risks.
                  </p>
                </Prose>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {risks.map((item) => (
                    <article
                      key={item.title}
                      className="border-t border-ink/12 pt-5"
                    >
                      <h3 className="font-serif text-2xl tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="mt-10 rounded-[1.4rem] bg-espresso px-6 py-8 text-ivory md:px-8">
                  <p className="kicker text-gold-soft">No investment advice</p>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-ivory/78">
                    This white paper is informational and describes proposed
                    project plans. It does not constitute financial, legal, or
                    tax advice, nor an offer or guarantee of investment returns.
                    Prospective participants should conduct their own research
                    and consider the risks before buying or trading $HOPE.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article>
                <SectionHeading
                  id="promise"
                  number="Section 13"
                  title="Our Promise"
                />
                <Prose>
                  <p>
                    HopeCoin begins with a simple belief: a community can use its
                    collective voice for something meaningful. We want to build a
                    project that combines the creativity of meme culture with a
                    sincere commitment to pursuing charitable impact.
                  </p>
                  <p>
                    We know that a mission alone is not enough. Trust must be
                    earned through actions, evidence, consistency, and
                    accountability. Our proposed commitment to allocate{" "}
                    {site.feeShare} of eligible creator-fee revenue toward
                    charity reflects the priority we want to give this mission.
                  </p>
                  <p>
                    We aim to grow responsibly, communicate honestly, and
                    demonstrate our progress through verifiable results. Every
                    meme can spread a message. Every supporter can help a
                    community grow. Every completed and verified contribution can
                    bring us closer to our goal.
                  </p>
                  <p className="font-serif text-2xl tracking-tight text-ink">
                    HopeCoin ($HOPE) — Memes for Hope. Action for Kids.
                  </p>
                  <p>
                    Together, we build a community where hope means more than a
                    name.
                  </p>
                </Prose>
              </article>
            </Reveal>

            <Reveal>
              <article
                id="notice"
                className="scroll-mt-28 rounded-[1.6rem] border border-ink/12 bg-sand/55 px-6 py-10 md:px-10 md:py-12"
              >
                <p className="kicker">Important notice</p>
                <h2 className="display display-md mt-4 max-w-3xl">
                  A working document. Not a finished claim.
                </h2>
                <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-muted">
                  <p>
                    This document is a working white paper for a proposed
                    project. Token parameters, the fair-launch model, revenue
                    allocations, charitable arrangements, and roadmap milestones
                    are subject to confirmation and implementation.
                  </p>
                  <p>
                    The proposed {site.feeShare} charitable allocation is based
                    on eligible creator-fee revenue actually received by the
                    project, not total trading volume or token supply.
                  </p>
                  <p>
                    No charitable partnership, donation, token feature, or
                    completed milestone should be represented as established
                    without appropriate evidence.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/token" className="btn btn-ink">
                    View token details
                  </Link>
                  <Link href="/impact" className="btn btn-ghost">
                    Public ledger
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
