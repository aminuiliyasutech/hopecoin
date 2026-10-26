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
      hint: "Creator-fee share proofs resolve on Solana explorers.",
    },
    {
      label: "Fee share",
      value: site.feeShare,
      hint: "Of eligible creator-fee revenue toward children’s cancer support.",
    },
    {
      label: "Shares recorded",
      value: String(stats.totalGifts),
      hint:
        stats.totalGifts === 0
          ? "Tracker is live. First share pending."
          : `${stats.completedGifts} completed · ${stats.allocatedGifts} allocated`,
    },
    {
      label: "Latest share",
      value: stats.latestDate ?? "—",
      hint:
        donationRecords.length === 0
          ? "Updates when the first creator-fee share is published."
          : "Most recent creator-fee share in the public record.",
    },
  ];

  return (
    <div id="dashboard" className="scroll-mt-28">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="kicker">Creator fees</p>
            <h2 className="display display-md mt-5 max-w-3xl">
              Fee share tracker.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Follow how HopeCoin shares eligible creator fees — amounts,
              destinations, status, and Solana proofs. This is fee transparency,
              not a donation ask.
            </p>
          </div>
          <a href="#ledger" className="btn btn-ghost shrink-0">
            Jump to fee record
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
              Follow the creator fees on Solana.
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Live balances pull from Solana mainnet. Explorer links open
              Solscan so anyone can inspect fee activity independently.
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
              <p className="kicker">Fee share record</p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight">
                Every creator-fee share, listed.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Allocated means set aside. Completed means transferred.
              Acknowledged means confirmed by the destination.
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
              Each completed creator-fee share will list amount, destination,
              status, and a Solscan transaction link when available. That
              explorer link is the independent check.
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
