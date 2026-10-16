"use client";

import { useState } from "react";
import { site, truncateAddress } from "@/lib/site";

export function ContractBox() {
  const [copied, setCopied] = useState(false);
  const address = site.contractAddress;

  if (!address) {
    return (
      <div className="rounded-[1.5rem] border border-ink/12 bg-ivory px-6 py-7">
        <p className="kicker">Official contract</p>
        <p className="mt-4 font-serif text-[1.7rem] leading-tight tracking-tight">
          Published here first.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The only Solana address for $HOPE will appear on this page. If it is
          not here, it is not ours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-ink/12 bg-ivory px-6 py-7">
      <p className="kicker">Official contract</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p className="font-serif text-[1.7rem] tracking-tight">
          {truncateAddress(address)}
        </p>
        <button
          type="button"
          className="btn btn-ghost !min-h-10 text-sm"
          onClick={async () => {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-4 break-all text-xs leading-relaxed text-stone">{address}</p>
    </div>
  );
}
