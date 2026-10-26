import Link from "next/link";
import { DonationLedger } from "@/components/DonationLedger";
import { Reveal } from "@/components/Reveal";
import { WalletTracker } from "@/components/WalletTracker";
import {
  donationRecords,
  donationStats,
  donationTracking,
} from "@/lib/donations";
import { site } from "@/lib/site";

export function DonationDashboard() {
  const stats = donationStats();

  const cards = [
    {
      label: "Chain",
      value: donationTracking.chain,
      hint: "All on-chain proofs resolve on Solana explorers.",
    },
    {
      label: "Fee commitment",
      value: site.feeShare,
      hint: "Of eligible creator-fee revenue toward charity.",
    },
    {
      label: "Gifts recorded",
      value: String(stats.totalGifts),
      hint:
        stats.totalGifts === 0
          ? "Ledger is live. First gift pending."
          : `${stats.completedGifts} completed · ${stats.allocatedGifts} allocated`,
    },
    {
      label: "Latest gift",
      value: stats.latestDate ?? "—",
      hint:
        donationRecords.length === 0
          ? "Will update when the first row is published."
          : "Most recent entry in the public ledger.",
    },
  ];

  return (
    <div id="dashboard" className="scroll-mt-28">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="kicker">Public tracker</p>
            <h2 className="display display-md mt-5 max-w-3xl">
              Donation dashboard.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              A public Solana ledger for HopeCoin’s charitable gifts — amounts,
              recipients, status, and explorer proofs anyone can verify.
            </p>
          </div>
          <a href="#ledger" className="btn btn-ghost shrink-0">
            Jump to ledger
          </a>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Reveal key={card.label} delay={index * 50}>
            <article className="h-full rounded-[1.4rem] border border-ink/12 bg-ivory px-6 py-7">
              <p className="kicker">{card.label}</p>
              <p className="mt-4 font-serif text-[2rem] leading-none tracking-tight">
                {card.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {card.hint}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <div className="mb-8">
            <p className="kicker">Wallets</p>
            <h3 className="mt-4 font-serif text-3xl tracking-tight">
              Track the money on Solana.
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Live balances pull from Solana mainnet. Explorer links open
              Solscan so the community can inspect activity independently.
            </p>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <WalletTracker />
        </Reveal>
      </div>

      <div id="ledger" className="mt-16 scroll-mt-28">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="kicker">Public ledger</p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">
                Every gift, in one place.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Allocated is not completed. Completed is not acknowledged until
              the recipient confirms.
            </p>
          </div>
        </Reveal>
        <Reveal delay={40}>
          <DonationLedger />
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-16 grid gap-6 rounded-[1.8rem] bg-espresso px-7 py-10 text-ivory md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-12">
          <div>
            <p className="kicker text-gold-soft">How to verify</p>
            <h3 className="mt-4 font-serif text-3xl tracking-tight">
              Proofs live on Solana.
            </h3>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ivory/70">
              Each completed gift will list amount, recipient, status, and a
              Solscan transaction link when available. That explorer link is the
              independent check — not a screenshot, not a promise.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3">
            <Link
              href="/whitepaper#charity"
              className="btn border border-ivory/20 bg-transparent text-ivory hover:bg-ivory/10"
            >
              Read the 50% commitment
            </Link>
            <Link
              href="/token"
              className="btn border border-ivory/20 bg-transparent text-ivory hover:bg-ivory/10"
            >
              View token details
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
