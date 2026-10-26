import {
  donationRecords,
  explorerTxUrl,
  formatDonationDate,
  type DonationStatus,
} from "@/lib/donations";

const statusLabel: Record<DonationStatus, string> = {
  allocated: "Allocated",
  completed: "Completed",
  acknowledged: "Acknowledged",
};

function StatusPill({ status }: { status: DonationStatus }) {
  const tone =
    status === "acknowledged"
      ? "bg-gold/15 text-gold-deep"
      : status === "completed"
        ? "bg-ink/8 text-ink"
        : "bg-sand text-muted";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${tone}`}
    >
      {statusLabel[status]}
    </span>
  );
}

export function DonationLedger() {
  if (donationRecords.length === 0) {
    return (
      <div className="overflow-hidden rounded-[1.8rem] border border-ink/10 bg-ivory">
        <div className="border-b border-ink/10 px-6 py-5 md:px-8">
          <p className="kicker">Creator fees</p>
          <p className="mt-2 font-serif text-2xl tracking-tight">
            Awaiting first fee share
          </p>
        </div>
        <div className="px-6 py-10 md:px-8 md:py-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            When eligible creator fees are shared, each entry will list date,
            amount, destination, status, and a Solana transaction proof when
            available. Until the first share is recorded, this table stays empty
            on purpose.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Date & amount",
              "Destination & status",
              "Solscan proof",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1rem] border border-ink/10 bg-sand/40 px-4 py-4 text-sm font-medium text-ink"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-ink/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[44rem] text-left text-sm">
          <thead className="bg-sand/70 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
            <tr>
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="px-5 py-4 font-semibold">Amount</th>
              <th className="px-5 py-4 font-semibold">Destination</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Proof</th>
            </tr>
          </thead>
          <tbody>
            {donationRecords.map((row) => (
              <tr key={row.id} className="border-t border-ink/10 bg-ivory">
                <td className="px-5 py-4 whitespace-nowrap">
                  {formatDonationDate(row.date)}
                </td>
                <td className="px-5 py-4 whitespace-nowrap font-medium">
                  {row.amount} {row.currency}
                </td>
                <td className="px-5 py-4">
                  <p>{row.recipient}</p>
                  {row.notes ? (
                    <p className="mt-1 text-xs text-stone">{row.notes}</p>
                  ) : null}
                </td>
                <td className="px-5 py-4">
                  <StatusPill status={row.status} />
                </td>
                <td className="px-5 py-4">
                  {row.txSignature ? (
                    <a
                      href={explorerTxUrl(row.txSignature)}
                      className="link-quiet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {row.proofLabel || "Solscan"}
                    </a>
                  ) : row.proofUrl ? (
                    <a
                      href={row.proofUrl}
                      className="link-quiet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {row.proofLabel || "View"}
                    </a>
                  ) : (
                    <span className="text-stone">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
