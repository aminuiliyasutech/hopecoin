/**
 * HopeCoin open-source donation ledger.
 *
 * This file is the public source of truth for charitable gifts attributed to
 * HopeCoin. Add a row when a donation is completed. Prefer a Solana transaction
 * signature so anyone can verify the transfer on-chain.
 *
 * Status meanings (aligned with the white paper):
 * - allocated  — designated for charity, not yet transferred
 * - completed  — funds transferred to a recipient
 * - acknowledged — recipient confirmed the gift (when available)
 */

export const donationTracking = {
  chain: "Solana",
  explorerBase: "https://solscan.io",
  rpcUrl: "https://api.mainnet-beta.solana.com",
  /** Repo where this ledger is maintained in the open. */
  sourceRepo: "https://github.com/aminuiliyasutech/hopecoin",
  sourcePath: "src/lib/donations.ts",
  /**
   * Publish wallet addresses here when ready. Leave empty until verified.
   * Treasury: holds eligible creator-fee revenue before allocation.
   * Charity: outbound wallet used for verified charitable transfers.
   */
  wallets: {
    treasury: "",
    charity: "",
  },
} as const;

export type DonationStatus = "allocated" | "completed" | "acknowledged";

export type DonationRecord = {
  id: string;
  /** ISO date string, e.g. 2026-10-26 */
  date: string;
  amount: string;
  currency: string;
  recipient: string;
  status: DonationStatus;
  /** Solana transaction signature when the gift moved on-chain */
  txSignature?: string;
  proofLabel?: string;
  /** Off-chain receipt or partner confirmation URL */
  proofUrl?: string;
  notes?: string;
};

/**
 * Public donation ledger. Newest first.
 * Example row (keep commented until a real gift exists):
 *
 * {
 *   id: "hope-001",
 *   date: "2026-11-01",
 *   amount: "500",
 *   currency: "USDC",
 *   recipient: "Verified children’s cancer organization",
 *   status: "completed",
 *   txSignature: "5xampleSolanaSignature…",
 *   notes: "50% creator-fee allocation — Q4 tranche",
 * }
 */
export const donationRecords: DonationRecord[] = [];

export function explorerTxUrl(signature: string) {
  return `${donationTracking.explorerBase}/tx/${signature}`;
}

export function explorerAddressUrl(address: string) {
  return `${donationTracking.explorerBase}/account/${address}`;
}

export function formatDonationDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function donationStats(records: DonationRecord[] = donationRecords) {
  const completed = records.filter(
    (row) => row.status === "completed" || row.status === "acknowledged"
  );
  const allocated = records.filter((row) => row.status === "allocated");

  return {
    totalGifts: records.length,
    completedGifts: completed.length,
    allocatedGifts: allocated.length,
    latestDate: records[0] ? formatDonationDate(records[0].date) : null,
  };
}

/** Legacy shape used by older site helpers — maps from the open ledger. */
export function donationsAsLegacyRows() {
  return donationRecords.map((row) => ({
    date: formatDonationDate(row.date),
    amount: `${row.amount} ${row.currency}`,
    partner: row.recipient,
    proofLabel: row.proofLabel || (row.txSignature ? "Solscan" : undefined),
    proofUrl: row.txSignature
      ? explorerTxUrl(row.txSignature)
      : row.proofUrl,
  }));
}
