"use client";

import { useEffect, useState } from "react";
import {
  donationTracking,
  explorerAddressUrl,
} from "@/lib/donations";
import { truncateAddress } from "@/lib/site";

type WalletKind = "treasury" | "charity";

const labels: Record<
  WalletKind,
  { title: string; hint: string }
> = {
  treasury: {
    title: "Creator-fee wallet",
    hint: "Eligible creator-fee revenue before it is shared.",
  },
  charity: {
    title: "Fee-share wallet",
    hint: "Wallet used to send the charity share of creator fees.",
  },
};

async function fetchSolBalance(address: string) {
  const response = await fetch(donationTracking.rpcUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getBalance",
      params: [address],
    }),
  });

  if (!response.ok) throw new Error("RPC unavailable");
  const payload = (await response.json()) as {
    result?: { value?: number };
    error?: unknown;
  };
  if (payload.error || payload.result?.value == null) {
    throw new Error("Balance unavailable");
  }
  return payload.result.value / 1_000_000_000;
}

function WalletCard({
  kind,
  address,
}: {
  kind: WalletKind;
  address: string;
}) {
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const meta = labels[kind];

  useEffect(() => {
    let cancelled = false;
    fetchSolBalance(address)
      .then((value) => {
        if (!cancelled) setBalance(value);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [address]);

  return (
    <article className="rounded-[1.4rem] border border-ink/12 bg-ivory px-6 py-7">
      <p className="kicker">{meta.title}</p>
      <p className="mt-4 font-serif text-2xl tracking-tight">
        {truncateAddress(address)}
      </p>
      <p className="mt-2 break-all text-xs leading-relaxed text-stone">
        {address}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{meta.hint}</p>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-ink/10 pt-5">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-gold">
            Live SOL
          </p>
          <p className="mt-2 font-serif text-3xl tracking-tight">
            {error
              ? "—"
              : balance == null
                ? "…"
                : balance.toLocaleString(undefined, {
                    maximumFractionDigits: 4,
                  })}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-ghost !min-h-10 px-4 text-sm"
            onClick={async () => {
              await navigator.clipboard.writeText(address);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <a
            href={explorerAddressUrl(address)}
            className="btn btn-ink !min-h-10 px-4 text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Solscan
          </a>
        </div>
      </div>
    </article>
  );
}

export function WalletTracker() {
  const { treasury, charity } = donationTracking.wallets;
  const wallets = (
    [
      treasury ? { kind: "treasury" as const, address: treasury } : null,
      charity ? { kind: "charity" as const, address: charity } : null,
    ] as const
  ).filter(Boolean) as { kind: WalletKind; address: string }[];

  if (wallets.length === 0) {
    return (
      <div className="rounded-[1.6rem] border border-dashed border-ink/15 bg-sand/40 px-7 py-10 md:px-10">
        <p className="kicker">On-chain wallets</p>
        <h3 className="mt-4 font-serif text-3xl tracking-tight">
          Solana addresses publish here first.
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          When creator-fee wallets are ready, their addresses and live SOL
          balances will appear here with Solscan links anyone can check.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {wallets.map((wallet) => (
        <WalletCard
          key={wallet.kind}
          kind={wallet.kind}
          address={wallet.address}
        />
      ))}
    </div>
  );
}
