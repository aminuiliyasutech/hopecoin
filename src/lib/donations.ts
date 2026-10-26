/**
 * HopeCoin creator-fee share ledger.
 *
 * Public record of how eligible creator-fee revenue is shared — especially the
 * proposed 50% directed to children’s cancer support. Add a row when a share
 * is allocated or transferred. Prefer a Solana transaction signature.
 *
 * Status meanings:
 * - allocated  — share calculated / set aside, not yet transferred
 * - completed  — share transferred on-chain
 * - acknowledged — destination confirmed receipt (when available)
 */

export const donationTracking = {
  chain: "Solana",
  explorerBase: "https://solscan.io",
  rpcUrl: "https://api.mainnet-beta.solana.com",
  sourceRepo: "https://github.com/aminuiliyasutech/hopecoin",
  sourcePath: "src/lib/donations.ts",
  /**
   * Publish wallet addresses when ready.
   * Treasury: holds eligible creator-fee revenue before sharing.
   * Charity: wallet used to send the charity share of creator fees.
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
  /** Where this creator-fee share went */
  recipient: string;
  status: DonationStatus;
  /** Solana transaction signature when the share moved on-chain */
  txSignature?: string;
  proofLabel?: string;
  proofUrl?: string;
  notes?: string;
};

/**
 * Creator-fee share rows. Newest first.
 *
 * {
 *   id: "hope-fee-001",
 *   date: "2026-11-01",
 *   amount: "500",
 *   currency: "USDC",
 *   recipient: "Verified children’s cancer organization",
 *   status: "completed",
 *   txSignature: "5xampleSolanaSignature…",
 *   notes: "50% of eligible creator fees — Nov share",
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
